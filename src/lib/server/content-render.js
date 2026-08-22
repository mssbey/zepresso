/**
 * Menü JSON verisinden (products/categories/venue) `src/data/*.ts` modüllerini
 * üretir. Hem `src/lib/admin/content-store.ts` (admin yazma isteklerinde,
 * best-effort yerel önizleme için) hem `scripts/sync-content.mjs` (build
 * öncesi, Blob'daki gerçek veriden) tarafından paylaşılır.
 */

export const GENERATED_HEADER =
  "/**\n * OTOMATİK ÜRETİLDİ — elle düzenlemeyin.\n * Admin panelden içerik değiştikçe bu dosya Vercel Blob'daki\n * kaynaktan yeniden üretilir (`src/lib/server/content-render.js`).\n */\n";

export function renderProductsModule(products) {
  return `${GENERATED_HEADER}import type { Product } from "@/types/menu";

export const products: Product[] = ${JSON.stringify(products, null, 2)};

export const featuredProducts = products.filter((product) => product.featured);

export const productsByCategory = (categoryId: Product["categoryId"]) =>
  products.filter((product) => product.categoryId === categoryId);

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);

/** Detay panelinde gösterilen benzer ürünler — aynı kategoriden, kendisi hariç. */
export const getRelatedProducts = (product: Product, limit = 6) =>
  products
    .filter((item) => item.categoryId === product.categoryId && item.id !== product.id)
    .slice(0, limit);
`;
}

export function renderCategoriesModule(data) {
  return `${GENERATED_HEADER}import type { Badge, BadgeId, Category, Tag, TagId } from "@/types/menu";

export const categories: Category[] = ${JSON.stringify(data.categories, null, 2)};

export const tags: Record<TagId, Tag> = ${JSON.stringify(data.tags, null, 2)};

export const badges: Record<BadgeId, Badge> = ${JSON.stringify(data.badges, null, 2)};
`;
}

export function renderVenueModule(venue) {
  return `${GENERATED_HEADER}import type { VenueInfo } from "@/types/menu";

export const venue: VenueInfo = ${JSON.stringify(venue, null, 2)};
`;
}

export function renderCampaignsModule(campaigns) {
  return `${GENERATED_HEADER}import type { Campaign } from "@/types/menu";

export const campaigns: Campaign[] = ${JSON.stringify(campaigns, null, 2)};
`;
}
