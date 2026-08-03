/**
 * Zepresso — ürün görseli üretici.
 *
 * `src/data/products.ts` içindeki `art` tarifini okur ve her ürün için
 * `public/menu/<id>.svg` dosyasını yazar. Tüm sahneler aynı sanat yönetimini
 * paylaşır: koyu fon, tek konu, sıcak yan ışık, ince film grenii, yazı yok.
 *
 * Çalıştırmak için:  npm run art
 */

import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { products } from "../src/data/products.ts";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "menu");

const W = 800;
const H = 800;
const CX = W / 2;

/* --------------------------------------------------------------- yardımcılar */

/** Deterministik sözde-rastgele üretici (mulberry32). */
function makeRandom(seed) {
  let t = Math.floor(seed * 0xffffffff) >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let x = Math.imul(t ^ (t >>> 15), 1 | t);
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

const n = (value) => Math.round(value * 100) / 100;

/** #rrggbb rengini verilen oranda koyulaştırır / aydınlatır. */
function shade(hex, amount) {
  const raw = hex.replace("#", "");
  const num = parseInt(raw, 16);
  const channels = [(num >> 16) & 255, (num >> 8) & 255, num & 255].map((c) => {
    const next = amount >= 0 ? c + (255 - c) * amount : c * (1 + amount);
    return Math.max(0, Math.min(255, Math.round(next)));
  });
  return `#${channels.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

function mix(a, b, ratio) {
  const pa = parseInt(a.replace("#", ""), 16);
  const pb = parseInt(b.replace("#", ""), 16);
  const out = [16, 8, 0].map((shift) => {
    const ca = (pa >> shift) & 255;
    const cb = (pb >> shift) & 255;
    return Math.round(ca + (cb - ca) * ratio);
  });
  return `#${out.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

/* ------------------------------------------------------------------- sahne */

const CERAMIC_DARK = "#14171B";
const CERAMIC_LIGHT = "#2A2F36";

/**
 * Kap ağzı (sıvı yüzeyi) çizer: elips + iç gölge + parlama.
 */
function liquidSurface({ cx, cy, rx, ry, top, bottom, light, dir }) {
  return `
    <ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(rx)}" ry="${n(ry)}" fill="${shade(bottom, -0.35)}"/>
    <ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(rx * 0.94)}" ry="${n(ry * 0.9)}" fill="${top}"/>
    <ellipse cx="${n(cx + (dir * rx) / 3.4)}" cy="${n(cy - ry * 0.18)}" rx="${n(rx * 0.42)}" ry="${n(ry * 0.42)}" fill="${light}" opacity="0.22"/>
    <ellipse cx="${n(cx - (dir * rx) / 2.6)}" cy="${n(cy + ry * 0.22)}" rx="${n(rx * 0.5)}" ry="${n(ry * 0.4)}" fill="${shade(bottom, -0.5)}" opacity="0.5"/>
  `;
}

/** Tabak / altlık. */
function saucer({ cy, rx, dir, light }) {
  const ry = rx * 0.23;
  return `
    <ellipse cx="${CX}" cy="${n(cy + 10)}" rx="${n(rx)}" ry="${n(ry)}" fill="${shade(CERAMIC_DARK, -0.3)}"/>
    <ellipse cx="${CX}" cy="${n(cy)}" rx="${n(rx)}" ry="${n(ry)}" fill="url(#ceramic)"/>
    <ellipse cx="${CX}" cy="${n(cy)}" rx="${n(rx * 0.99)}" ry="${n(ry * 0.97)}" fill="none" stroke="${light}" stroke-opacity="0.28" stroke-width="1.6"/>
    <ellipse cx="${CX}" cy="${n(cy + 2)}" rx="${n(rx * 0.6)}" ry="${n(ry * 0.55)}" fill="${shade(CERAMIC_DARK, -0.25)}" opacity="0.85"/>
    <path d="M ${n(CX - rx * 0.98)} ${n(cy - 2)} A ${n(rx)} ${n(ry)} 0 0 ${dir > 0 ? 1 : 0} ${n(CX + rx * 0.98)} ${n(cy - 2)}"
      fill="none" stroke="${light}" stroke-opacity="${dir > 0 ? 0.34 : 0.18}" stroke-width="2.4" stroke-linecap="round"/>
  `;
}

/** Kulp — kap gövdesinin ışık gelen tarafına yerleşir. */
function handle({ x, yTop, yBottom, reach, dir, light }) {
  const sx = x + dir * 4;
  return `
    <path d="M ${n(sx)} ${n(yTop)} C ${n(sx + dir * reach)} ${n(yTop - 6)} ${n(sx + dir * reach)} ${n(yBottom + 10)} ${n(sx)} ${n(yBottom)}"
      fill="none" stroke="url(#ceramic)" stroke-width="22" stroke-linecap="round"/>
    <path d="M ${n(sx)} ${n(yTop)} C ${n(sx + dir * reach)} ${n(yTop - 6)} ${n(sx + dir * reach)} ${n(yBottom + 10)} ${n(sx)} ${n(yBottom)}"
      fill="none" stroke="${light}" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"/>
  `;
}

/**
 * Konik kap gövdesi (fincan, bardak).
 * Ağzı yukarıda, tabanı aşağıda; yanları hafif içbükey.
 */
function taperedBody({ topRx, bottomRx, topY, bottomY, glass }) {
  const h = bottomY - topY;
  const d = [
    `M ${n(CX - topRx)} ${n(topY)}`,
    `C ${n(CX - topRx + 2)} ${n(topY + h * 0.55)} ${n(CX - bottomRx - 8)} ${n(bottomY - h * 0.18)} ${n(CX - bottomRx)} ${n(bottomY - 10)}`,
    `Q ${n(CX - bottomRx)} ${n(bottomY)} ${n(CX - bottomRx * 0.72)} ${n(bottomY + 2)}`,
    `L ${n(CX + bottomRx * 0.72)} ${n(bottomY + 2)}`,
    `Q ${n(CX + bottomRx)} ${n(bottomY)} ${n(CX + bottomRx)} ${n(bottomY - 10)}`,
    `C ${n(CX + bottomRx + 8)} ${n(bottomY - h * 0.18)} ${n(CX + topRx - 2)} ${n(topY + h * 0.55)} ${n(CX + topRx)} ${n(topY)}`,
    "Z",
  ].join(" ");
  return {
    d,
    fill: glass ? "url(#glass)" : "url(#ceramic)",
  };
}

function buildSilhouette(d, fill) {
  return `
    <path d="${d}" fill="${fill}"/>
    <path d="${d}" fill="url(#rim)" opacity="0.85"/>
    <path d="${d}" fill="none" stroke="url(#rimStroke)" stroke-width="2.6"/>
  `;
}

/** Buhar — sıcak içecekler için. */
function steam(rand, { cx, y, spread }) {
  let out = "";
  for (let i = 0; i < 3; i += 1) {
    const x = cx + (i - 1) * spread * (0.55 + rand() * 0.35);
    const height = 190 + rand() * 130;
    const sway = 26 + rand() * 30;
    const dir = rand() > 0.5 ? 1 : -1;
    out += `<path d="M ${n(x)} ${n(y)} C ${n(x + sway * dir)} ${n(y - height * 0.32)} ${n(x - sway * dir)} ${n(y - height * 0.66)} ${n(x + sway * dir * 0.5)} ${n(y - height)}"
      fill="none" stroke="#F5F1EA" stroke-opacity="${n(0.1 + rand() * 0.07)}" stroke-width="${n(9 + rand() * 9)}" stroke-linecap="round" filter="url(#blurSoft)"/>`;
  }
  return out;
}

/** Buz küpleri. */
function iceCubes(rand, { cx, cy, rx, count }) {
  let out = "";
  for (let i = 0; i < count; i += 1) {
    const size = 44 + rand() * 26;
    const x = cx + (rand() - 0.5) * rx * 1.25;
    const y = cy + rand() * 120;
    const rot = (rand() - 0.5) * 50;
    out += `<g transform="translate(${n(x)} ${n(y)}) rotate(${n(rot)})" opacity="${n(0.4 + rand() * 0.28)}">
      <rect x="${n(-size / 2)}" y="${n(-size / 2)}" width="${n(size)}" height="${n(size)}" rx="10" fill="#F5F1EA" opacity="0.14"/>
      <rect x="${n(-size / 2)}" y="${n(-size / 2)}" width="${n(size)}" height="${n(size)}" rx="10" fill="none" stroke="#F5F1EA" stroke-opacity="0.34" stroke-width="1.6"/>
      <path d="M ${n(-size / 2 + 8)} ${n(size / 2 - 10)} L ${n(size / 2 - 12)} ${n(-size / 2 + 8)}" stroke="#FFF6E6" stroke-opacity="0.24" stroke-width="3" stroke-linecap="round"/>
    </g>`;
  }
  return out;
}

/* -------------------------------------------------------------- süslemeler */

function garnishLayer(kind, rand, ctx) {
  const { cx, cy, rx, light } = ctx;
  switch (kind) {
    case "beans": {
      let out = "";
      for (let i = 0; i < 3; i += 1) {
        const x = cx + (i - 1) * 96 + (rand() - 0.5) * 40;
        const y = 692 + (rand() - 0.5) * 26;
        const rot = rand() * 180;
        out += `<g transform="translate(${n(x)} ${n(y)}) rotate(${n(rot)})">
          <ellipse cx="0" cy="6" rx="26" ry="17" fill="#000" opacity="0.4" filter="url(#blurSoft)"/>
          <ellipse cx="0" cy="0" rx="24" ry="16" fill="#4A2A12"/>
          <ellipse cx="-4" cy="-4" rx="18" ry="10" fill="${mix("#4A2A12", light, 0.35)}" opacity="0.8"/>
          <path d="M -18 0 C -8 -8 8 -8 18 0" fill="none" stroke="#1A0C04" stroke-width="4" stroke-linecap="round"/>
        </g>`;
      }
      return out;
    }
    case "cocoa": {
      let out = "";
      for (let i = 0; i < 40; i += 1) {
        const a = rand() * Math.PI * 2;
        const r = Math.sqrt(rand()) * rx * 0.86;
        out += `<circle cx="${n(cx + Math.cos(a) * r)}" cy="${n(cy + Math.sin(a) * r * 0.3)}" r="${n(1.2 + rand() * 2.4)}" fill="#3A2010" opacity="${n(0.4 + rand() * 0.4)}"/>`;
      }
      return out;
    }
    case "cinnamon": {
      let out = "";
      for (let i = 0; i < 30; i += 1) {
        const a = rand() * Math.PI * 2;
        const r = Math.sqrt(rand()) * rx * 0.8;
        out += `<circle cx="${n(cx + Math.cos(a) * r)}" cy="${n(cy + Math.sin(a) * r * 0.3)}" r="${n(1 + rand() * 2)}" fill="#8A4A1E" opacity="${n(0.45 + rand() * 0.4)}"/>`;
      }
      out += `<g transform="translate(${n(cx + rx * 0.55)} ${n(cy - 6)}) rotate(-16)">
        <rect x="-46" y="-9" width="92" height="18" rx="9" fill="#6B3A16"/>
        <rect x="-46" y="-9" width="92" height="7" rx="4" fill="${mix("#6B3A16", light, 0.4)}" opacity="0.75"/>
      </g>`;
      return out;
    }
    case "mint":
      return `<g transform="translate(${n(cx + rx * 0.42)} ${n(cy - 16)}) rotate(-18)">
        <path d="M 0 0 C 26 -22 62 -20 74 4 C 50 26 14 22 0 0 Z" fill="#54703A"/>
        <path d="M 0 0 C 26 -22 62 -20 74 4" fill="none" stroke="#8CA862" stroke-width="3" stroke-opacity="0.8"/>
        <path d="M 6 2 L 66 6" stroke="#2E421F" stroke-width="2.4" stroke-linecap="round"/>
      </g>`;
    case "citrus":
      return `<g transform="translate(${n(cx + rx * 0.6)} ${n(cy - 4)}) rotate(-24)">
        <circle cx="0" cy="0" r="46" fill="#D9932E"/>
        <circle cx="0" cy="0" r="39" fill="#F0BE5E"/>
        <circle cx="0" cy="0" r="33" fill="#E8AC45" opacity="0.75"/>
        <g stroke="#C97F22" stroke-width="2.4" opacity="0.85">
          <path d="M 0 -33 L 0 33"/><path d="M -33 0 L 33 0"/>
          <path d="M -23 -23 L 23 23"/><path d="M -23 23 L 23 -23"/>
        </g>
      </g>`;
    case "cream":
      return `<g transform="translate(${n(cx)} ${n(cy - 26)})">
        <path d="M -62 20 C -52 -30 -20 -56 0 -70 C 20 -56 52 -30 62 20 C 30 40 -30 40 -62 20 Z" fill="#F6ECD8"/>
        <path d="M -62 20 C -52 -30 -20 -56 0 -70" fill="none" stroke="#FFFBF2" stroke-width="4" stroke-opacity="0.7"/>
        <ellipse cx="0" cy="22" rx="62" ry="16" fill="#D8C7A8" opacity="0.6"/>
      </g>`;
    case "pistachio": {
      let out = "";
      for (let i = 0; i < 26; i += 1) {
        const a = rand() * Math.PI * 2;
        const r = Math.sqrt(rand()) * rx * 0.78;
        out += `<ellipse cx="${n(cx + Math.cos(a) * r)}" cy="${n(cy + Math.sin(a) * r * 0.32)}" rx="${n(3 + rand() * 4)}" ry="${n(2.4 + rand() * 3)}" fill="${rand() > 0.5 ? "#7E9440" : "#A8BC5E"}" opacity="0.9"/>`;
      }
      return out;
    }
    case "berry": {
      let out = "";
      for (let i = 0; i < 4; i += 1) {
        const x = cx + (rand() - 0.5) * rx * 1.1;
        const y = cy - 8 + (rand() - 0.5) * 18;
        const r = 13 + rand() * 7;
        out += `<g><circle cx="${n(x)}" cy="${n(y)}" r="${n(r)}" fill="#6E2438"/>
          <circle cx="${n(x - r * 0.3)}" cy="${n(y - r * 0.35)}" r="${n(r * 0.4)}" fill="#B85870" opacity="0.7"/></g>`;
      }
      return out;
    }
    default:
      return "";
  }
}

/* ---------------------------------------------------------------- kaplar */

const vessels = {
  espresso(art, rand) {
    const dir = art.lightFrom === "right" ? 1 : -1;
    const topY = 476;
    const bottomY = 592;
    const topRx = 92;
    const { d, fill } = taperedBody({ topRx, bottomRx: 62, topY, bottomY, glass: false });
    return {
      mouth: { cx: CX, cy: topY, rx: topRx, ry: 21 },
      contact: { cy: 616, rx: 190 },
      steamAt: { cx: CX, y: 452, spread: 52 },
      body: `
        ${saucer({ cy: 616, rx: 190, dir, light: art.light })}
        ${handle({ x: CX + dir * topRx * 0.92, yTop: topY + 26, yBottom: bottomY - 22, reach: 62, dir, light: art.light })}
        ${buildSilhouette(d, fill)}
        ${liquidSurface({ cx: CX, cy: topY, rx: topRx - 9, ry: 19, top: art.crema ?? art.liquid[0], bottom: art.liquid[1], light: art.light, dir })}
      `,
    };
  },

  cappuccinoCup(art, rand) {
    const dir = art.lightFrom === "right" ? 1 : -1;
    const topY = 428;
    const bottomY = 596;
    const topRx = 128;
    const { d, fill } = taperedBody({ topRx, bottomRx: 84, topY, bottomY, glass: false });
    return {
      mouth: { cx: CX, cy: topY, rx: topRx, ry: 30 },
      contact: { cy: 620, rx: 226 },
      steamAt: { cx: CX, y: 400, spread: 68 },
      body: `
        ${saucer({ cy: 620, rx: 226, dir, light: art.light })}
        ${handle({ x: CX + dir * topRx * 0.94, yTop: topY + 40, yBottom: bottomY - 34, reach: 80, dir, light: art.light })}
        ${buildSilhouette(d, fill)}
        ${liquidSurface({ cx: CX, cy: topY, rx: topRx - 11, ry: 28, top: art.crema ?? art.liquid[0], bottom: art.liquid[1], light: art.light, dir })}
        ${
          art.crema
            ? `<path d="M ${n(CX - 62)} ${n(topY + 2)} C ${n(CX - 30)} ${n(topY - 16)} ${n(CX + 30)} ${n(topY - 16)} ${n(CX + 62)} ${n(topY + 2)} C ${n(CX + 30)} ${n(topY + 18)} ${n(CX - 30)} ${n(topY + 18)} ${n(CX - 62)} ${n(topY + 2)} Z" fill="${shade(art.crema, 0.18)}" opacity="0.7"/>`
            : ""
        }
      `,
    };
  },

  mug(art, rand) {
    const dir = art.lightFrom === "right" ? 1 : -1;
    const topY = 392;
    const bottomY = 630;
    const topRx = 116;
    const { d, fill } = taperedBody({ topRx, bottomRx: 104, topY, bottomY, glass: false });
    return {
      mouth: { cx: CX, cy: topY, rx: topRx, ry: 27 },
      contact: { cy: 640, rx: 150 },
      steamAt: { cx: CX, y: 364, spread: 62 },
      body: `
        ${handle({ x: CX + dir * topRx * 0.96, yTop: topY + 52, yBottom: bottomY - 62, reach: 92, dir, light: art.light })}
        ${buildSilhouette(d, fill)}
        ${liquidSurface({ cx: CX, cy: topY, rx: topRx - 12, ry: 25, top: art.crema ?? art.liquid[0], bottom: art.liquid[1], light: art.light, dir })}
      `,
    };
  },

  latteGlass(art, rand) {
    const dir = art.lightFrom === "right" ? 1 : -1;
    const topY = 336;
    const bottomY = 646;
    const topRx = 100;
    const bottomRx = 74;
    const { d } = taperedBody({ topRx, bottomRx, topY, bottomY, glass: true });
    const [top, bottom] = art.liquid;
    const mid = mix(top, bottom, 0.5);
    return {
      mouth: { cx: CX, cy: topY, rx: topRx, ry: 26 },
      contact: { cy: 654, rx: 132 },
      steamAt: { cx: CX, y: 306, spread: 58 },
      body: `
        <path d="${d}" fill="url(#glass)"/>
        <clipPath id="glassClip"><path d="${d}"/></clipPath>
        <g clip-path="url(#glassClip)">
          <rect x="${n(CX - topRx - 6)}" y="${n(topY + 176)}" width="${n(topRx * 2 + 12)}" height="200" fill="${bottom}"/>
          <rect x="${n(CX - topRx - 6)}" y="${n(topY + 96)}" width="${n(topRx * 2 + 12)}" height="86" fill="${mid}"/>
          <rect x="${n(CX - topRx - 6)}" y="${n(topY + 34)}" width="${n(topRx * 2 + 12)}" height="66" fill="${top}"/>
          ${art.crema ? `<rect x="${n(CX - topRx - 6)}" y="${n(topY)}" width="${n(topRx * 2 + 12)}" height="40" fill="${art.crema}"/>` : ""}
          <rect x="${n(CX - topRx - 6)}" y="${n(topY)}" width="${n(topRx * 0.5)}" height="340" fill="#000" opacity="0.28"/>
          <rect x="${n(CX + dir * topRx * 0.42)}" y="${n(topY)}" width="16" height="340" fill="${art.light}" opacity="0.16"/>
        </g>
        <path d="${d}" fill="url(#rim)" opacity="0.5"/>
        <path d="${d}" fill="none" stroke="url(#rimStroke)" stroke-width="2.6"/>
        ${liquidSurface({ cx: CX, cy: topY, rx: topRx - 7, ry: 22, top: art.crema ?? top, bottom: mid, light: art.light, dir })}
      `,
    };
  },

  icedGlass(art, rand) {
    const dir = art.lightFrom === "right" ? 1 : -1;
    const topY = 300;
    const bottomY = 660;
    const topRx = 108;
    const bottomRx = 90;
    const { d } = taperedBody({ topRx, bottomRx, topY, bottomY, glass: true });
    const [top, bottom] = art.liquid;
    return {
      mouth: { cx: CX, cy: topY, rx: topRx, ry: 27 },
      contact: { cy: 668, rx: 148 },
      body: `
        <path d="${d}" fill="url(#glass)"/>
        <clipPath id="glassClip"><path d="${d}"/></clipPath>
        <g clip-path="url(#glassClip)">
          <rect x="${n(CX - topRx - 6)}" y="${n(topY + 30)}" width="${n(topRx * 2 + 12)}" height="360" fill="url(#brew)"/>
          ${art.crema ? `<rect x="${n(CX - topRx - 6)}" y="${n(topY - 4)}" width="${n(topRx * 2 + 12)}" height="74" fill="${art.crema}" opacity="0.94"/>` : ""}
          ${iceCubes(rand, { cx: CX, cy: topY + 56, rx: topRx, count: 5 })}
          <rect x="${n(CX - topRx - 6)}" y="${n(topY)}" width="${n(topRx * 0.48)}" height="400" fill="#000" opacity="0.3"/>
          <rect x="${n(CX + dir * topRx * 0.46)}" y="${n(topY)}" width="18" height="400" fill="${art.light}" opacity="0.18"/>
        </g>
        <path d="${d}" fill="url(#rim)" opacity="0.45"/>
        <path d="${d}" fill="none" stroke="url(#rimStroke)" stroke-width="2.8"/>
        ${liquidSurface({ cx: CX, cy: topY, rx: topRx - 7, ry: 23, top: art.crema ?? top, bottom, light: art.light, dir })}
      `,
    };
  },

  teaGlass(art, rand) {
    const dir = art.lightFrom === "right" ? 1 : -1;
    const topY = 400;
    const bottomY = 618;
    const topRx = 76;
    const waistRx = 46;
    const baseRx = 62;
    const d = [
      `M ${n(CX - topRx)} ${n(topY)}`,
      `C ${n(CX - topRx)} ${n(topY + 60)} ${n(CX - waistRx)} ${n(topY + 90)} ${n(CX - waistRx)} ${n(topY + 128)}`,
      `C ${n(CX - waistRx)} ${n(topY + 168)} ${n(CX - baseRx)} ${n(topY + 190)} ${n(CX - baseRx)} ${n(bottomY - 6)}`,
      `Q ${n(CX - baseRx)} ${n(bottomY + 2)} ${n(CX - baseRx * 0.7)} ${n(bottomY + 3)}`,
      `L ${n(CX + baseRx * 0.7)} ${n(bottomY + 3)}`,
      `Q ${n(CX + baseRx)} ${n(bottomY + 2)} ${n(CX + baseRx)} ${n(bottomY - 6)}`,
      `C ${n(CX + baseRx)} ${n(topY + 190)} ${n(CX + waistRx)} ${n(topY + 168)} ${n(CX + waistRx)} ${n(topY + 128)}`,
      `C ${n(CX + waistRx)} ${n(topY + 90)} ${n(CX + topRx)} ${n(topY + 60)} ${n(CX + topRx)} ${n(topY)}`,
      "Z",
    ].join(" ");
    const [top, bottom] = art.liquid;
    return {
      mouth: { cx: CX, cy: topY, rx: topRx, ry: 20 },
      contact: { cy: 634, rx: 172 },
      steamAt: { cx: CX, y: 376, spread: 44 },
      body: `
        ${saucer({ cy: 634, rx: 172, dir, light: art.light })}
        <path d="${d}" fill="url(#glass)"/>
        <clipPath id="glassClip"><path d="${d}"/></clipPath>
        <g clip-path="url(#glassClip)">
          <rect x="${n(CX - topRx - 6)}" y="${n(topY + 16)}" width="${n(topRx * 2 + 12)}" height="240" fill="url(#brew)"/>
          <rect x="${n(CX - topRx - 6)}" y="${n(topY)}" width="${n(topRx * 0.45)}" height="260" fill="#000" opacity="0.3"/>
          <rect x="${n(CX + dir * topRx * 0.34)}" y="${n(topY)}" width="13" height="260" fill="${art.light}" opacity="0.24"/>
        </g>
        <path d="${d}" fill="url(#rim)" opacity="0.42"/>
        <path d="${d}" fill="none" stroke="url(#rimStroke)" stroke-width="2.6"/>
        ${liquidSurface({ cx: CX, cy: topY + 16, rx: topRx - 8, ry: 17, top, bottom, light: art.light, dir })}
      `,
    };
  },

  teacup(art, rand) {
    const dir = art.lightFrom === "right" ? 1 : -1;
    const topY = 470;
    const bottomY = 578;
    const topRx = 142;
    const { d, fill } = taperedBody({ topRx, bottomRx: 78, topY, bottomY, glass: false });
    return {
      mouth: { cx: CX, cy: topY, rx: topRx, ry: 34 },
      contact: { cy: 606, rx: 232 },
      steamAt: { cx: CX, y: 444, spread: 74 },
      body: `
        ${saucer({ cy: 606, rx: 232, dir, light: art.light })}
        ${handle({ x: CX + dir * topRx * 0.95, yTop: topY + 24, yBottom: bottomY - 22, reach: 72, dir, light: art.light })}
        ${buildSilhouette(d, fill)}
        ${liquidSurface({ cx: CX, cy: topY, rx: topRx - 12, ry: 31, top: art.crema ?? art.liquid[0], bottom: art.liquid[1], light: art.light, dir })}
      `,
    };
  },

  bowl(art, rand) {
    const dir = art.lightFrom === "right" ? 1 : -1;
    const topY = 452;
    const topRx = 158;
    const d = [
      `M ${n(CX - topRx)} ${n(topY)}`,
      `C ${n(CX - topRx + 4)} ${n(topY + 96)} ${n(CX - 92)} ${n(topY + 148)} ${n(CX - 62)} ${n(topY + 152)}`,
      `L ${n(CX + 62)} ${n(topY + 152)}`,
      `C ${n(CX + 92)} ${n(topY + 148)} ${n(CX + topRx - 4)} ${n(topY + 96)} ${n(CX + topRx)} ${n(topY)}`,
      "Z",
    ].join(" ");
    return {
      mouth: { cx: CX, cy: topY, rx: topRx, ry: 40 },
      contact: { cy: 612, rx: 178 },
      steamAt: { cx: CX, y: 426, spread: 80 },
      body: `
        ${buildSilhouette(d, "url(#ceramic)")}
        ${liquidSurface({ cx: CX, cy: topY, rx: topRx - 14, ry: 36, top: art.crema ?? art.liquid[0], bottom: art.liquid[1], light: art.light, dir })}
      `,
    };
  },

  cheesecakeSlice(art, rand) {
    const dir = art.lightFrom === "right" ? 1 : -1;
    const [top, bottom] = art.liquid;
    const baseY = 620;
    const d = [
      `M ${n(CX - 196)} ${n(baseY - 6)}`,
      `L ${n(CX + 156)} ${n(baseY)}`,
      `Q ${n(CX + 178)} ${n(baseY)} ${n(CX + 176)} ${n(baseY - 22)}`,
      `L ${n(CX + 170)} ${n(baseY - 178)}`,
      `Q ${n(CX + 172)} ${n(baseY - 198)} ${n(CX + 150)} ${n(baseY - 200)}`,
      `C ${n(CX + 40)} ${n(baseY - 210)} ${n(CX - 84)} ${n(baseY - 138)} ${n(CX - 196)} ${n(baseY - 6)}`,
      "Z",
    ].join(" ");
    return {
      mouth: null,
      contact: { cy: baseY + 12, rx: 246 },
      body: `
        ${saucer({ cy: baseY + 14, rx: 250, dir, light: art.light })}
        <path d="${d}" fill="${top}"/>
        <clipPath id="cakeClip"><path d="${d}"/></clipPath>
        <g clip-path="url(#cakeClip)">
          <rect x="${n(CX - 200)}" y="${n(baseY - 210)}" width="400" height="220" fill="url(#cakeShade)"/>
          <path d="M ${n(CX - 196)} ${n(baseY - 6)} C ${n(CX - 84)} ${n(baseY - 138)} ${n(CX + 40)} ${n(baseY - 210)} ${n(CX + 176)} ${n(baseY - 200)} L ${n(CX + 176)} ${n(baseY - 150)} C ${n(CX + 40)} ${n(baseY - 162)} ${n(CX - 70)} ${n(baseY - 92)} ${n(CX - 196)} ${n(baseY + 30)} Z" fill="${shade(bottom, -0.25)}" opacity="0.92"/>
          <path d="M ${n(CX - 196)} ${n(baseY - 6)} C ${n(CX - 84)} ${n(baseY - 138)} ${n(CX + 40)} ${n(baseY - 210)} ${n(CX + 176)} ${n(baseY - 200)} L ${n(CX + 176)} ${n(baseY - 182)} C ${n(CX + 40)} ${n(baseY - 190)} ${n(CX - 74)} ${n(baseY - 118)} ${n(CX - 196)} ${n(baseY + 12)} Z" fill="${shade(bottom, -0.55)}"/>
          <rect x="${n(CX - 200)}" y="${n(baseY - 34)}" width="400" height="40" fill="${shade(bottom, -0.4)}" opacity="0.85"/>
          <rect x="${n(CX - 200)}" y="${n(baseY - 210)}" width="90" height="240" fill="#000" opacity="${dir > 0 ? 0.34 : 0.06}"/>
          <rect x="${n(CX + 110)}" y="${n(baseY - 210)}" width="90" height="240" fill="#000" opacity="${dir > 0 ? 0.06 : 0.34}"/>
        </g>
        <path d="${d}" fill="url(#rim)" opacity="0.6"/>
        <path d="${d}" fill="none" stroke="url(#rimStroke)" stroke-width="2.4"/>
      `,
      garnishAnchor: { cx: CX, cy: baseY - 150, rx: 150 },
    };
  },

  cakeSlice(art, rand) {
    const dir = art.lightFrom === "right" ? 1 : -1;
    const [top, bottom] = art.liquid;
    const baseY = 618;
    const h = 190;
    const w = 176;
    const depth = 54;
    const frontTop = baseY - h;
    const front = `M ${n(CX - w)} ${n(frontTop)} L ${n(CX + w)} ${n(frontTop)} L ${n(CX + w)} ${n(baseY - 8)} Q ${n(CX + w)} ${n(baseY)} ${n(CX + w - 10)} ${n(baseY)} L ${n(CX - w + 10)} ${n(baseY)} Q ${n(CX - w)} ${n(baseY)} ${n(CX - w)} ${n(baseY - 8)} Z`;
    const topFace = `M ${n(CX - w)} ${n(frontTop)} L ${n(CX - w + depth)} ${n(frontTop - depth * 0.72)} L ${n(CX + w + depth)} ${n(frontTop - depth * 0.72)} L ${n(CX + w)} ${n(frontTop)} Z`;
    const sideFace = `M ${n(CX + w)} ${n(frontTop)} L ${n(CX + w + depth)} ${n(frontTop - depth * 0.72)} L ${n(CX + w + depth)} ${n(baseY - depth * 0.72)} L ${n(CX + w)} ${n(baseY - 8)} Z`;
    const layerColors = [top, mix(top, bottom, 0.55), bottom, mix(top, bottom, 0.4)];
    let layers = "";
    for (let i = 0; i < 4; i += 1) {
      layers += `<rect x="${n(CX - w)}" y="${n(frontTop + (h / 4) * i)}" width="${n(w * 2)}" height="${n(h / 4 + 1)}" fill="${layerColors[i]}"/>`;
      if (i > 0) {
        layers += `<rect x="${n(CX - w)}" y="${n(frontTop + (h / 4) * i - 3)}" width="${n(w * 2)}" height="6" fill="#000" opacity="0.22"/>`;
      }
    }
    return {
      mouth: null,
      contact: { cy: baseY + 12, rx: 236 },
      body: `
        ${saucer({ cy: baseY + 14, rx: 244, dir, light: art.light })}
        <path d="${sideFace}" fill="${shade(bottom, -0.35)}"/>
        <path d="${topFace}" fill="${shade(art.crema ?? top, 0.06)}"/>
        <path d="${topFace}" fill="${art.light}" opacity="0.1"/>
        <clipPath id="cakeClip"><path d="${front}"/></clipPath>
        <g clip-path="url(#cakeClip)">
          ${layers}
          <rect x="${n(CX - w)}" y="${n(frontTop)}" width="${n(w * 0.46)}" height="${n(h + 10)}" fill="#000" opacity="${dir > 0 ? 0.32 : 0.05}"/>
          <rect x="${n(CX + w * 0.54)}" y="${n(frontTop)}" width="${n(w * 0.46)}" height="${n(h + 10)}" fill="#000" opacity="${dir > 0 ? 0.05 : 0.32}"/>
          <rect x="${n(CX - w)}" y="${n(frontTop)}" width="${n(w * 2)}" height="${n(h + 10)}" fill="url(#rim)" opacity="0.5"/>
        </g>
        <path d="${front}" fill="none" stroke="url(#rimStroke)" stroke-width="2.4"/>
      `,
      garnishAnchor: { cx: CX + depth / 2, cy: frontTop - depth * 0.4, rx: w * 0.9 },
    };
  },

  plated(art, rand) {
    const dir = art.lightFrom === "right" ? 1 : -1;
    const [top, bottom] = art.liquid;
    const plateY = 618;
    return {
      mouth: null,
      contact: { cy: plateY + 10, rx: 268 },
      steamAt: { cx: CX, y: 470, spread: 60 },
      body: `
        ${saucer({ cy: plateY, rx: 268, dir, light: art.light })}
        <ellipse cx="${CX}" cy="${n(plateY - 4)}" rx="150" ry="34" fill="${shade(bottom, -0.4)}" opacity="0.7"/>
        <path d="M ${n(CX - 118)} ${n(plateY - 16)} C ${n(CX - 126)} ${n(plateY - 96)} ${n(CX - 66)} ${n(plateY - 148)} ${n(CX)} ${n(plateY - 150)} C ${n(CX + 66)} ${n(plateY - 148)} ${n(CX + 126)} ${n(plateY - 96)} ${n(CX + 118)} ${n(plateY - 16)} C ${n(CX + 60)} ${n(plateY + 12)} ${n(CX - 60)} ${n(plateY + 12)} ${n(CX - 118)} ${n(plateY - 16)} Z" fill="${top}"/>
        <path d="M ${n(CX - 118)} ${n(plateY - 16)} C ${n(CX - 126)} ${n(plateY - 96)} ${n(CX - 66)} ${n(plateY - 148)} ${n(CX)} ${n(plateY - 150)} C ${n(CX + 66)} ${n(plateY - 148)} ${n(CX + 126)} ${n(plateY - 96)} ${n(CX + 118)} ${n(plateY - 16)} C ${n(CX + 60)} ${n(plateY + 12)} ${n(CX - 60)} ${n(plateY + 12)} ${n(CX - 118)} ${n(plateY - 16)} Z" fill="url(#rim)" opacity="0.75"/>
        <path d="M ${n(CX - 118)} ${n(plateY - 16)} C ${n(CX - 126)} ${n(plateY - 96)} ${n(CX - 66)} ${n(plateY - 148)} ${n(CX)} ${n(plateY - 150)} C ${n(CX + 66)} ${n(plateY - 148)} ${n(CX + 126)} ${n(plateY - 96)} ${n(CX + 118)} ${n(plateY - 16)}" fill="none" stroke="url(#rimStroke)" stroke-width="2.6"/>
        <ellipse cx="${n(CX + dir * 40)}" cy="${n(plateY - 118)}" rx="52" ry="26" fill="${shade(top, 0.22)}" opacity="0.55"/>
        <path d="M ${n(CX - 54)} ${n(plateY - 118)} C ${n(CX - 20)} ${n(plateY - 96)} ${n(CX + 20)} ${n(plateY - 96)} ${n(CX + 54)} ${n(plateY - 122)}" fill="none" stroke="${shade(bottom, -0.4)}" stroke-width="6" stroke-linecap="round" opacity="0.6"/>
      `,
      garnishAnchor: { cx: CX, cy: plateY - 96, rx: 116 },
    };
  },

  sandwich(art, rand) {
    const dir = art.lightFrom === "right" ? 1 : -1;
    const [top, bottom] = art.liquid;
    const baseY = 614;
    const bread = "#C99A5C";
    const crust = "#8A5C26";
    const slab = (y, rot, wide) =>
      `<g transform="translate(${CX} ${n(y)}) rotate(${n(rot)})">
        <rect x="${n(-wide)}" y="-30" width="${n(wide * 2)}" height="60" rx="16" fill="${crust}"/>
        <rect x="${n(-wide + 8)}" y="-24" width="${n(wide * 2 - 16)}" height="44" rx="12" fill="${bread}"/>
        <rect x="${n(-wide + 8)}" y="-24" width="${n(wide * 2 - 16)}" height="18" rx="9" fill="${shade(bread, 0.18)}" opacity="0.7"/>
      </g>`;
    return {
      mouth: null,
      contact: { cy: baseY + 12, rx: 258 },
      body: `
        ${saucer({ cy: baseY + 12, rx: 262, dir, light: art.light })}
        ${slab(baseY - 34, -3, 172)}
        <g transform="translate(${CX} ${n(baseY - 92)}) rotate(2)">
          <path d="M -160 22 C -120 -14 -60 -26 -10 -18 C 44 -10 108 -24 158 6 C 150 30 -140 34 -160 22 Z" fill="${top}"/>
          <path d="M -160 22 C -120 -14 -60 -26 -10 -18 C 44 -10 108 -24 158 6" fill="none" stroke="${shade(top, 0.24)}" stroke-width="5" opacity="0.7"/>
          <path d="M -120 4 C -70 -14 20 -18 96 -4" fill="none" stroke="${shade(bottom, -0.2)}" stroke-width="7" stroke-linecap="round" opacity="0.6"/>
        </g>
        ${slab(baseY - 138, 4, 168)}
        <ellipse cx="${n(CX + dir * 90)}" cy="${n(baseY - 156)}" rx="90" ry="22" fill="${art.light}" opacity="0.16"/>
      `,
      garnishAnchor: { cx: CX - dir * 60, cy: baseY - 96, rx: 120 },
    };
  },

  croissant(art, rand) {
    const dir = art.lightFrom === "right" ? 1 : -1;
    const [top, bottom] = art.liquid;
    const baseY = 560;
    let segments = "";
    const count = 7;
    for (let i = 0; i < count; i += 1) {
      const t = i / (count - 1);
      const angle = Math.PI * (0.12 + t * 0.76);
      const x = CX - Math.cos(angle) * 196;
      const y = baseY - Math.sin(angle) * 62;
      const scale = 0.46 + Math.sin(Math.PI * t) * 0.62;
      const rot = (t - 0.5) * 54;
      segments += `<g transform="translate(${n(x)} ${n(y)}) rotate(${n(rot)}) scale(${n(scale)})">
        <ellipse cx="0" cy="8" rx="66" ry="58" fill="${shade(bottom, -0.15)}"/>
        <ellipse cx="0" cy="0" rx="64" ry="54" fill="${top}"/>
        <ellipse cx="${n(dir * -12)}" cy="-14" rx="44" ry="28" fill="${shade(top, 0.2)}" opacity="0.75"/>
        <path d="M -46 22 C -18 34 18 34 46 22" fill="none" stroke="${shade(bottom, -0.3)}" stroke-width="6" stroke-linecap="round" opacity="0.65"/>
      </g>`;
    }
    return {
      mouth: null,
      contact: { cy: baseY + 74, rx: 262 },
      body: `
        ${saucer({ cy: baseY + 76, rx: 266, dir, light: art.light })}
        ${segments}
        <ellipse cx="${n(CX + dir * 60)}" cy="${n(baseY - 48)}" rx="130" ry="46" fill="${art.light}" opacity="0.14" filter="url(#blurSoft)"/>
      `,
      garnishAnchor: { cx: CX, cy: baseY - 20, rx: 150 },
    };
  },
};

/* ------------------------------------------------------------- birleştirme */

function buildScene(product) {
  const art = product.art;
  const rand = makeRandom(art.seed || 0.5);
  const dir = art.lightFrom === "right" ? 1 : -1;
  const vessel = (vessels[art.vessel] ?? vessels.cappuccinoCup)(art, rand);
  const [liqTop, liqBottom] = art.liquid;

  const glowX = CX + dir * 290;
  const glowY = 250 + rand() * 60;

  const garnishCtx = vessel.garnishAnchor ??
    (vessel.mouth
      ? { cx: vessel.mouth.cx, cy: vessel.mouth.cy, rx: vessel.mouth.rx }
      : { cx: CX, cy: 480, rx: 140 });

  const garnish =
    art.garnish && art.garnish !== "none"
      ? garnishLayer(art.garnish, rand, { ...garnishCtx, light: art.light })
      : "";

  const steamLayer =
    art.steam && vessel.steamAt ? steam(rand, vessel.steamAt) : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#101418"/>
      <stop offset="0.55" stop-color="#0A0D10"/>
      <stop offset="1" stop-color="#050709"/>
    </linearGradient>
    <radialGradient id="keyLight" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="${art.light}" stop-opacity="0.55"/>
      <stop offset="0.55" stop-color="${art.light}" stop-opacity="0.14"/>
      <stop offset="1" stop-color="${art.light}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="halo" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="${mix(art.light, "#C47A45", 0.5)}" stop-opacity="0.3"/>
      <stop offset="1" stop-color="${art.light}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vignette" cx="50%" cy="46%" r="62%">
      <stop offset="0.45" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.72"/>
    </radialGradient>
    <linearGradient id="ceramic" x1="${dir > 0 ? 1 : 0}" y1="0" x2="${dir > 0 ? 0 : 1}" y2="0.35">
      <stop offset="0" stop-color="${mix(CERAMIC_LIGHT, art.light, 0.24)}"/>
      <stop offset="0.42" stop-color="${CERAMIC_LIGHT}"/>
      <stop offset="1" stop-color="${shade(CERAMIC_DARK, -0.35)}"/>
    </linearGradient>
    <linearGradient id="glass" x1="${dir > 0 ? 1 : 0}" y1="0" x2="${dir > 0 ? 0 : 1}" y2="0.3">
      <stop offset="0" stop-color="#F5F1EA" stop-opacity="0.16"/>
      <stop offset="0.4" stop-color="#F5F1EA" stop-opacity="0.05"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0.34"/>
    </linearGradient>
    <linearGradient id="brew" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${liqTop}"/>
      <stop offset="1" stop-color="${liqBottom}"/>
    </linearGradient>
    <linearGradient id="cakeShade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${shade(liqTop, 0.16)}"/>
      <stop offset="1" stop-color="${shade(liqBottom, -0.2)}"/>
    </linearGradient>
    <linearGradient id="rim" x1="${dir > 0 ? 1 : 0}" y1="0" x2="${dir > 0 ? 0 : 1}" y2="0">
      <stop offset="0" stop-color="${art.light}" stop-opacity="0.34"/>
      <stop offset="0.32" stop-color="${art.light}" stop-opacity="0.05"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0.3"/>
    </linearGradient>
    <linearGradient id="rimStroke" x1="${dir > 0 ? 1 : 0}" y1="0" x2="${dir > 0 ? 0 : 1}" y2="0">
      <stop offset="0" stop-color="${shade(art.light, 0.35)}" stop-opacity="0.9"/>
      <stop offset="0.42" stop-color="${art.light}" stop-opacity="0.16"/>
      <stop offset="1" stop-color="${art.light}" stop-opacity="0.03"/>
    </linearGradient>
    <filter id="blurSoft" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="22"/>
    </filter>
    <filter id="blurWide" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="70"/>
    </filter>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="${Math.round((art.seed || 0.5) * 100)}"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- sıcak yan ışık -->
  <ellipse cx="${n(glowX)}" cy="${n(glowY)}" rx="360" ry="330" fill="url(#keyLight)"/>
  <ellipse cx="${CX}" cy="430" rx="300" ry="260" fill="url(#halo)"/>

  <!-- zemin düzlemi -->
  <rect x="0" y="${n((vessel.contact?.cy ?? 620) - 6)}" width="${W}" height="${n(H - (vessel.contact?.cy ?? 620) + 6)}" fill="#000" opacity="0.28"/>
  <ellipse cx="${CX}" cy="${n((vessel.contact?.cy ?? 620) + 26)}" rx="${n((vessel.contact?.rx ?? 200) * 1.5)}" ry="46" fill="#000" opacity="0.6" filter="url(#blurWide)"/>
  <ellipse cx="${n(CX - dir * 30)}" cy="${n((vessel.contact?.cy ?? 620) + 12)}" rx="${n((vessel.contact?.rx ?? 200) * 0.95)}" ry="26" fill="#000" opacity="0.55" filter="url(#blurSoft)"/>

  ${steamLayer}
  ${vessel.body}
  ${garnish}

  <!-- ışık huzmesi -->
  <ellipse cx="${n(glowX)}" cy="${n(glowY + 90)}" rx="150" ry="220" fill="${art.light}" opacity="0.08" filter="url(#blurWide)"/>

  <rect width="${W}" height="${H}" fill="url(#vignette)"/>
  <rect width="${W}" height="${H}" filter="url(#grain)" opacity="0.07" style="mix-blend-mode:overlay"/>
</svg>
`;
}

/* --------------------------------------------------------------------- hero */

function buildHero() {
  const rand = makeRandom(0.42);
  let beans = "";
  for (let i = 0; i < 9; i += 1) {
    const x = 120 + rand() * 1360;
    const y = 700 + rand() * 190;
    const rot = rand() * 180;
    const s = 0.6 + rand() * 0.7;
    beans += `<g transform="translate(${n(x)} ${n(y)}) rotate(${n(rot)}) scale(${n(s)})" opacity="${n(0.35 + rand() * 0.4)}">
      <ellipse cx="0" cy="0" rx="30" ry="20" fill="#3E2210"/>
      <ellipse cx="-5" cy="-5" rx="22" ry="12" fill="#7A4A24" opacity="0.7"/>
      <path d="M -22 0 C -10 -10 10 -10 22 0" fill="none" stroke="#160A03" stroke-width="5" stroke-linecap="round"/>
    </g>`;
  }
  let steamPaths = "";
  for (let i = 0; i < 4; i += 1) {
    const x = 800 + (i - 1.5) * 46;
    const h = 260 + rand() * 180;
    const sway = 40 + rand() * 40;
    const d = rand() > 0.5 ? 1 : -1;
    steamPaths += `<path d="M ${n(x)} 560 C ${n(x + sway * d)} ${n(560 - h * 0.34)} ${n(x - sway * d)} ${n(560 - h * 0.68)} ${n(x + sway * d * 0.4)} ${n(560 - h)}"
      fill="none" stroke="#F5F1EA" stroke-opacity="${n(0.08 + rand() * 0.06)}" stroke-width="${n(14 + rand() * 14)}" stroke-linecap="round" filter="url(#blurSoft)"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#12161A"/>
      <stop offset="0.6" stop-color="#0A0D10"/>
      <stop offset="1" stop-color="#050709"/>
    </linearGradient>
    <radialGradient id="key" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#E4B46A" stop-opacity="0.5"/>
      <stop offset="0.5" stop-color="#C47A45" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#C47A45" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vignette" cx="50%" cy="44%" r="64%">
      <stop offset="0.4" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.8"/>
    </radialGradient>
    <linearGradient id="steel" x1="0" y1="0" x2="1" y2="0.4">
      <stop offset="0" stop-color="#3A4048"/>
      <stop offset="0.35" stop-color="#20252B"/>
      <stop offset="0.72" stop-color="#4A5058"/>
      <stop offset="1" stop-color="#14181C"/>
    </linearGradient>
    <linearGradient id="cup" x1="1" y1="0" x2="0" y2="0.4">
      <stop offset="0" stop-color="#3A4048"/>
      <stop offset="0.5" stop-color="#22272D"/>
      <stop offset="1" stop-color="#0E1114"/>
    </linearGradient>
    <linearGradient id="pour" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#6B3E1C" stop-opacity="0.9"/>
      <stop offset="0.5" stop-color="#B87A3E" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#D89A54" stop-opacity="0.85"/>
    </linearGradient>
    <filter id="blurSoft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="26"/></filter>
    <filter id="blurWide" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="80"/></filter>
    <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="7"/><feColorMatrix type="saturate" values="0"/></filter>
  </defs>

  <rect width="1600" height="1000" fill="url(#bg)"/>
  <ellipse cx="1180" cy="300" rx="620" ry="520" fill="url(#key)"/>
  <ellipse cx="300" cy="700" rx="440" ry="360" fill="#C47A45" opacity="0.07" filter="url(#blurWide)"/>

  <!-- arka plan: makine gövdesi -->
  <rect x="440" y="60" width="720" height="330" rx="26" fill="#0E1216"/>
  <rect x="440" y="60" width="720" height="330" rx="26" fill="url(#steel)" opacity="0.5"/>
  <rect x="470" y="96" width="660" height="10" rx="5" fill="#E4B46A" opacity="0.18"/>
  <circle cx="560" cy="220" r="52" fill="#171B20"/>
  <circle cx="560" cy="220" r="52" fill="none" stroke="#E4B46A" stroke-opacity="0.28" stroke-width="3"/>
  <circle cx="560" cy="220" r="30" fill="#0A0D10"/>
  <circle cx="1044" cy="220" r="52" fill="#171B20"/>
  <circle cx="1044" cy="220" r="52" fill="none" stroke="#C47A45" stroke-opacity="0.24" stroke-width="3"/>

  <!-- grup kafası -->
  <rect x="700" y="330" width="200" height="86" rx="16" fill="url(#steel)"/>
  <rect x="726" y="416" width="148" height="42" rx="12" fill="#1A1F25"/>
  <rect x="600" y="424" width="152" height="26" rx="12" fill="url(#steel)"/>
  <rect x="740" y="452" width="120" height="26" rx="10" fill="#2A3038"/>
  <rect x="700" y="330" width="200" height="14" rx="7" fill="#E4B46A" opacity="0.16"/>

  <!-- espresso akışı -->
  <path d="M 772 476 C 770 540 768 580 770 620" stroke="url(#pour)" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M 828 476 C 830 540 832 580 830 620" stroke="url(#pour)" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M 772 476 C 770 540 768 580 770 620" stroke="#E4B46A" stroke-opacity="0.5" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M 828 476 C 830 540 832 580 830 620" stroke="#E4B46A" stroke-opacity="0.5" stroke-width="2.5" fill="none" stroke-linecap="round"/>

  ${steamPaths}

  <!-- tezgâh -->
  <rect x="0" y="700" width="1600" height="300" fill="#07090B"/>
  <rect x="0" y="700" width="1600" height="4" fill="#E4B46A" opacity="0.14"/>
  <ellipse cx="800" cy="712" rx="420" ry="60" fill="#000" opacity="0.7" filter="url(#blurWide)"/>

  <!-- fincan -->
  <ellipse cx="800" cy="706" rx="150" ry="26" fill="#000" opacity="0.66" filter="url(#blurSoft)"/>
  <path d="M 694 606 C 696 654 706 682 716 692 Q 800 706 884 692 C 894 682 904 654 906 606 Z" fill="url(#cup)"/>
  <path d="M 900 620 C 946 616 950 668 908 672" fill="none" stroke="url(#cup)" stroke-width="20" stroke-linecap="round"/>
  <ellipse cx="800" cy="606" rx="106" ry="24" fill="#12161A"/>
  <ellipse cx="800" cy="606" rx="98" ry="20" fill="#3E2413"/>
  <ellipse cx="826" cy="602" rx="52" ry="11" fill="#C08A55" opacity="0.5"/>
  <path d="M 694 606 C 696 654 706 682 716 692 Q 800 706 884 692 C 894 682 904 654 906 606"
    fill="none" stroke="#E4B46A" stroke-opacity="0.34" stroke-width="2.6"/>

  ${beans}

  <rect width="1600" height="1000" fill="url(#vignette)"/>
  <rect width="1600" height="1000" filter="url(#grain)" opacity="0.07" style="mix-blend-mode:overlay"/>
</svg>
`;
}

/* ---------------------------------------------------------------- çalıştır */

async function main() {
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
