import { cache } from "react";

import {
  readCampaigns,
  readCategoryData,
  readProducts,
  readVenue,
} from "@/lib/admin/content-store";
import type { MenuContent } from "@/types/menu";

/**
 * Müşteri menüsünün içeriğini istek anında okur.
 *
 * İçerik derleme zamanında bir modüle gömülmediği için, admin panelden yapılan
 * değişiklikler bir sonraki sayfa isteğinde görünür — yeniden build ya da
 * deploy gerekmez.
 *
 * React `cache` sayesinde aynı istek içindeki çağrılar (`generateMetadata` ve
 * sayfanın kendisi) tek bir okumaya iner.
 */
export const getMenuContent = cache(async (): Promise<MenuContent> => {
  const [products, categoryData, venue, campaigns] = await Promise.all([
    readProducts(),
    readCategoryData(),
    readVenue(),
    readCampaigns(),
  ]);

  return {
    products,
    categories: categoryData.categories,
    tags: categoryData.tags,
    badges: categoryData.badges,
    venue,
    campaigns,
  };
});
