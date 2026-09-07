import { randomUUID } from "node:crypto";
import { readFile, writeFile, rename } from "node:fs/promises";
import path from "node:path";

import { del, list, put } from "@vercel/blob";

import type { Badge, Campaign, Category, Product, Tag, VenueInfo } from "@/types/menu";

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "src/data/content");
const BLOB_PREFIX = "content/";

/**
 * Menü içeriğinin gerçek kaynağı Vercel Blob'dur (admin panel canlı sitede de
 * kullanılabilsin diye — Vercel'in prod fonksiyonları salt-okunur dosya
 * sistemiyle çalışır). Blob okunamazsa git'teki `src/data/content/*.json`
 * yedeğine düşülür.
 *
 * Müşteri menüsü bu veriyi her istekte okur (`@/lib/menu-content`); bu yüzden
 * admin panelden yapılan değişiklikler yeni bir build beklemeden yansır.
 *
 * Her kayıt `content/<ad>/<zaman>-<uuid>.json` gibi benzersiz bir yola yazılır.
 * Daha önce içerik hep aynı yola yazılıyordu; Blob o URL'i CDN'de bir aya kadar
 * önbelleğe aldığı için kaydedilen menü siteye günlerce yansımıyordu. Yollar
 * artık değişmez olduğundan, yeni sürüm her zaman yeni bir URL'dir: bayat
 * okuma olamaz, eski sürümler de CDN'de rahatça önbelleklenir.
 *
 * Yerel JSON'a yazmak yalnızca "best effort": geliştirmede git'teki tohum
 * verinin güncel kalmasını sağlar, Vercel'in salt-okunur fs'inde sessizce
 * yok sayılır.
 */

/** Bir sürümün ardından tutulan eski sürüm sayısı (geri dönüş payı). */
const KEPT_VERSIONS = 3;

/** "products.json" → "content/products/" */
function versionPrefix(key: string): string {
  return `${BLOB_PREFIX}${key.replace(/\.json$/, "")}/`;
}

/** Sürümler zaman damgasıyla adlandırılır; en büyüğü en güncelidir. */
function versionOrder(pathname: string): number {
  return Number(pathname.split("/").pop()?.split("-")[0] ?? 0);
}

async function fetchJson<T>(url: string): Promise<T | null> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return null;
  return (await res.json()) as T;
}

async function readBlobJson<T>(key: string): Promise<T | null> {
  try {
    const { blobs } = await list({ prefix: versionPrefix(key) });
    const newest = blobs.reduce<(typeof blobs)[number] | null>(
      (best, blob) =>
        !best || versionOrder(blob.pathname) > versionOrder(best.pathname) ? blob : best,
      null,
    );
    if (newest) return fetchJson<T>(newest.url);

    // Sürümlü yola geçmeden önce yazılmış tek dosyalık eski biçim.
    const { blobs: legacy } = await list({ prefix: `${BLOB_PREFIX}${key}`, limit: 1 });
    if (!legacy[0]) return null;
    return fetchJson<T>(`${legacy[0].url}?v=${legacy[0].uploadedAt.getTime()}`);
  } catch {
    // Blob yapılandırılmamış ya da erişilemiyor — yerel yedek kullanılır.
    return null;
  }
}

async function writeBlobJson(key: string, data: unknown): Promise<void> {
  const prefix = versionPrefix(key);
  await put(`${prefix}${Date.now()}-${randomUUID().slice(0, 8)}.json`, JSON.stringify(data, null, 2) + "\n", {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });

  // Eski sürümler yalnızca geri dönüş için durur; birikmesinler.
  try {
    const { blobs } = await list({ prefix });
    const stale = blobs
      .sort((a, b) => versionOrder(b.pathname) - versionOrder(a.pathname))
      .slice(KEPT_VERSIONS);
    if (stale.length > 0) await del(stale.map((blob) => blob.url));
  } catch {
    // Temizlik başarısız olsa da kayıt geçerlidir.
  }
}

