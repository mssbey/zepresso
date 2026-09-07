/**
 * Zepresso — ürün görseli üretici (CLI).
 *
 * `src/data/content/products.json` içindeki `art` tarifini okur ve her ürün için
 * `public/menu/<id>.svg` dosyasını yazar. Sahne üretim mantığı
 * `src/lib/server/art-render.js` içinde paylaşılıyor (admin panel de aynı
 * modülü kullanır).
 *
 * Çalıştırmak için:  npm run art
 */

import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { buildScene, buildHero } from "../src/lib/server/art-render.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "menu");
const PRODUCTS_FILE = path.join(ROOT, "src", "data", "content", "products.json");

/* ---------------------------------------------------------------- çalıştır */

async function main() {
  const products = JSON.parse(await readFile(PRODUCTS_FILE, "utf8"));

  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  const seen = new Set();
  for (const product of products) {
    if (seen.has(product.id)) {
      throw new Error(`Yinelenen ürün id: ${product.id}`);
    }
    seen.add(product.id);

    const expected = `/menu/${product.id}.svg`;
    if (product.image !== expected) {
      throw new Error(
        `"${product.id}" için image alanı ${expected} olmalı, ${product.image} bulundu.`,
      );
    }
    await writeFile(path.join(OUT_DIR, `${product.id}.svg`), buildScene(product), "utf8");
  }

  await writeFile(path.join(ROOT, "public", "hero.svg"), buildHero(), "utf8");

  console.log(`✓ ${products.length} ürün görseli + hero üretildi → public/menu`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

