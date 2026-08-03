/**
 * Ürün fotoğraflarını Unsplash'ten indirir.
 *
 *   node scripts/fetch-photos.mjs           → eksik olanları indirir
 *   node scripts/fetch-photos.mjs --force   → hepsini yeniden indirir
 *   node scripts/fetch-photos.mjs turk-kahvesi tiramisu   → yalnızca verilenler
 *
 * Üretilenler:
 *   public/menu/photos/<id>.jpg   — 1000×1000, kalite 72 (kart + detay için yeter)
 *   public/hero.jpg               — giriş görseli, 1800×1200
 *   src/data/photo-meta.ts        — LQIP (bulanık base64 önizleme) + fotoğrafçı künyesi
 *
 * Yalnızca Unsplash'in ücretsiz lisanslı görselleri alınır; `plus.unsplash.com`
 * altındaki Unsplash+ (abonelik) fotoğrafları atlanır. Künye bilgisi
 * `photo-meta.ts` üzerinden arayüzdeki "Fotoğraflar" bölümüne basılır.
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PHOTO_DIR = path.join(ROOT, "public", "menu", "photos");
const META_FILE = path.join(ROOT, "src", "data", "photo-meta.ts");

/**
 * Ürün → arama sorgusu.
 *
 * Sorgular İngilizce; Unsplash'in Türkçe yemek/içecek dizini çok zayıf.
 * `avoid` içindeki kelimeler açıklamada geçiyorsa o sonuç elenir — böylece
 * "matcha" ararken latte, "espresso" ararken makine fotoğrafı gelmiyor.
 */
const QUERIES = {
  /* Sıcak kahveler */
  "zepresso-signature-latte": ["latte art coffee cup", "latte art"],
  "spanish-latte": "spanish latte layered coffee glass",
  "flat-white": "flat white coffee cup",
  "salted-caramel-mocha": ["caramel coffee whipped cream", "mocha whipped cream"],
  "espresso-doppio": "espresso shot small cup",
  cortado: "cortado coffee glass",
  "filtre-kahve-v60": "pour over v60 coffee dripper",
  "turk-kahvesi": "turkish coffee cup",
  cappuccino: "cappuccino cup saucer",

  /* Soğuk kahveler */
  "tiramisu-cold-brew": "cold brew coffee cream glass",
  "nitro-cold-brew": ["nitro cold brew", "black iced coffee glass"],
  "buzlu-americano": "iced americano coffee glass",
  "iced-spanish-latte": "iced latte layered glass",
  affogato: "affogato ice cream espresso",
  "buzlu-beyaz-cikolatali-mocha": "iced white chocolate mocha",
  "coconut-cold-brew": "coconut iced coffee glass",
  "espresso-tonik": "espresso tonic drink glass",

  /* İmza içecekler */
  "iced-matcha-latte": "iced matcha latte glass",
  "zepresso-karanlik-kakao": "hot chocolate dark cocoa mug",
  "fistikli-ruya-latte": ["pistachio latte", "pistachio drink green"],
  "lavanta-bal-latte": ["lavender latte", "lavender coffee"],
  "aci-cikolata-chili": "hot chocolate chili cinnamon",
  "portakal-cicegi-cold-foam": "orange coffee cold foam glass",
  "tahin-pekmez-latte": ["tahini latte", "creamy caramel latte glass"],

  /* Çaylar */
  "zepresso-demleme-siyah-cay": "turkish tea glass",
  "bergamot-earl-grey": "earl grey tea cup",
  "adacayi-bal": "herbal sage tea honey",
  "yesil-cay-yasemin": "jasmine green tea cup",
  "nane-limon": "mint lemon tea glass",
  "kis-cayi": "winter spiced tea cinnamon",
  "matcha-toreni": "matcha whisk bowl ceremony",

  /* Tatlılar */
  "san-sebastian-cheesecake": "basque burnt cheesecake slice",
  tiramisu: "tiramisu dessert plate",
  "fondan-cikolatali-sufle": "chocolate lava cake dessert",
  "fistikli-kadayif-cheesecake": "pistachio kunafa dessert",
  "karamelli-profiterol": ["profiterole", "cream puff dessert chocolate"],
  "vegan-cikolatali-brownie": "chocolate brownie squares",
  "limonlu-tart": "lemon tart slice",

  /* Atıştırmalıklar */
  "kruvasan-sandvic": "croissant sandwich cheese",
  "avokadolu-eksi-maya-tost": "avocado toast sourdough",
  "truf-mantarli-kruvasan": "mushroom croissant savory",
  "acili-sucuklu-sandvic": "spicy sausage sandwich",
  "somon-krem-peynir-bagel": "salmon cream cheese bagel",
  "humuslu-vegan-wrap": "hummus vegetable wrap",
  "zeytinli-pogaca": "olive bread roll pastry",
  "granola-yogurt-kasesi": "granola yogurt bowl berries",
};

