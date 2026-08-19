"use client"

import { useState, type ReactNode } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { Clock, Loader2, MapPin, MessageSquareText, Plus, Save, Trash2, Wifi } from "lucide-react"
import type { z } from "zod"

import type { VenueInfo } from "@/types/menu"
import { venueSchema } from "@/lib/admin/schemas"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader } from "@/components/admin/section-header"
import { toast } from "@/components/ui/toast"

type FormValues = z.infer<typeof venueSchema>

export function VenueForm({ initialVenue }: { initialVenue: VenueInfo }) {
  const [saving, setSaving] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(venueSchema),
    defaultValues: initialVenue,
  })
  const { fields, append, remove } = useFieldArray({ control, name: "hours" })

  async function onSubmit(values: FormValues) {
    setSaving(true)
    try {
      const res = await fetch("/api/admin/venue", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (!res.ok) {
        toast.error(data.error ?? "Kaydedilemedi.")
        return
      }
      toast.success("Mekan bilgisi güncellendi.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="surface-card grid gap-4 rounded-2xl p-5 sm:grid-cols-2">
        <SectionHeader icon={MapPin} title="Genel bilgiler" className="sm:col-span-2" />
        <Field label="İsim" error={errors.name?.message}>
          <Input {...register("name")} />
        </Field>
        <Field label="Slogan" error={errors.tagline?.message}>
          <Input {...register("tagline")} />
        </Field>
        <Field label="Semt" error={errors.district?.message}>
          <Input {...register("district")} />
        </Field>
        <Field label="Şehir" error={errors.city?.message}>
          <Input {...register("city")} />
        </Field>
        <Field label="Adres" error={errors.address?.message} className="sm:col-span-2">
          <Textarea rows={2} {...register("address")} />
        </Field>
        <Field label="Telefon (görünen)" error={errors.phone?.message}>
          <Input {...register("phone")} />
        </Field>
        <Field label="Telefon (tel: linki)" error={errors.phoneHref?.message}>
          <Input {...register("phoneHref")} placeholder="tel:+90..." />
        </Field>
        <Field label="Instagram (@kullaniciadi)" error={errors.instagram?.message}>
          <Input {...register("instagram")} />
        </Field>
        <Field label="Instagram URL" error={errors.instagramUrl?.message}>
          <Input {...register("instagramUrl")} />
        </Field>
        <Field label="Google Maps URL" error={errors.mapsUrl?.message} className="sm:col-span-2">
          <Input {...register("mapsUrl")} />
        </Field>
      </div>

      <div className="surface-card grid gap-4 rounded-2xl p-5 sm:grid-cols-2">
        <SectionHeader icon={Wifi} title="Wi-Fi & durum" className="sm:col-span-2" />
        <Field label="Wi-Fi ağ adı" error={errors.wifi?.network?.message}>
          <Input {...register("wifi.network")} />
        </Field>
        <Field label="Wi-Fi şifresi" error={errors.wifi?.password?.message}>
          <Input {...register("wifi.password")} />
        </Field>
        <Field label="Bugünkü kapanış saati" error={errors.todayClosing?.message}>
          <Input {...register("todayClosing")} placeholder="23:30" />
        </Field>
      </div>

      <div className="surface-card rounded-2xl p-5">
        <SectionHeader icon={Clock} title="Çalışma saatleri" />
        <div className="mt-4 flex flex-col gap-2">
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2">
              <Input
                {...register(`hours.${index}.days` as const)}
                placeholder="Pazartesi – Perşembe"
                className="flex-1"
              />
              <Input {...register(`hours.${index}.open` as const)} placeholder="08:00" className="w-24" />
              <span className="text-dim">–</span>
              <Input {...register(`hours.${index}.close` as const)} placeholder="23:30" className="w-24" />
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="hover:text-destructive"
                onClick={() => remove(index)}
              >
                <Trash2 className="size-3.5" />
              </Button>
            </div>
          ))}
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-3"
          onClick={() => append({ days: "", open: "", close: "" })}
        >
          <Plus className="size-3.5" /> Satır ekle
        </Button>
      </div>

      <div className="surface-card grid gap-4 rounded-2xl p-5">
        <SectionHeader icon={MessageSquareText} title="Notlar" />
        <Field label="Alerjen uyarısı" error={errors.allergenNotice?.message}>
          <Textarea rows={3} {...register("allergenNotice")} />
        </Field>
        <Field label="Servis notu" error={errors.serviceNote?.message}>
          <Textarea rows={3} {...register("serviceNote")} />
        </Field>
      </div>

      <div>
        <Button type="submit" disabled={saving}>
          {saving ? <Loader2 className="mr-1.5 size-4 animate-spin" /> : <Save className="mr-1.5 size-4" />}
          Kaydet
        </Button>
      </div>
    </form>
  )
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string
  error?: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={className ? `flex flex-col gap-1.5 ${className}` : "flex flex-col gap-1.5"}>
      <Label>{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
