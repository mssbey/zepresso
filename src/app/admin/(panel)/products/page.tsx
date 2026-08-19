import { readCategoryData, readProducts } from "@/lib/admin/content-store"
import { ProductsTable } from "@/components/admin/products-table"

export default async function AdminProductsPage() {
  const [products, { categories }] = await Promise.all([readProducts(), readCategoryData()])

  return <ProductsTable initialProducts={products} categories={categories} />
}
