"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { ChevronDown, FileText, ImageIcon, Loader2, Sparkles, Tags as TagsIcon } from "lucide-react"
import { z } from "zod"

import type { Badge as BadgeType, Category, Product, Tag } from "@/types/menu"
import { cn } from "@/lib/utils"
import { slugify } from "@/lib/admin/slug"
import { productSchema } from "@/lib/admin/schemas"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChipInput } from "@/components/admin/chip-input"
import { ImageUploader } from "@/components/admin/image-uploader"
import { SectionHeader } from "@/components/admin/section-header"
import { toast } from "@/components/ui/toast"

const formSchema = productSchema.omit({ id: true })
type FormValues = z.infer<typeof formSchema>

const VESSEL_OPTIONS: { value: FormValues["art"]["vessel"]; label: string }[] = [
  { value: "espresso", label: "Espresso fincanı" },
  { value: "cappuccinoCup", label: "Cappuccino fincanı" },
  { value: "mug", label: "Kupa" },
  { value: "latteGlass", label: "Latte bardağı" },
  { value: "icedGlass", label: "Buzlu bardak" },
  { value: "teaGlass", label: "Çay bardağı" },
  { value: "teacup", label: "Çay fincanı" },
  { value: "cheesecakeSlice", label: "Cheesecake dilimi" },
  { value: "cakeSlice", label: "Pasta dilimi" },
  { value: "plated", label: "Tabak" },
  { value: "sandwich", label: "Sandviç" },
  { value: "croissant", label: "Kruvasan" },
  { value: "bowl", label: "Kase" },
]

const GARNISH_OPTIONS: { value: NonNullable<FormValues["art"]["garnish"]>; label: string }[] = [
  { value: "none", label: "Yok" },
  { value: "beans", label: "Kahve çekirdeği" },
  { value: "cocoa", label: "Kakao" },
  { value: "cinnamon", label: "Tarçın" },
  { value: "mint", label: "Nane" },
  { value: "citrus", label: "Turunçgil" },
  { value: "cream", label: "Krema" },
  { value: "pistachio", label: "Antep fıstığı" },
  { value: "berry", label: "Kırmızı meyve" },
]

function emptyDefaults(): FormValues {
  return {
    name: "",
    categoryId: "sicak-kahveler",
    price: 0,
    summary: "",
    description: "",
    ingredients: [],
    allergens: [],
    calories: undefined,
    tags: [],
    badge: undefined,
    featured: false,
    serving: "",
    image: "",
    art: {
      vessel: "cappuccinoCup",
      liquid: ["#C08A55", "#7A4A25"],
      crema: "#E8D2AE",
      light: "#E4B46A",
      lightFrom: "right",
      steam: true,
      garnish: "none",
      seed: 0.5,
    },
  }
}

