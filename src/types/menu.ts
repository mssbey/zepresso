/**
 * Zepresso — QR menü veri modeli.
 *
 * Tüm menü içeriği bu tipler üzerinden yönetilir. Gerçek bir API bağlandığında
 * yalnızca `src/data/*` dosyalarının kaynağı değişir, arayüz aynı kalır.
 */

export type CategoryId =
  | "one-cikanlar"
  | "sicak-kahveler"
  | "soguk-kahveler"
  | "imza-icecekler"
  | "caylar"
  | "tatlilar"
  | "atistirmaliklar";

/**
 * Ürün listesinde küçük etiket olarak gösterilen özellikler.
 * Admin panelden yeni etiketler eklenebildiği için serbest metin kimliğidir;
 * bilinen değerler `src/data/categories.ts` içindeki `tags` kaydında tutulur.
 */
export type TagId = string;

/**
 * Öne çıkan kartlarda gösterilen tekil rozet.
 * Admin panelden yeni rozetler eklenebildiği için serbest metin kimliğidir;
 * bilinen değerler `src/data/categories.ts` içindeki `badges` kaydında tutulur.
 */
export type BadgeId = string;

export interface Category {
  id: CategoryId;
  /** Kategori navigasyonunda ve bölüm başlığında görünen ad. */
  name: string;
  /** Bölüm başlığının üstündeki küçük büyük-harf etiket. */
  eyebrow: string;
  /** Bölüm başlığının altındaki kısa açıklama. */
  description: string;
}

export interface Tag {
  id: TagId;
  label: string;
  /** Etiketin arayüzdeki renk karakteri. */
  tone: "leaf" | "ember" | "ice" | "amber" | "copper";
}

export interface Badge {
  id: BadgeId;
  label: string;
}

/**
 * Ürün görselinin sanat yönetimi tarifi.
 *
 * `scripts/generate-art.mjs` bu tarifi okuyup `public/menu/<id>.svg` dosyasını
 * üretir: koyu fon, sıcak yan ışık, tek konu, üzerinde yazı yok.
 */
export interface ProductArt {
  /** Sahnedeki kabın / sunumun biçimi. */
  vessel:
    | "espresso"
    | "cappuccinoCup"
    | "mug"
    | "latteGlass"
    | "icedGlass"
    | "teaGlass"
    | "teacup"
    | "cheesecakeSlice"
    | "cakeSlice"
    | "plated"
    | "sandwich"
    | "croissant"
    | "bowl";
  /** İçeriğin ana rengi (üstten alta iki durak). */
  liquid: [string, string];
  /** Köpük / krema / sos katmanı rengi. */
  crema?: string;
  /** Sahnedeki sıcak ışığın rengi. */
  light: string;
  /** Işığın geldiği yön; sahneler arasında ritim oluşturur. */
  lightFrom: "left" | "right";
  /** Buhar (sıcak içecekler) veya buz parıltısı (soğuk). */
  steam?: boolean;
  /** Sahneye eklenen küçük detay. */
  garnish?:
    | "beans"
    | "cocoa"
    | "cinnamon"
    | "mint"
    | "citrus"
    | "cream"
    | "pistachio"
    | "berry"
    | "none";
  /** 0–1 arası; kompozisyonu deterministik biçimde çeşitlendirir. */
  seed: number;
}

export interface Product {
  id: string;
  name: string;
  categoryId: Exclude<CategoryId, "one-cikanlar">;
  /** Türk lirası cinsinden fiyat. */
  price: number;
  /** Listede görünen tek satırlık tanım. */
  summary: string;
  /** Detay panelinde görünen uzun anlatım. */
  description: string;
  ingredients: string[];
  allergens: string[];
  /** Opsiyonel kalori bilgisi. */
  calories?: number;
  tags: TagId[];
  badge?: BadgeId;
  /** "Baristanın Seçimleri" bölümünde gösterilir. */
  featured?: boolean;
  /** Karışık içeceklerde hacim / porsiyon bilgisi. */
  serving?: string;
  /** `public/` altındaki görsel yolu. */
  image: string;
  art: ProductArt;
}

export interface VenueInfo {
  name: string;
  tagline: string;
  district: string;
  city: string;
  address: string;
  phone: string;
  phoneHref: string;
  instagram: string;
  instagramUrl: string;
  mapsUrl: string;
  wifi: { network: string; password: string };
  hours: { days: string; open: string; close: string }[];
  /** Bugün için kapanış saati — "açığız" rozetinde kullanılır. */
  todayClosing: string;
  allergenNotice: string;
  serviceNote: string;
}

/** Menü açılışında gösterilen, admin panelden yönetilebilir fırsat paketi. */
export interface Campaign {
  id: string;
  title: string;
  description: string;
  price: number;
  /** İndirim karşılaştırmasında üstü çizili gösterilen eski fiyat. */
  originalPrice?: number;
  /** Kartın üstünde görünen kısa vurgu; örn. "Günün Fırsatı". */
  badge: string;
  /** `public/` yolu veya Vercel Blob URL'i. */
  image: string;
  active: boolean;
  /** Bağlı ürünlerin kimlikleri; müşteri ürün detayına doğrudan geçebilir. */
  productIds?: string[];
  /** Kampanyanın mutlak yayın aralığı (yerel ISO tarih-saat metni). */
  startsAt?: string;
  endsAt?: string;
  /** 0=Pazar ... 6=Cumartesi. Boş bırakılırsa haftanın her günü. */
  daysOfWeek?: number[];
  /** Gün içindeki tekrarlanan yayın aralığı. */
  dailyStart?: string;
  dailyEnd?: string;
}

/**
 * Müşteri menüsünün tek bir istekte okunan tüm içeriği.
 * Sunucuda `getMenuContent()` ile üretilir, istemciye `MenuContentProvider`
 * üzerinden dağıtılır.
 */
export interface MenuContent {
  products: Product[];
  categories: Category[];
  tags: Record<TagId, Tag>;
  badges: Record<BadgeId, Badge>;
  venue: VenueInfo;
  campaigns: Campaign[];
}
