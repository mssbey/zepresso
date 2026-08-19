"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, Loader2, Lock, Save, Sparkles } from "lucide-react"

import type { Category } from "@/types/menu"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/toast"

export function CategoriesEditor({ initialCategories }: { initialCategories: Category[] }) {
  const [categories, setCategories] = useState(initialCategories)
  const [saving, setSaving] = useState(false)

  function update(id: string, patch: Partial<Category>) {
    setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)))
  }

  function move(index: number, direction: -1 | 1) {
    setCategories((prev) => {
      const next = [...prev]
      const target = index + direction
      // "one-cikanlar" (index 0) sabit kalır.
      if (target <= 0 || target >= next.length) return prev
      if (index <= 0) return prev
      ;[next[index], next[target]] = [next[target], next[index]]
      return next
    })
  }

  async function handleSave() {
    setSaving(true)
    try {
      const res = await fetch("/api/admin/categories", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categories }),
      })
      const data = await res.json()
      if (!res.ok) {
        toast.error(data.error ?? "Kaydedilemedi.")
        return
      }
      toast.success("Kategoriler güncellendi.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {categories.map((category, index) => {
        const locked = category.id === "one-cikanlar"
        return (
          <div
            key={category.id}
            className={cn(
              "surface-card rounded-2xl p-5",
              locked && "ring-1 ring-inset ring-gold/15",
            )}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-lg ring-1 ring-inset",
                    locked
                      ? "bg-gradient-to-br from-gold/25 to-gold/5 text-gold ring-gold/25"
                      : "bg-white/5 text-dim ring-white/8",
                  )}
                >
                  {locked ? (
                    <Sparkles className="size-4" strokeWidth={1.9} />
                  ) : (
                    <span className="font-heading text-xs font-medium tabular-nums">{index}</span>
                  )}
                </span>
                <div>
                  <span className="font-heading text-sm font-medium text-ink">{category.name}</span>
                  {locked && (
                    <span className="ml-2 inline-flex items-center gap-1 text-[0.6875rem] text-dim">
                      <Lock className="size-2.5" /> sabit
                    </span>
                  )}
                </div>
              </div>
              {!locked && (
                <div className="flex gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-xs"
                    disabled={index <= 1}
                    onClick={() => move(index, -1)}
                  >
                    <ArrowUp className="size-3.5" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-xs"
                    disabled={index >= categories.length - 1}
                    onClick={() => move(index, 1)}
                  >
                    <ArrowDown className="size-3.5" />
                  </Button>
                </div>
              )}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label>Ad</Label>
                <Input
                  value={category.name}
                  onChange={(e) => update(category.id, { name: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Üst etiket (eyebrow)</Label>
                <Input
                  value={category.eyebrow}
                  onChange={(e) => update(category.id, { eyebrow: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <Label>Açıklama</Label>
                <Textarea
                  rows={2}
                  value={category.description}
                  onChange={(e) => update(category.id, { description: e.target.value })}
                />
              </div>
            </div>
          </div>
        )
      })}

      <div>
        <Button type="button" onClick={handleSave} disabled={saving}>
          {saving ? <Loader2 className="mr-1.5 size-4 animate-spin" /> : <Save className="mr-1.5 size-4" />}
          Kaydet
        </Button>
      </div>
    </div>
  )
}
