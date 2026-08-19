import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function SectionHeader({
  icon: Icon,
  title,
  className,
}: {
  icon: LucideIcon
  title: string
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 text-gold ring-1 ring-inset ring-gold/25">
        <Icon className="size-4" strokeWidth={1.9} />
      </span>
      <span className="font-heading text-base font-medium text-ink">{title}</span>
    </div>
  )
}
