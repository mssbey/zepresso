"use client"

import { useState, type Dispatch, type SetStateAction } from "react"
import { Plus, Save, Tags as TagsIcon, Ticket, Trash2 } from "lucide-react"

import type { Badge as BadgeType, Tag } from "@/types/menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ConfirmDialog } from "@/components/admin/confirm-dialog"
import { SectionHeader } from "@/components/admin/section-header"
import { toast } from "@/components/ui/toast"

const TONES: Tag["tone"][] = ["leaf", "ember", "ice", "amber", "copper"]

const TONE_COLORS: Record<Tag["tone"], string> = {
  leaf: "#9CC07A",
  ember: "#E08A5A",
  ice: "#8FB6D6",
  amber: "#E4B46A",
  copper: "#C47A45",
}

export function TagsBadgesEditor({
  initialTags,
  initialBadges,
}: {
  initialTags: Record<string, Tag>
  initialBadges: Record<string, BadgeType>
}) {
  const [tags, setTags] = useState(initialTags)
  const [badges, setBadges] = useState(initialBadges)

  return (
    <div className="flex flex-col gap-10">
      <TagSection tags={tags} setTags={setTags} />
      <BadgeSection badges={badges} setBadges={setBadges} />
    </div>
  )
}

function TagSection({
  tags,
  setTags,
}: {
  tags: Record<string, Tag>
  setTags: Dispatch<SetStateAction<Record<string, Tag>>>
}) {
  const [newLabel, setNewLabel] = useState("")
  const [newTone, setNewTone] = useState<Tag["tone"]>("amber")
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [savingId, setSavingId] = useState<string | null>(null)

  async function saveTag(tag: Tag, isNew: boolean) {
    setSavingId(tag.id || "new")
    try {
      const res = await fetch(isNew ? "/api/admin/tags" : `/api/admin/tags/${tag.id}`, {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tag),
      })
      const data = await res.json()
      if (!res.ok) {
        toast.error(data.error ?? "Kaydedilemedi.")
        return
      }
      setTags((prev) => ({ ...prev, [data.id]: data }))
      if (isNew) setNewLabel("")
      toast.success("Etiket kaydedildi.")
    } finally {
      setSavingId(null)
    }
  }

  async function handleDelete() {
    if (!deleteId) return
    const res = await fetch(`/api/admin/tags/${deleteId}`, { method: "DELETE" })
    if (!res.ok) {
      toast.error("Silinemedi.")
      return
    }
    setTags((prev) => {
      const next = { ...prev }
      delete next[deleteId]
      return next
    })
    toast.success("Etiket silindi.")
  }

  return (
    <section className="surface-card rounded-2xl p-5">
      <SectionHeader icon={TagsIcon} title="Etiketler" />
      <p className="mt-1.5 ml-12 text-sm text-dim">Ürün kartlarında küçük rozet olarak görünür.</p>

      <div className="mt-4 flex flex-col gap-2.5">
        {Object.values(tags).map((tag) => (
          <div
            key={tag.id}
            className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-3 ring-1 ring-inset ring-white/6"
          >
            <span
              className="size-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: TONE_COLORS[tag.tone] }}
              aria-hidden="true"
            />
            <Input
              value={tag.label}
              onChange={(e) => setTags((prev) => ({ ...prev, [tag.id]: { ...tag, label: e.target.value } }))}
              className="flex-1 border-transparent bg-transparent"
            />
            <Select
              value={tag.tone}
              onValueChange={(v) =>
                setTags((prev) => ({ ...prev, [tag.id]: { ...tag, tone: v as Tag["tone"] } }))
              }
            >
              <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
              <SelectContent>
                {TONES.map((tone) => (
                  <SelectItem key={tone} value={tone}>{tone}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={savingId === tag.id}
              onClick={() => saveTag(tag, false)}
            >
              <Save className="size-3.5" />
            </Button>
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              className="hover:text-destructive"
              onClick={() => setDeleteId(tag.id)}
            >
              <Trash2 className="size-3.5" />
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-3 rounded-xl border border-dashed border-white/15 p-3">
        <Input
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          placeholder="Yeni etiket adı"
          className="flex-1"
        />
        <Select value={newTone} onValueChange={(v) => setNewTone(v as Tag["tone"])}>
          <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
          <SelectContent>
            {TONES.map((tone) => (
              <SelectItem key={tone} value={tone}>{tone}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          type="button"
          size="sm"
          disabled={!newLabel.trim() || savingId === "new"}
          onClick={() => saveTag({ id: "", label: newLabel.trim(), tone: newTone }, true)}
        >
          <Plus className="size-3.5" /> Ekle
        </Button>
      </div>

      <ConfirmDialog
        open={!!deleteId}
        onOpenChange={(open) => !open && setDeleteId(null)}
        title="Etiketi sil"
        description="Bu etiket tüm ürünlerden de kaldırılacak."
        onConfirm={handleDelete}
      />
    </section>
  )
}

function BadgeSection({
  badges,
  setBadges,
}: {
  badges: Record<string, BadgeType>
  setBadges: Dispatch<SetStateAction<Record<string, BadgeType>>>
}) {
  const [newLabel, setNewLabel] = useState("")
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [savingId, setSavingId] = useState<string | null>(null)

  async function saveBadge(badge: BadgeType, isNew: boolean) {
    setSavingId(badge.id || "new")
    try {
      const res = await fetch(isNew ? "/api/admin/badges" : `/api/admin/badges/${badge.id}`, {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(badge),
      })
      const data = await res.json()
      if (!res.ok) {
        toast.error(data.error ?? "Kaydedilemedi.")
        return
      }
      setBadges((prev) => ({ ...prev, [data.id]: data }))
      if (isNew) setNewLabel("")
      toast.success("Rozet kaydedildi.")
    } finally {
      setSavingId(null)
    }
  }

  async function handleDelete() {
    if (!deleteId) return
    const res = await fetch(`/api/admin/badges/${deleteId}`, { method: "DELETE" })
    if (!res.ok) {
      toast.error("Silinemedi.")
      return
    }
    setBadges((prev) => {
      const next = { ...prev }
      delete next[deleteId]
      return next
    })
    toast.success("Rozet silindi.")
  }

  return (
    <section className="surface-card rounded-2xl p-5">
      <SectionHeader icon={Ticket} title="Rozetler" />
      <p className="mt-1.5 ml-12 text-sm text-dim">Öne çıkan kartlarda gösterilen tekil rozet.</p>

      <div className="mt-4 flex flex-col gap-2.5">
        {Object.values(badges).map((badge) => (
          <div
            key={badge.id}
            className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-3 ring-1 ring-inset ring-white/6"
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-gold/12 text-gold">
              <Ticket className="size-3.5" strokeWidth={2} />
            </span>
            <Input
              value={badge.label}
              onChange={(e) =>
                setBadges((prev) => ({ ...prev, [badge.id]: { ...badge, label: e.target.value } }))
              }
              className="flex-1 border-transparent bg-transparent"
            />
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={savingId === badge.id}
              onClick={() => saveBadge(badge, false)}
            >
              <Save className="size-3.5" />
            </Button>
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              className="hover:text-destructive"
              onClick={() => setDeleteId(badge.id)}
            >
              <Trash2 className="size-3.5" />
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-3 rounded-xl border border-dashed border-white/15 p-3">
        <Input
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          placeholder="Yeni rozet adı"
          className="flex-1"
        />
        <Button
          type="button"
          size="sm"
          disabled={!newLabel.trim() || savingId === "new"}
          onClick={() => saveBadge({ id: "", label: newLabel.trim() }, true)}
        >
          <Plus className="size-3.5" /> Ekle
        </Button>
      </div>

      <ConfirmDialog
        open={!!deleteId}
        onOpenChange={(open) => !open && setDeleteId(null)}
        title="Rozeti sil"
        description="Bu rozet tüm ürünlerden de kaldırılacak."
        onConfirm={handleDelete}
      />
    </section>
  )
}
