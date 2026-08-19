import { readCategoryData } from "@/lib/admin/content-store"
import { ProductForm } from "@/components/admin/product-form"

export default async function NewProductPage() {
  const { categories, tags, badges } = await readCategoryData()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="eyebrow">Ürünler</span>
        <h1 className="mt-1 font-heading text-3xl font-medium text-ink">Yeni ürün</h1>
      </div>
      <ProductForm mode="create" categories={categories} tags={tags} badges={badges} />
    </div>
  )
}
