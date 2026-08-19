"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Copy, Pencil, Plus, Search, Star, Trash2 } from "lucide-react"

import type { Category, Product } from "@/types/menu"
import { cn } from "@/lib/utils"
import { formatPrice } from "@/lib/format"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ConfirmDialog } from "@/components/admin/confirm-dialog"
import { toast } from "@/components/ui/toast"

type SortKey = "name" | "price" | "category"

export function ProductsTable({
  initialProducts,
  categories,
}: {
  initialProducts: Product[]
  categories: Category[]
}) {
  const [products, setProducts] = useState(initialProducts)
  const [query, setQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [sortKey, setSortKey] = useState<SortKey>("name")
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null)

  const categoryOptions = categories.filter((c) => c.id !== "one-cikanlar")
  const categoryNameMap = useMemo(
    () => new Map<string, string>(categoryOptions.map((c) => [c.id, c.name])),
    [categoryOptions],
  )
  const categoryName = (id: string) => categoryNameMap.get(id) ?? id

  const filtered = useMemo(() => {
    let list = products
    if (categoryFilter !== "all") {
      list = list.filter((p) => p.categoryId === categoryFilter)
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q),
      )
    }
    return [...list].sort((a, b) => {
      if (sortKey === "price") return a.price - b.price
      if (sortKey === "category")
        return (categoryNameMap.get(a.categoryId) ?? a.categoryId).localeCompare(
          categoryNameMap.get(b.categoryId) ?? b.categoryId,
        )
      return a.name.localeCompare(b.name)
    })
  }, [products, query, categoryFilter, sortKey, categoryNameMap])

  async function toggleFeatured(product: Product) {
    const next = { ...product, featured: !product.featured }
    setProducts((prev) => prev.map((p) => (p.id === product.id ? next : p)))
    const res = await fetch(`/api/admin/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    })
    if (!res.ok) {
      setProducts((prev) => prev.map((p) => (p.id === product.id ? product : p)))
      toast.error("Güncellenemedi.")
    }
  }

  async function duplicate(product: Product) {
    const res = await fetch(`/api/admin/products/${product.id}/duplicate`, { method: "POST" })
    if (!res.ok) {
      toast.error("Kopyalanamadı.")
      return
    }
    const copy = await res.json()
    setProducts((prev) => [...prev, copy])
    toast.success(`"${copy.name}" oluşturuldu.`)
  }

  async function handleDelete() {
    if (!deleteTarget) return
    const res = await fetch(`/api/admin/products/${deleteTarget.id}`, { method: "DELETE" })
    if (!res.ok) {
      toast.error("Silinemedi.")
      return
    }
    setProducts((prev) => prev.filter((p) => p.id !== deleteTarget.id))
    toast.success(`"${deleteTarget.name}" silindi.`)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="eyebrow">Menü</span>
          <h1 className="mt-1 font-heading text-3xl font-medium text-ink">
            Ürünler <span className="text-dim">({filtered.length})</span>
          </h1>
        </div>
        <Button asChild>
          <Link href="/admin/products/new" className="gap-1.5">
            <Plus className="size-4" /> Yeni ürün
          </Link>
        </Button>
      </div>

      <div className="surface-card flex flex-wrap gap-3 rounded-2xl p-3">
        <div className="relative min-w-56 flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-dim" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ürün ara…"
            className="border-transparent bg-white/[0.03] pl-8 focus-visible:border-ring"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-48 border-transparent bg-white/[0.03]"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tüm kategoriler</SelectItem>
            {categoryOptions.map((c) => (
              <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sortKey} onValueChange={(v) => setSortKey(v as SortKey)}>
          <SelectTrigger className="w-40 border-transparent bg-white/[0.03]"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="name">İsme göre</SelectItem>
            <SelectItem value="price">Fiyata göre</SelectItem>
            <SelectItem value="category">Kategoriye göre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="surface-card overflow-hidden rounded-2xl">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="pl-5">Ürün</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Fiyat</TableHead>
              <TableHead>Öne çıkan</TableHead>
              <TableHead className="pr-5 text-right">İşlemler</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((product) => (
              <TableRow key={product.id} className="group">
                <TableCell className="pl-5">
                  <div className="flex items-center gap-3">
                    <ProductThumb src={product.image} name={product.name} />
                    <div className="min-w-0">
                      <Link
                        href={`/admin/products/${product.id}`}
                        className="font-medium text-ink transition-colors group-hover:text-gold"
                      >
                        {product.name}
                      </Link>
                      <div className="mt-0.5 max-w-xs truncate text-xs text-dim">
                        {product.summary}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-dim ring-1 ring-inset ring-white/8">
                    {categoryName(product.categoryId)}
                  </span>
                </TableCell>
                <TableCell className="font-medium text-ink tabular-nums">
                  {formatPrice(product.price)}
                </TableCell>
                <TableCell>
                  <button
                    onClick={() => toggleFeatured(product)}
                    className={cn(
                      "grid size-7 place-items-center rounded-full transition-colors",
                      product.featured
                        ? "bg-gold/15 text-gold"
                        : "text-dim hover:bg-white/5 hover:text-ink",
                    )}
                    aria-pressed={product.featured}
                    title="Öne çıkanlarda göster/gizle"
                  >
                    <Star className="size-3.5" fill={product.featured ? "currentColor" : "none"} />
                  </button>
                </TableCell>
                <TableCell className="pr-5">
                  <div className="flex items-center justify-end gap-1 opacity-70 transition-opacity group-hover:opacity-100">
                    <Button variant="ghost" size="icon-sm" asChild title="Düzenle">
                      <Link href={`/admin/products/${product.id}`}>
                        <Pencil className="size-3.5" />
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => duplicate(product)}
                      title="Kopyala"
                    >
                      <Copy className="size-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => setDeleteTarget(product)}
                      title="Sil"
                      className="hover:text-destructive"
                    >
                      <Trash2 className="size-3.5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="py-14 text-center text-dim">
                  Sonuç bulunamadı.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
        title="Ürünü sil"
        description={`"${deleteTarget?.name}" kalıcı olarak silinecek. Bu işlem geri alınamaz.`}
        onConfirm={handleDelete}
      />
    </div>
  )
}

function ProductThumb({ src, name }: { src: string; name: string }) {
  const [errored, setErrored] = useState(false)

  return (
    <div className="relative size-11 shrink-0 overflow-hidden rounded-lg bg-[linear-gradient(160deg,var(--z-surface-2),#0b0e11)] ring-1 ring-inset ring-white/8">
      {errored ? (
        <span className="grid size-full place-items-center font-heading text-sm text-gold/40">
          {name.charAt(0)}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          className="size-full object-cover"
          loading="lazy"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  )
}
