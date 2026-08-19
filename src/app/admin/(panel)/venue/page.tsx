import { readVenue } from "@/lib/admin/content-store"
import { VenueForm } from "@/components/admin/venue-form"

export default async function AdminVenuePage() {
  const venue = await readVenue()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="eyebrow">Mekan</span>
        <h1 className="mt-1 font-heading text-3xl font-medium text-ink">Mekan Bilgisi</h1>
      </div>
      <VenueForm initialVenue={venue} />
    </div>
  )
}