/**
 * Aramanın iyi sonuç vermediği ürünler için elle seçilmiş Unsplash kimlikleri.
 * Sorgunun yerine geçer; böylece betik her çalıştığında aynı fotoğraf gelir.
 */
const PINNED = {
  // "nitro cold brew" araması markalı bir maden suyu ürün çekimi getiriyordu.
  "nitro-cold-brew": "H9wRcF1GKXg",
  // "olive bread roll" kırmızı tabaklı, palete uymayan bir kare veriyordu.
  "zeytinli-pogaca": "u6riCxkz1rY",
};

/**
 * Giriş bölümünün tam ekran görseli — kareye kırpılmaz.
 * Aramaya bırakılmıyor: sayfanın ilk izlenimi her çalıştırmada aynı kalsın
 * diye belirli bir fotoğrafa sabitlendi (koyu zemin, sıcak krema).
 */
const HERO = {
  file: path.join(ROOT, "public", "hero.jpg"),
  photoId: "IE-gdqEg45M",
  width: 1800,
  height: 1200,
};

/* Tarayıcı taklidi bir user-agent gönderilirse uç nokta 307 → 401 veriyor;
   bu yüzden istekler Node'un varsayılan başlıklarıyla gidiyor. */

/** Unsplash'in genel arama uç noktası — anahtar gerektirmez. */
async function searchOnce(query, squarish) {
  const url =
    `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}` +
    `&per_page=24${squarish ? "&orientation=squarish" : ""}`;

  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`arama başarısız (${res.status}) — ${query}`);

  const json = await res.json();
  return (json.results ?? []).filter(
    // plus.unsplash.com → Unsplash+ (ücretli lisans). Ücretsiz olanları alıyoruz.
    (photo) => !String(photo.urls?.raw ?? "").includes("plus.unsplash.com"),
  );
}

/**
 * Sırayla dener: her sorgu için önce kare kadrajlılar, hepsi boş dönerse
 * kadraj kısıtı olmadan. Niş tatlar ("tahin latte") kare havuzda çıkmıyor.
 */
async function search(queries) {
  const list = Array.isArray(queries) ? queries : [queries];

  for (const squarish of [true, false]) {
    for (const query of list) {
      const results = await searchOnce(query, squarish);
      if (results.length > 0) return results;
      await sleep(200);
    }
  }
  return [];
}

/** imgix parametreleriyle istenen boyutta JPEG indirir. */
async function download(rawUrl, params) {
  const url = new URL(rawUrl);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, String(value));

  const res = await fetch(url);
  if (!res.ok) throw new Error(`indirme başarısız (${res.status})`);

  return Buffer.from(await res.arrayBuffer());
}

/**
 * JPEG'in APPn üstverisini (ICC profili, EXIF…) atar.
 *
 * Unsplash 24 px'lik önizlemeye bile ~10 KB'lık sRGB profili gömüyor; bu
 * veri `photo-meta.ts` üzerinden istemciye gittiği için 48 görselde 180 KB'a
 * çıkıyordu. Profil atılınca önizleme ~700 bayta iniyor, renk farkı 24 px'de
 * gözle görülür değil.
 */
