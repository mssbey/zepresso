import { readFile, writeFile, rename } from "node:fs/promises";
import path from "node:path";

import { list, put } from "@vercel/blob";

import type { Badge, Campaign, Category, Product, Tag, VenueInfo } from "@/types/menu";
import {
  renderCampaignsModule,
  renderCategoriesModule,
  renderProductsModule,
  renderVenueModule,
} from "@/lib/server/content-render.js";
import { triggerRedeploy } from "@/lib/server/deploy-hook.js";

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "src/data/content");
const DATA_DIR = path.join(ROOT, "src/data");
const BLOB_PREFIX = "content/";

/**
 * Menü içeriğinin gerçek kaynağı Vercel Blob'dur (admin panel canlı sitede
 * kullanılabilsin diye — Vercel'in prod fonksiyonları salt-okunur dosya
 * sistemiyle çalışır). Yerel `src/data/content/*.json` + `src/data/*.ts`
 * dosyalarına yazmak yalnızca "best effort": yerelde (`next dev`) anında
 * hot-reload sağlar, Vercel'de sessizce başarısız olur ve önemi yoktur —
 * gerçek güncelleme bir sonraki build'de `scripts/sync-content.mjs` ile olur.
 */

async function readBlobJson<T>(key: string): Promise<T | null> {
  const { blobs } = await list({ prefix: `${BLOB_PREFIX}${key}`, limit: 1 });
  const blob = blobs[0];
  if (!blob) return null;
  const res = await fetch(blob.url, { cache: "no-store" });
  if (!res.ok) return null;
  return (await res.json()) as T;
}

async function writeBlobJson(key: string, data: unknown): Promise<void> {
  await put(`${BLOB_PREFIX}${key}`, JSON.stringify(data, null, 2) + "\n", {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

async function readLocalJson<T>(file: string): Promise<T> {
  const raw = await readFile(path.join(CONTENT_DIR, file), "utf8");
  return JSON.parse(raw) as T;
}

/** JSON dosyasını ve türetilmiş .ts modülünü atomik biçimde (temp + rename) yazar. */
async function atomicWrite(targetPath: string, contents: string) {
  const tmpPath = `${targetPath}.tmp-${process.pid}-${Date.now()}`;
  await writeFile(tmpPath, contents, "utf8");
  await rename(tmpPath, targetPath);
}

/** Yerel dosya sistemine best-effort yazar; Vercel'in salt-okunur fs'inde sessizce yok sayar. */
async function bestEffortLocalWrite(jsonFile: string, jsonBody: string, tsFile: string, tsBody: string) {
  try {
    await atomicWrite(path.join(CONTENT_DIR, jsonFile), jsonBody);
    await atomicWrite(path.join(DATA_DIR, tsFile), tsBody);
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
  await bestEffortLocalWrite(
    "products.json",
    jsonBody,
    "products.ts",
    renderProductsModule(products),
  );
  await triggerRedeploy();
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
  await bestEffortLocalWrite(
    "categories.json",
    jsonBody,
    "categories.ts",
    renderCategoriesModule(data),
  );
  await triggerRedeploy();
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
  await bestEffortLocalWrite("venue.json", jsonBody, "venue.ts", renderVenueModule(venue));
  await triggerRedeploy();
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
  await bestEffortLocalWrite(
    "campaigns.json",
    jsonBody,
    "campaigns.ts",
    renderCampaignsModule(campaigns),
  );
  await triggerRedeploy();
}
