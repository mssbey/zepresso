"use client";

import { Flame, Leaf, Snowflake, Sparkles, Star, Tag } from "lucide-react";

import { useMenuContent } from "@/components/menu-content";
import { cn } from "@/lib/utils";
import type { BadgeId, TagId } from "@/types/menu";

const toneStyles: Record<string, string> = {
  leaf: "text-[#9CC07A] ring-[#9CC07A]/22 bg-[#9CC07A]/8",
  ember: "text-[#E08A5A] ring-[#E08A5A]/22 bg-[#E08A5A]/8",
  ice: "text-[#8FB6D6] ring-[#8FB6D6]/22 bg-[#8FB6D6]/8",
  amber: "text-gold ring-gold/25 bg-gold/8",
  copper: "text-espresso ring-espresso/25 bg-espresso/8",
};

const tagIcons: Record<string, typeof Leaf> = {
  vegan: Leaf,
  acili: Flame,
  buzlu: Snowflake,
  yeni: Sparkles,
  "cok-sevilen": Star,
};

export function TagPill({ id, className }: { id: TagId; className?: string }) {
  const { tags } = useMenuContent();
  const tag = tags[id];
  if (!tag) return null;
  const Icon = tagIcons[id] ?? Tag;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[0.625rem] leading-none font-semibold tracking-[0.06em] whitespace-nowrap ring-1 ring-inset",
        toneStyles[tag.tone] ?? toneStyles.amber,
        className,
      )}
    >
      <Icon className="size-2.5" strokeWidth={2.4} aria-hidden="true" />
      {tag.label}
    </span>
  );
}

export function TagRow({ ids, className }: { ids: TagId[]; className?: string }) {
  if (ids.length === 0) return null;
  return (
    <span className={cn("flex flex-wrap items-center gap-1", className)}>
      {ids.map((id) => (
        <TagPill key={id} id={id} />
      ))}
    </span>
  );
}

const badgeStyles: Record<string, string> = {
  "cok-sevilen":
    "text-[#14100a] bg-gradient-to-r from-gold to-[#d59a4f] shadow-[0_6px_18px_-8px_rgba(228,180,106,0.9)]",
  yeni: "text-ink bg-espresso/85 shadow-[0_6px_18px_-8px_rgba(196,122,69,0.9)]",
  "zepresso-imzasi":
    "text-gold bg-[#0d1013]/80 ring-1 ring-inset ring-gold/35 backdrop-blur-sm",
};

const fallbackBadgeStyle =
  "text-gold bg-[#0d1013]/80 ring-1 ring-inset ring-gold/35 backdrop-blur-sm";

export function ProductBadge({ id, className }: { id: BadgeId; className?: string }) {
  const { badges } = useMenuContent();
  const badge = badges[id];
  if (!badge) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.625rem] leading-none font-bold tracking-[0.1em] uppercase",
        badgeStyles[id] ?? fallbackBadgeStyle,
        className,
      )}
    >
      {id === "zepresso-imzasi" && (
        <Sparkles className="size-2.5" strokeWidth={2.6} aria-hidden="true" />
      )}
      {badge.label}
    </span>
  );
}
