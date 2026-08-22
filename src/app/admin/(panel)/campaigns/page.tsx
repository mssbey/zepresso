import { CampaignsEditor } from "@/components/admin/campaigns-editor";
import { readCampaigns, readProducts } from "@/lib/admin/content-store";

export default async function AdminCampaignsPage() {
  const [campaigns, products] = await Promise.all([readCampaigns(), readProducts()]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="eyebrow">Açılış vitrini</span>
        <h1 className="mt-1 font-heading text-3xl font-medium text-ink">Kampanyalar</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-dim">
          Menü ilk açıldığında gösterilecek paketleri ekleyin, sıralayın veya tek dokunuşla yayından kaldırın.
        </p>
      </div>
      <CampaignsEditor initialCampaigns={campaigns} products={products} />
    </div>
  );
}
