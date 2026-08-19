/**
 * Zepresso — build öncesi içerik senkronizasyonu (CLI).
 *
 * Menü içeriğinin gerçek kaynağı artık Vercel Blob (bkz.
 * `src/lib/admin/content-store.ts`). `src/data/*.ts` dosyaları statik olarak
 * import edildiği için (11 müşteri-yüzü bileşeni), her `next build`'den önce
 * bu script Blob'daki en güncel veriyi okuyup o dosyaları yeniden üretir.
 *
 * `BLOB_READ_WRITE_TOKEN` yoksa (örn. Blob bağlanmamış bir ortamda ilk build)
 * hiçbir şey yapmadan çıkar — git'teki mevcut `.ts` dosyaları kullanılır.
 *
 * Blob'da henüz veri yoksa (ilk çalıştırma), git'teki
 * `src/data/content/*.json` tohum olarak Blob'a yüklenir.
 *
 * Çalıştırmak için: npm run build (otomatik) / node scripts/sync-content.mjs
 */

import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { list, put } from "@vercel/blob";

import {
  renderCategoriesModule,
  renderProductsModule,
  renderVenueModule,
} from "../src/lib/server/content-render.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT_DIR = path.join(ROOT, "src/data/content");
const DATA_DIR = path.join(ROOT, "src/data");
const BLOB_PREFIX = "content/";

const ENTRIES = [
  { key: "products.json", tsFile: "products.ts", render: renderProductsModule },
  { key: "categories.json", tsFile: "categories.ts", render: renderCategoriesModule },
  { key: "venue.json", tsFile: "venue.ts", render: renderVenueModule },
];

async function readFromBlob(key) {
  const { blobs } = await list({ prefix: `${BLOB_PREFIX}${key}`, limit: 1 });
  const blob = blobs[0];
  if (!blob) return null;
  const res = await fetch(blob.url, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

async function seedBlobFromLocal(key) {
  const raw = await readFile(path.join(CONTENT_DIR, key), "utf8");
  const data = JSON.parse(raw);
  await put(`${BLOB_PREFIX}${key}`, raw, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
  return data;
}

async function main() {
  // `next build`/`next dev` .env.local'i kendisi yükler; bu script çıplak
  // `node` ile çalıştığı için (Vercel'de gerçek env vardır, .env.local yoktur)
  // yalnızca yerelde ve dosya varsa kendimiz yükleriz.
  const envLocalPath = path.join(ROOT, ".env.local");
  if (!process.env.BLOB_READ_WRITE_TOKEN && existsSync(envLocalPath)) {
    process.loadEnvFile(envLocalPath);
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.log("[sync-content] BLOB_READ_WRITE_TOKEN yok, git'teki src/data/*.ts kullanılıyor.");
    return;
  }

  for (const { key, tsFile, render } of ENTRIES) {
    const data = (await readFromBlob(key)) ?? (await seedBlobFromLocal(key));
    await writeFile(
      path.join(CONTENT_DIR, key),
      JSON.stringify(data, null, 2) + "\n",
      "utf8",
    );
    await writeFile(path.join(DATA_DIR, tsFile), render(data), "utf8");
    console.log(`[sync-content] ${tsFile} güncellendi.`);
  }
}

await main();
