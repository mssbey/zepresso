import { readCategoryData } from "@/lib/admin/content-store"
import { TagsBadgesEditor } from "@/components/admin/tags-badges-editor"

export default async function AdminTagsBadgesPage() {
  const { tags, badges } = await readCategoryData()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="eyebrow">Menü</span>
        <h1 className="mt-1 font-heading text-3xl font-medium text-ink">Etiket & Rozet</h1>
      </div>
      <TagsBadgesEditor initialTags={tags} initialBadges={badges} />
    </div>
  )
}
