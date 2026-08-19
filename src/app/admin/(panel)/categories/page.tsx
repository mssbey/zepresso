import { readCategoryData } from "@/lib/admin/content-store"
import { CategoriesEditor } from "@/components/admin/categories-editor"

export default async function AdminCategoriesPage() {
  const { categories } = await readCategoryData()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="eyebrow">Menü</span>
        <h1 className="mt-1 font-heading text-3xl font-medium text-ink">Kategoriler</h1>
        <p className="mt-1 text-sm text-dim">
          Kategoriler düzenlenebilir ve sıralanabilir; &ldquo;Öne Çıkanlar&rdquo; yapısal olduğu için sabittir.
        </p>
      </div>
      <CategoriesEditor initialCategories={categories} />
    </div>
  )
}