export function ProductForm({
  mode,
  product,
  categories,
  tags,
  badges,
}: {
  mode: "create" | "edit"
  product?: Product
  categories: Category[]
  tags: Record<string, Tag>
  badges: Record<string, BadgeType>
}) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [artOpen, setArtOpen] = useState(false)
  const [manualId, setManualId] = useState(false)
  const [id, setId] = useState(product?.id ?? "")

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: product
      ? { ...product, calories: product.calories, badge: product.badge }
      : emptyDefaults(),
  })

  const name = watch("name")
  const derivedId = useMemo(() => slugify(name || ""), [name])
  const effectiveId = mode === "edit" ? product!.id : manualId ? id : derivedId

  const categoryOptions = categories.filter((c) => c.id !== "one-cikanlar")
  const tagList = Object.values(tags)
  const badgeList = Object.values(badges)

  async function onSubmit(values: FormValues) {
    setSubmitting(true)
    try {
      if (mode === "create") {
        const res = await fetch("/api/admin/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, id: manualId ? id : undefined }),
        })
        const data = await res.json()
        if (!res.ok) {
          toast.error(data.error ?? "Oluşturulamadı.")
          return
        }
        toast.success(`"${data.name}" oluşturuldu.`)
        router.push(`/admin/products/${data.id}`)
        router.refresh()
      } else {
        const res = await fetch(`/api/admin/products/${product!.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, id: product!.id }),
        })
        const data = await res.json()
        if (!res.ok) {
          toast.error(data.error ?? "Güncellenemedi.")
          return
        }
        toast.success("Değişiklikler kaydedildi.")
        router.refresh()
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="surface-card grid gap-5 rounded-2xl p-5 sm:grid-cols-2">
        <SectionHeader icon={FileText} title="Temel bilgiler" className="sm:col-span-2" />
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor="name">Ürün adı</Label>
          <Input id="name" {...register("name")} placeholder="Zepresso Signature Latte" />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label>Kimlik (URL / dosya adı)</Label>
          {mode === "edit" ? (
            <Input value={effectiveId} disabled />
          ) : (
            <div className="flex items-center gap-2">
              <Input
                value={effectiveId}
                onChange={(e) => {
                  setManualId(true)
                  setId(slugify(e.target.value))
                }}
                placeholder="otomatik-oluşturulur"
              />
            </div>
          )}
          <p className="text-xs text-dim">
            {mode === "edit"
              ? "Oluşturulduktan sonra değiştirilemez."
              : "Boş bırakılırsa isimden otomatik üretilir."}
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Kategori</Label>
          <Controller
            control={control}
            name="categoryId"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="price">Fiyat (₺)</Label>
          <Input id="price" type="number" step="1" {...register("price", { valueAsNumber: true })} />
          {errors.price && <p className="text-xs text-destructive">{errors.price.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor="summary">Kısa tanım</Label>
          <Input id="summary" {...register("summary")} />
          {errors.summary && <p className="text-xs text-destructive">{errors.summary.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label htmlFor="description">Açıklama</Label>
          <Textarea id="description" rows={4} {...register("description")} />
          {errors.description && (
            <p className="text-xs text-destructive">{errors.description.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="calories">Kalori (opsiyonel)</Label>
          <Input
            id="calories"
            type="number"
            {...register("calories", { setValueAs: (v) => (v === "" ? undefined : Number(v)) })}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="serving">Porsiyon (opsiyonel)</Label>
          <Input id="serving" placeholder="330 ml" {...register("serving")} />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label>Malzemeler</Label>
          <Controller
            control={control}
            name="ingredients"
            render={({ field }) => (
              <ChipInput value={field.value} onChange={field.onChange} placeholder="Enter ile ekle" />
            )}
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <Label>Alerjenler</Label>
          <Controller
            control={control}
            name="allergens"
            render={({ field }) => (
              <ChipInput value={field.value} onChange={field.onChange} placeholder="Enter ile ekle" />
            )}
          />
        </div>
      </div>

      <div className="surface-card grid gap-5 rounded-2xl p-5 sm:grid-cols-2">
        <SectionHeader icon={TagsIcon} title="Etiket, rozet ve öne çıkarma" className="sm:col-span-2" />
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label>Etiketler</Label>
          <Controller
            control={control}
            name="tags"
            render={({ field }) => (
              <div className="flex flex-wrap gap-2">
                {tagList.map((tag) => {
                  const active = field.value.includes(tag.id)
                  return (
                    <button
                      key={tag.id}
                      type="button"
                      onClick={() =>
                        field.onChange(
                          active
                            ? field.value.filter((t) => t !== tag.id)
                            : [...field.value, tag.id],
                        )
                      }
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset transition-colors",
                        active
                          ? "bg-gold/15 text-gold ring-gold/30"
                          : "text-dim ring-line hover:text-ink",
                      )}
                    >
                      {tag.label}
                    </button>
                  )
                })}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Rozet</Label>
          <Controller
            control={control}
            name="badge"
            render={({ field }) => (
              <Select
                value={field.value ?? "none"}
                onValueChange={(v) => field.onChange(v === "none" ? undefined : v)}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Yok</SelectItem>
                  {badgeList.map((b) => (
                    <SelectItem key={b.id} value={b.id}>{b.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="flex items-center justify-between gap-3 rounded-lg border border-line px-3 py-2">
          <div>
            <Label htmlFor="featured">Öne çıkan</Label>
            <p className="text-xs text-dim">Baristanın Seçimleri&apos;nde göster</p>
          </div>
          <Controller
            control={control}
            name="featured"
            render={({ field }) => (
              <Switch id="featured" checked={!!field.value} onCheckedChange={field.onChange} />
            )}
          />
        </div>
      </div>

      <div className="surface-card rounded-2xl p-5">
        <SectionHeader icon={ImageIcon} title="Görsel" />
        <div className="mt-3">
          <Controller
            control={control}
            name="image"
            render={({ field }) => (
              <ImageUploader productId={effectiveId} value={field.value} onChange={field.onChange} />
            )}
          />
        </div>
      </div>

      <div className="surface-card rounded-2xl p-5">
        <button
          type="button"
          onClick={() => setArtOpen((v) => !v)}
          className="flex w-full items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 text-gold ring-1 ring-inset ring-gold/25">
              <Sparkles className="size-4" strokeWidth={1.9} />
            </span>
            <div>
              <span className="font-heading text-base font-medium text-ink">Gelişmiş: Sanat tarifi</span>
              <p className="text-xs text-dim">
                Fotoğraf yoksa yedek olarak kullanılan üretilmiş SVG görselinin tarifi.
              </p>
            </div>
          </div>
          <ChevronDown className={cn("size-4 shrink-0 text-dim transition-transform", artOpen && "rotate-180")} />
        </button>

        {artOpen && (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label>Kap</Label>
              <Controller
                control={control}
                name="art.vessel"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {VESSEL_OPTIONS.map((v) => (
                        <SelectItem key={v.value} value={v.value}>{v.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label>Işık yönü</Label>
              <Controller
                control={control}
                name="art.lightFrom"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="left">Sol</SelectItem>
                      <SelectItem value="right">Sağ</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <ColorField label="Sıvı üst renk" name="art.liquid.0" control={control} />
            <ColorField label="Sıvı alt renk" name="art.liquid.1" control={control} />
            <ColorField label="Köpük/krema (opsiyonel)" name="art.crema" control={control} />
            <ColorField label="Işık rengi" name="art.light" control={control} />

            <div className="flex flex-col gap-1.5">
              <Label>Süsleme</Label>
              <Controller
                control={control}
                name="art.garnish"
                render={({ field }) => (
                  <Select value={field.value ?? "none"} onValueChange={field.onChange}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {GARNISH_OPTIONS.map((g) => (
                        <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="flex items-center justify-between gap-3 rounded-lg border border-line px-3 py-2">
              <Label htmlFor="steam">Buhar / parıltı</Label>
              <Controller
                control={control}
                name="art.steam"
                render={({ field }) => (
                  <Switch id="steam" checked={!!field.value} onCheckedChange={field.onChange} />
                )}
              />
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="seed">Varyasyon (0–1)</Label>
              <Input
                id="seed"
                type="number"
                min={0}
                max={1}
                step={0.01}
                {...register("art.seed", { valueAsNumber: true })}
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={submitting}>
          {submitting && <Loader2 className="mr-1.5 size-4 animate-spin" />}
          {mode === "create" ? "Ürünü oluştur" : "Değişiklikleri kaydet"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin/products")}>
          Vazgeç
        </Button>
      </div>
    </form>
  )
}

function ColorField({
  label,
  name,
  control,
}: {
  label: string
  name: "art.liquid.0" | "art.liquid.1" | "art.crema" | "art.light"
  control: ReturnType<typeof useForm<FormValues>>["control"]
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={field.value || "#000000"}
              onChange={(e) => field.onChange(e.target.value)}
              className="size-9 shrink-0 cursor-pointer rounded-md border border-input bg-transparent"
            />
            <Input
              value={field.value ?? ""}
              onChange={(e) => field.onChange(e.target.value)}
              placeholder="#C08A55"
            />
          </div>
        )}
      />
    </div>
  )
}
