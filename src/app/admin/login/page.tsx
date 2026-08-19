"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? "Giriş başarısız.")
        return
      }
      const from = searchParams.get("from") ?? "/admin"
      router.push(from)
      router.refresh()
    } catch {
      setError("Sunucuya ulaşılamadı.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grain relative flex min-h-dvh items-center justify-center bg-void px-4">
      <form
        onSubmit={handleSubmit}
        className="surface-card relative w-full max-w-sm rounded-3xl p-8"
      >
        <div className="mb-6 flex flex-col items-center gap-3 text-center">
          <span className="grid size-11 place-items-center rounded-full bg-gold/10 text-gold ring-1 ring-inset ring-gold/25">
            <Lock className="size-5" strokeWidth={2} />
          </span>
          <div>
            <h1 className="font-heading text-lg font-medium text-ink">Zepresso Admin</h1>
            <p className="mt-1 text-sm text-dim">Menüyü yönetmek için giriş yapın.</p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="password">Şifre</Label>
          <Input
            id="password"
            type="password"
            autoFocus
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••"
          />
        </div>

        {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

        <Button type="submit" disabled={loading} className="mt-5 w-full">
          {loading ? "Giriş yapılıyor…" : "Giriş yap"}
        </Button>
      </form>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  )
}
