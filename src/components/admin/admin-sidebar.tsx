"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Coffee,
  ExternalLink,
  FolderTree,
  LayoutGrid,
  LogOut,
  Megaphone,
  Store,
  Tags,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const NAV_ITEMS = [
  { href: "/admin", label: "Panel", icon: LayoutGrid },
  { href: "/admin/products", label: "Ürünler", icon: Coffee },
  { href: "/admin/campaigns", label: "Kampanyalar", icon: Megaphone },
  { href: "/admin/categories", label: "Kategoriler", icon: FolderTree },
  { href: "/admin/tags-badges", label: "Etiket & Rozet", icon: Tags },
  { href: "/admin/venue", label: "Mekan Bilgisi", icon: Store },
] as const

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <aside className="relative flex h-dvh w-64 shrink-0 flex-col overflow-hidden border-r border-line bg-[linear-gradient(180deg,var(--z-surface-1)_0%,var(--z-void)_70%)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-16 size-64 rounded-full bg-espresso/18 blur-[90px]"
      />

      <div className="relative flex items-center gap-3 px-6 py-6">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold/25 to-espresso/20 text-gold ring-1 ring-inset ring-gold/25">
          <Coffee className="size-5" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <div className="truncate font-heading text-base font-medium text-ink">Zepresso</div>
          <div className="eyebrow">Admin panel</div>
        </div>
      </div>

      <div className="relative mx-4 mb-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <nav className="relative flex flex-1 flex-col gap-1 px-4 py-2">
        {NAV_ITEMS.map((item) => {
          const active =
            item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href)
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-3 overflow-hidden rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                active
                  ? "bg-gradient-to-r from-gold/14 via-gold/8 to-transparent text-ink shadow-[inset_0_1px_0_0_rgb(228,180,106,0.12)]"
                  : "text-dim hover:bg-white/[0.04] hover:text-ink",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-gold transition-all duration-200",
                  active ? "opacity-100" : "opacity-0 group-hover:opacity-30",
                )}
              />
              <span
                className={cn(
                  "grid size-7 shrink-0 place-items-center rounded-lg transition-colors duration-200",
                  active ? "bg-gold/15 text-gold" : "text-dim/80 group-hover:text-ink",
                )}
              >
                <Icon className="size-3.5" strokeWidth={2.1} />
              </span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="relative flex flex-col gap-2 border-t border-line px-4 py-5">
        <Button variant="outline" size="sm" asChild className="justify-start gap-2">
          <Link href="/" target="_blank">
            <ExternalLink className="size-3.5" />
            Siteyi görüntüle
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="justify-start gap-2 text-dim hover:text-ink"
        >
          <LogOut className="size-3.5" />
          Çıkış yap
        </Button>
      </div>
    </aside>
  )
}
