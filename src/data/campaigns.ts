/**
 * OTOMATİK ÜRETİLDİ — elle düzenlemeyin.
 * Admin panelden içerik değiştikçe bu dosya Vercel Blob'daki
 * kaynaktan yeniden üretilir (`src/lib/server/content-render.js`).
 */
import type { Campaign } from "@/types/menu";

export const campaigns: Campaign[] = [
  {
    "id": "kahve-tatli-keyfi",
    "title": "Kahve + Tatlı Keyfi",
    "description": "İpeksi cappuccino ve San Sebastian cheesecake ile kendine tatlı bir mola ver.",
    "price": 300,
    "originalPrice": 360,
    "badge": "Günün Fırsatı",
    "image": "/campaigns/kahve-tatli-keyfi.png",
    "active": true,
    "productIds": [
      "cappuccino",
      "san-sebastian-cheesecake"
    ],
    "daysOfWeek": [
      0,
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "dailyStart": "00:00",
    "dailyEnd": "23:59"
  }
];
