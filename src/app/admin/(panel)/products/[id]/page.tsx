import { notFound } from "next/navigation"

import { readCategoryData, readProducts } from "@/lib/admin/content-store"
import { ProductForm } from "@/components/admin/product-form"
import { RegenerateArtButton } from "@/components/admin/regenerate-art-button"

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [products, { categories, tags, badges }] = await Promise.all([
    readProducts(),
    readCategoryData(),
  ])
  const product = products.find((p) => p.id === id)
  if (!product) notFound()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="eyebrow">Ürünler</span>
          <h1 className="mt-1 font-heading text-3xl font-medium text-ink">{product.name}</h1>
        </div>
        <RegenerateArtButton productId={product.id} />
      </div>
      <ProductForm mode="edit" product={product} categories={categories} tags={tags} badges={badges} />
    </div>
  )
}
