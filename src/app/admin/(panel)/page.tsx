import { access } from "node:fs/promises"
import path from "node:path"

import Link from "next/link"
import { AlertTriangle, ArrowRight, Coffee, Sparkles, Tags, Ticket } from "lucide-react"

import { readCategoryData, readProducts } from "@/lib/admin/content-store"
import { Button } from "@/components/ui/button"

async function fileExists(publicPath: string) {
  try {
    await access(path.join(process.cwd(), "public", publicPath.replace(/^\//, "")))
    return true
  } catch {
    return false
  }
}

export default async function AdminDashboardPage() {
  const [products, { categories, tags, badges }] = await Promise.all([
    readProducts(),
    readCategoryData(),
  ])

  const featuredCount = products.filter((p) => p.featured).length
  const byCategory = categories
    .filter((c) => c.id !== "one-cikanlar")
    .map((c) => ({
      ...c,
      count: products.filter((p) => p.categoryId === c.id).length,
    }))
    .sort((a, b) => b.count - a.count)
  const maxCount = Math.max(1, ...byCategory.map((c) => c.count))

  const missingImageChecks = await Promise.all(
    products.map(async (p) => ({ id: p.id, name: p.name, exists: await fileExists(p.image) })),
  )
  const missingImages = missingImageChecks.filter((p) => !p.exists)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="eyebrow">Genel bakış</span>
          <h1 className="mt-1 font-heading text-3xl font-medium text-ink">Panel</h1>
          <p className="mt-1.5 text-sm text-dim">Menünüzün anlık durumu ve hızlı erişim.</p>
        </div>
        <div className="flex gap-2.5">
          <Button variant="outline" asChild>
            <Link href="/admin/products">Tüm ürünler</Link>
          </Button>
          <Button asChild>
            <Link href="/admin/products/new" className="gap-1.5">
              <Sparkles className="size-3.5" /> Yeni ürün
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard icon={Coffee} label="Toplam ürün" value={products.length} accent="gold" />
        <StatCard icon={Sparkles} label="Öne çıkan" value={featuredCount} accent="espresso" />
        <StatCard icon={Tags} label="Etiket" value={Object.keys(tags).length} accent="ice" />
        <StatCard icon={Ticket} label="Rozet" value={Object.keys(badges).length} accent="amber" />
      </div>

      <div className="surface-card relative overflow-hidden rounded-2xl p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 right-0 size-56 rounded-full bg-gold/8 blur-[80px]"
        />
        <div className="relative flex items-center justify-between">
          <h2 className="font-heading text-lg font-medium text-ink">Kategori dağılımı</h2>
          <span className="text-xs text-dim">{products.length} ürün</span>
        </div>
        <div className="relative mt-5 flex flex-col gap-4">
          {byCategory.map((c) => (
            <div key={c.id} className="flex items-center gap-4">
              <span className="w-36 shrink-0 truncate text-sm font-medium text-ink">{c.name}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5 ring-1 ring-inset ring-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-espresso to-gold shadow-[0_0_12px_-2px_rgba(228,180,106,0.6)] transition-[width] duration-500"
                  style={{ width: `${(c.count / maxCount) * 100}%` }}
                />
              </div>
              <span className="w-6 shrink-0 text-right font-heading text-sm text-ink tabular-nums">
                {c.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {missingImages.length > 0 && (
        <div className="surface-card relative overflow-hidden rounded-2xl p-6 ring-1 ring-inset ring-destructive/25">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-destructive/10 text-destructive">
              <AlertTriangle className="size-4" strokeWidth={2} />
            </span>
            <h2 className="font-heading text-lg font-medium text-ink">
              Eksik görsel <span className="text-dim">({missingImages.length})</span>
            </h2>
          </div>
          <ul className="mt-4 flex flex-col divide-y divide-line">
            {missingImages.map((p) => (
              <li key={p.id} className="flex items-center justify-between py-2 text-sm">
                <span className="text-dim">{p.name}</span>
                <Link
                  href={`/admin/products/${p.id}`}
                  className="inline-flex items-center gap-1 font-medium text-gold transition-opacity hover:opacity-80"
                >
                  Görsel ekle <ArrowRight className="size-3" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const ACCENTS = {
  gold: "from-gold/20 to-gold/5 text-gold ring-gold/25",
  espresso: "from-espresso/25 to-espresso/5 text-espresso ring-espresso/25",
  ice: "from-[#8FB6D6]/20 to-[#8FB6D6]/5 text-[#8FB6D6] ring-[#8FB6D6]/25",
  amber: "from-[#E08A5A]/20 to-[#E08A5A]/5 text-[#E08A5A] ring-[#E08A5A]/25",
} as const

function StatCard({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: typeof Coffee
  label: string
  value: number
  accent: keyof typeof ACCENTS
}) {
  return (
    <div className="surface-card surface-card-hover group relative overflow-hidden rounded-2xl p-5">
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <span
        className={`grid size-10 place-items-center rounded-xl bg-gradient-to-br ring-1 ring-inset transition-transform duration-300 group-hover:scale-110 ${ACCENTS[accent]}`}
      >
        <Icon className="size-5" strokeWidth={1.9} />
      </span>
      <div className="mt-4 font-heading text-3xl font-medium text-ink tabular-nums">{value}</div>
      <div className="mt-1 text-xs font-medium tracking-wide text-dim uppercase">{label}</div>
    </div>
  )
}