async function readLocalJson<T>(file: string): Promise<T> {
  const raw = await readFile(path.join(CONTENT_DIR, file), "utf8");
  return JSON.parse(raw) as T;
}

/** JSON dosyasını atomik biçimde (temp + rename) yazar. */
async function atomicWrite(targetPath: string, contents: string) {
  const tmpPath = `${targetPath}.tmp-${process.pid}-${Date.now()}`;
  await writeFile(tmpPath, contents, "utf8");
  await rename(tmpPath, targetPath);
}

/** Yerel dosya sistemine best-effort yazar; Vercel'in salt-okunur fs'inde sessizce yok sayar. */
async function bestEffortLocalWrite(jsonFile: string, jsonBody: string) {
  try {
    await atomicWrite(path.join(CONTENT_DIR, jsonFile), jsonBody);
  } catch {
    // Vercel'de salt-okunur fs — beklenen durum, Blob gerçek kaynak.
  }
}

/* --------------------------------------------------------------- products */

export async function readProducts(): Promise<Product[]> {
  const fromBlob = await readBlobJson<Product[]>("products.json");
  if (fromBlob) return fromBlob;
  return readLocalJson<Product[]>("products.json");
}

export async function writeProducts(products: Product[]): Promise<void> {
  const jsonBody = JSON.stringify(products, null, 2) + "\n";
  await writeBlobJson("products.json", products);
  await bestEffortLocalWrite("products.json", jsonBody);
}

/* ----------------------------------------------------- categories/tags/badges */

interface CategoryData {
  categories: Category[];
  tags: Record<string, Tag>;
  badges: Record<string, Badge>;
}

export async function readCategoryData(): Promise<CategoryData> {
  const fromBlob = await readBlobJson<CategoryData>("categories.json");
  if (fromBlob) return fromBlob;
  return readLocalJson<CategoryData>("categories.json");
}

export async function writeCategoryData(data: CategoryData): Promise<void> {
  const jsonBody = JSON.stringify(data, null, 2) + "\n";
  await writeBlobJson("categories.json", data);
  await bestEffortLocalWrite("categories.json", jsonBody);
}

/** Bir etiket silindiğinde, o etiketi kullanan tüm ürünlerden temizler. */
export async function removeTagFromProducts(tagId: string): Promise<void> {
  const products = await readProducts();
  const next = products.map((product) =>
    product.tags.includes(tagId)
      ? { ...product, tags: product.tags.filter((tag) => tag !== tagId) }
      : product,
  );
  await writeProducts(next);
}

/** Bir rozet silindiğinde, o rozeti kullanan tüm ürünlerden kaldırır. */
export async function removeBadgeFromProducts(badgeId: string): Promise<void> {
  const products = await readProducts();
  const next = products.map((product) =>
    product.badge === badgeId ? { ...product, badge: undefined } : product,
  );
  await writeProducts(next);
}

/* ------------------------------------------------------------------- venue */

export async function readVenue(): Promise<VenueInfo> {
  const fromBlob = await readBlobJson<VenueInfo>("venue.json");
  if (fromBlob) return fromBlob;
  return readLocalJson<VenueInfo>("venue.json");
}

export async function writeVenue(venue: VenueInfo): Promise<void> {
  const jsonBody = JSON.stringify(venue, null, 2) + "\n";
  await writeBlobJson("venue.json", venue);
  await bestEffortLocalWrite("venue.json", jsonBody);
}

/* ---------------------------------------------------------------- campaigns */

export async function readCampaigns(): Promise<Campaign[]> {
  const fromBlob = await readBlobJson<Campaign[]>("campaigns.json");
  if (fromBlob) return fromBlob;
  return readLocalJson<Campaign[]>("campaigns.json");
}

export async function writeCampaigns(campaigns: Campaign[]): Promise<void> {
  const jsonBody = JSON.stringify(campaigns, null, 2) + "\n";
  await writeBlobJson("campaigns.json", campaigns);
  await bestEffortLocalWrite("campaigns.json", jsonBody);
}
