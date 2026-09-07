import type { Metadata } from "next";

import { MenuExperience } from "@/components/menu-experience";
import { getMenuContent } from "@/lib/menu-content";

/**
 * QR kod ile açılan tek sayfalık müşteri menüsü.
 *
 * İçerik her istekte güncel kaynaktan okunur (bkz. `@/lib/menu-content`);
 * böylece admin panelden yapılan fiyat/ürün değişiklikleri sayfa yenilenir
 * yenilenmez görünür. Etkileşimler istemci tarafında çalışır.
 */
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { venue } = await getMenuContent();

  return {
    openGraph: {
      title: `${venue.name} — Menü`,
      description: venue.tagline,
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function Page() {
  const content = await getMenuContent();

  return <MenuExperience content={content} />;
}
