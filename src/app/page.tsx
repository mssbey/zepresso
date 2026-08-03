import { MenuExperience } from "@/components/menu-experience";

/**
 * QR kod ile açılan tek sayfalık müşteri menüsü.
 * Tüm içerik `src/data/*` dosyalarından gelir; sunucuda render edilir,
 * etkileşimler istemci tarafında çalışır.
 */
export default function Page() {
  return <MenuExperience />;
}
