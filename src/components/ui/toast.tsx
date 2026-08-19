"use client"

import * as React from "react"
import { CheckCircle2, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

type ToastVariant = "success" | "error"
interface ToastItem {
  id: number
  message: string
  variant: ToastVariant
}

let toasts: ToastItem[] = []
let nextId = 1
const listeners = new Set<() => void>()

function emit() {
  for (const listener of listeners) listener()
}

function push(message: string, variant: ToastVariant) {
  const id = nextId++
  toasts = [...toasts, { id, message, variant }]
  emit()
  setTimeout(() => {
    toasts = toasts.filter((item) => item.id !== id)
    emit()
  }, 4000)
}

export const toast = {
  success: (message: string) => push(message, "success"),
  error: (message: string) => push(message, "error"),
}

function useToasts() {
  return React.useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    () => toasts,
    () => toasts
  )
}

export function Toaster() {
  const items = useToasts()

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[100] flex flex-col items-center gap-2 px-4 sm:items-end sm:right-4 sm:inset-x-auto">
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "surface-card pointer-events-auto flex w-full max-w-sm items-start gap-2 rounded-xl px-3.5 py-3 text-sm text-ink shadow-lg ring-1 ring-inset",
            item.variant === "success" ? "ring-gold/25" : "ring-destructive/40"
          )}
        >
          {item.variant === "success" ? (
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
          ) : (
            <XCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
          )}
          <span className="leading-snug">{item.message}</span>
        </div>
      ))}
    </div>
  )
}
