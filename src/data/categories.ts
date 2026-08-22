/**
 * OTOMATİK ÜRETİLDİ — elle düzenlemeyin.
 * Admin panelden içerik değiştikçe bu dosya Vercel Blob'daki
 * kaynaktan yeniden üretilir (`src/lib/server/content-render.js`).
 */
import type { Badge, BadgeId, Category, Tag, TagId } from "@/types/menu";

export const categories: Category[] = [
  {
    "id": "one-cikanlar",
    "name": "Öne Çıkanlar",
    "eyebrow": "Baristanın seçimleri",
    "description": "Ekibimizin bu sezon en çok önerdiği, Zepresso mutfağının karakterini en iyi anlatan tatlar."
  },
  {
    "id": "sicak-kahveler",
    "name": "Sıcak Kahveler",
    "eyebrow": "Sıcak",
    "description": "Günlük kavrulan tek köken çekirdeklerle, espresso bazlı klasikler ve demleme yöntemleri."
  },
  {
    "id": "soguk-kahveler",
    "name": "Soğuk Kahveler",
    "eyebrow": "Soğuk",
    "description": "18 saat soğuk demlenen bazlar, buzla açılan aromalar ve gün boyu ferahlatan tarifler."
  },
  {
    "id": "imza-icecekler",
    "name": "İmza İçecekler",
    "eyebrow": "Zepresso imzası",
    "description": "Yalnızca burada bulacağınız, mutfakta geliştirilen özel şurup ve infüzyonlarla hazırlanan tarifler."
  },
  {
    "id": "caylar",
    "name": "Çaylar",
    "eyebrow": "Demleme",
    "description": "Rize'den gelen harmanlar, botanik infüzyonlar ve tören usulü hazırlanan matcha."
  },
  {
    "id": "tatlilar",
    "name": "Tatlılar",
    "eyebrow": "Pastane",
    "description": "Her sabah mutfağımızda hazırlanan, kahvenin yanında dengeli durması için tasarlanmış tatlılar."
  },
  {
    "id": "atistirmaliklar",
    "name": "Atıştırmalıklar",
    "eyebrow": "Mutfak",
    "description": "Ekşi maya ekmekler, günlük açılan hamur işleri ve doyurucu tuzlu seçenekler."
  }
];

export const tags: Record<TagId, Tag> = {
  "vegan": {
    "id": "vegan",
    "label": "Vegan",
    "tone": "leaf"
  },
  "acili": {
    "id": "acili",
    "label": "Acılı",
    "tone": "ember"
  },
  "buzlu": {
    "id": "buzlu",
    "label": "Buzlu",
    "tone": "ice"
  },
  "yeni": {
    "id": "yeni",
    "label": "Yeni",
    "tone": "amber"
  },
  "cok-sevilen": {
    "id": "cok-sevilen",
    "label": "Çok Sevilen",
    "tone": "copper"
  }
};

export const badges: Record<BadgeId, Badge> = {
  "cok-sevilen": {
    "id": "cok-sevilen",
    "label": "Çok Sevilen"
  },
  "yeni": {
    "id": "yeni",
    "label": "Yeni"
  },
  "zepresso-imzasi": {
    "id": "zepresso-imzasi",
    "label": "Zepresso İmzası"
  }
};
