"use client"

import { useState } from "react"
import { RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export function RegenerateArtButton({ productId }: { productId: string }) {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/products/${productId}/regenerate-art`, {
        method: "POST",
      })
      const data = await res.json()
      if (!res.ok) {
        toast.error(data.error ?? "Oluşturulamadı.")
        return
      }
      toast.success("SVG sanatı yeniden oluşturuldu.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button type="button" variant="outline" size="sm" onClick={handleClick} disabled={loading}>
      <RefreshCw className={loading ? "size-3.5 animate-spin" : "size-3.5"} />
      SVG sanatını yeniden oluştur
    </Button>
  )
}