function stripJpegMetadata(buffer) {
  const chunks = [buffer.subarray(0, 2)]; // SOI
  let offset = 2;

  while (offset + 4 <= buffer.length) {
    if (buffer[offset] !== 0xff) break;

    const marker = buffer[offset + 1];
    // SOS'tan sonrası sıkıştırılmış veri — olduğu gibi kalır.
    if (marker === 0xda) {
      chunks.push(buffer.subarray(offset));
      return Buffer.concat(chunks);
    }

    const length = buffer.readUInt16BE(offset + 2);
    const isAppSegment = marker >= 0xe0 && marker <= 0xef;
    if (!isAppSegment) chunks.push(buffer.subarray(offset, offset + 2 + length));
    offset += 2 + length;
  }

  return buffer;
}

/** Kartlar yüklenirken gösterilen minik bulanık önizleme (data URI). */
async function lqip(rawUrl) {
  const buffer = await download(rawUrl, {
    w: 24,
    h: 24,
    fit: "crop",
    crop: "entropy",
    blur: 40,
    q: 35,
    fm: "jpg",
  });
  return `data:image/jpeg;base64,${stripJpegMetadata(buffer).toString("base64")}`;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Tek bir fotoğrafın kaydı — yalnızca önizlemeyi yenilerken gerekir. */
async function photoById(id) {
  const res = await fetch(`https://unsplash.com/napi/photos/${id}`, {
    headers: { accept: "application/json" },
  });
  if (!res.ok) throw new Error(`fotoğraf okunamadı (${res.status})`);
  return res.json();
}

/**
 * Görselleri yeniden indirmeden yalnızca bulanık önizlemeleri üretir.
 * Önizleme üretimi değiştiğinde (örn. üstveri temizliği) kullanılır.
 */
async function relqip() {
  const meta = await readExistingMeta();

  for (const [key, entry] of Object.entries(meta)) {
    try {
      const photo = await photoById(entry.id);
      entry.rawUrl = photo.urls.raw;
      entry.blur = await lqip(photo.urls.raw);
      console.log(`✓ ${key} — ${entry.blur.length} bayt`);
    } catch (error) {
      console.warn(`✗ ${key} — ${error.message}`);
    }
    await sleep(250);
  }

  await writeMeta(meta);
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  if (args.includes("--relqip")) return relqip();
  const only = new Set(args.filter((arg) => !arg.startsWith("--")));

  await mkdir(PHOTO_DIR, { recursive: true });

  /** Aynı fotoğrafın iki üründe çıkmasını engeller. */
  const used = new Set();
  const meta = existsSync(META_FILE) ? await readExistingMeta() : {};
  for (const entry of Object.values(meta)) if (entry.id) used.add(entry.id);

  const failed = [];
  const entries = Object.entries(QUERIES).filter(
    ([id]) => only.size === 0 || only.has(id),
  );

  for (const [id, query] of entries) {
    const file = path.join(PHOTO_DIR, `${id}.jpg`);
    if (!force && existsSync(file) && meta[id]) {
      console.log(`· ${id} — zaten var`);
      continue;
    }

    try {
      let photo;
      if (PINNED[id]) {
        photo = await photoById(PINNED[id]);
      } else {
        const results = await search(query);
        photo = results.find((candidate) => !used.has(candidate.id)) ?? results[0];
      }
      if (!photo) throw new Error("sonuç yok");

      const buffer = await download(photo.urls.raw, {
        w: 1000,
        h: 1000,
        fit: "crop",
        crop: "entropy",
        fm: "jpg",
        q: 72,
        cs: "tinysrgb",
      });
      await writeFile(file, buffer);

      used.add(photo.id);
      meta[id] = {
        id: photo.id,
        blur: await lqip(photo.urls.raw),
        author: photo.user?.name ?? "Unsplash",
        authorUrl: photo.user?.links?.html ?? "https://unsplash.com",
        photoUrl: photo.links?.html ?? "https://unsplash.com",
      };

      console.log(`✓ ${id} — ${photo.user?.name} (${Math.round(buffer.length / 1024)} KB)`);
    } catch (error) {
      failed.push(id);
      console.warn(`✗ ${id} — ${error.message}`);
    }

    await sleep(350);
  }

  /* Giriş görseli */
  if (only.size === 0 && (force || !existsSync(HERO.file) || !meta.__hero)) {
    try {
      const photo = await photoById(HERO.photoId);
      const buffer = await download(photo.urls.raw, {
        w: HERO.width,
        h: HERO.height,
        fit: "crop",
        crop: "entropy",
        fm: "jpg",
        q: 74,
        cs: "tinysrgb",
      });
      await writeFile(HERO.file, buffer);
      meta.__hero = {
        id: photo.id,
        blur: await lqip(photo.urls.raw),
        author: photo.user?.name ?? "Unsplash",
        authorUrl: photo.user?.links?.html ?? "https://unsplash.com",
        photoUrl: photo.links?.html ?? "https://unsplash.com",
      };
      console.log(`✓ hero — ${photo.user?.name} (${Math.round(buffer.length / 1024)} KB)`);
    } catch (error) {
      console.warn(`✗ hero — ${error.message}`);
    }
  }

  await writeMeta(meta);
  console.log(`\n${Object.keys(meta).length} kayıt → src/data/photo-meta.ts`);
  if (failed.length) console.log(`Eksik kalanlar: ${failed.join(", ")}`);
}

/**
 * Betiğin kendi önbelleği: hangi ürüne hangi Unsplash fotoğrafı düştüğünü
 * hatırlar, böylece tekrar çalıştırıldığında aynı görsel başka ürüne verilmez.
 * `public/` altında değil — istemciye gitmesine gerek yok.
 */
const META_JSON = path.join(ROOT, "scripts", "photo-cache.json");

async function readExistingMeta() {
  try {
    return JSON.parse(await readFile(META_JSON, "utf8"));
  } catch {
    return {};
  }
}

async function writeMeta(meta) {
  await writeFile(META_JSON, JSON.stringify(meta, null, 2));

  const sorted = Object.keys(meta).sort();
  const body = sorted
    .map((key) => {
      const item = meta[key];
      return `  ${JSON.stringify(key)}: {
    blur: ${JSON.stringify(item.blur)},
    author: ${JSON.stringify(item.author)},
    authorUrl: ${JSON.stringify(item.authorUrl)},
    photoUrl: ${JSON.stringify(item.photoUrl)},
  },`;
    })
    .join("\n");

  const source = `/* Bu dosya üretilmiştir — elle düzenlemeyin.
   Kaynak: scripts/fetch-photos.mjs  (npm run photos)

   blur      → görsel yüklenene kadar gösterilen minik bulanık önizleme
   author/…  → Unsplash lisansının istediği künye bilgisi */

export interface PhotoMeta {
  /** 24 px genişliğinde, bulanıklaştırılmış JPEG (data URI). */
  blur: string;
  author: string;
  authorUrl: string;
  photoUrl: string;
}

/** Anahtar: ürün kimliği. Giriş görseli için \`__hero\`. */
export const photoMeta: Record<string, PhotoMeta> = {
${body}
};

export function getPhotoMeta(id: string): PhotoMeta | undefined {
  return photoMeta[id];
}

/** Künye bölümünde listelenen fotoğrafçılar — tekrar edenler birleştirilir. */
export const photoCredits = Array.from(
  new Map(
    Object.values(photoMeta).map((item) => [item.author, item]),
  ).values(),
).sort((a, b) => a.author.localeCompare(b.author, "tr"));
`;

  await writeFile(META_FILE, source);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
