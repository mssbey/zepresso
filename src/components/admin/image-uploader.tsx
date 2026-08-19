"use client"

import { useRef, useState } from "react"
import { ImagePlus, Loader2, UploadCloud } from "lucide-react"

import { cn } from "@/lib/utils"
import { toast } from "@/components/ui/toast"

export function ImageUploader({
  productId,
  value,
  onChange,
}: {
  productId: string
  value: string
  onChange: (path: string) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  async function upload(file: File) {
    if (!productId) {
      toast.error("Önce ürün kimliği (isim) girin.")
      return
    }
    setUploading(true)
    try {
      const form = new FormData()
      form.set("productId", productId)
      form.set("file", file)
      const res = await fetch("/api/admin/upload", { method: "POST", body: form })
      const data = await res.json()
      if (!res.ok) {
        toast.error(data.error ?? "Yükleme başarısız.")
        return
      }
      onChange(data.path)
      toast.success("Görsel yüklendi.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault()
        setDragOver(true)
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDragOver(false)
        const file = e.dataTransfer.files?.[0]
        if (file) void upload(file)
      }}
      className={cn(
        "relative flex aspect-video w-full max-w-xs items-center justify-center overflow-hidden rounded-xl border border-dashed border-input bg-input/5 transition-colors",
        dragOver && "border-gold bg-gold/5",
      )}
    >
      {value ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="" className="size-full object-cover" />
      ) : (
        <div className="flex flex-col items-center gap-1.5 text-dim">
          <ImagePlus className="size-6" />
          <span className="text-xs">Görsel yok</span>
        </div>
      )}

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="absolute inset-0 flex items-center justify-center gap-1.5 bg-black/0 text-xs font-medium text-transparent opacity-0 transition-all hover:bg-black/50 hover:text-ink hover:opacity-100"
      >
        {uploading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <UploadCloud className="size-4" />
        )}
        {uploading ? "Yükleniyor…" : "Görsel yükle / sürükle"}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) void upload(file)
          e.target.value = ""
        }}
      />
    </div>
  )
}
