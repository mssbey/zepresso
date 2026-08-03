"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";

import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

/**
 * Favori kalbi. Kart tıklamasını tetiklemesin diye olayı durdurur.
 */
export function FavoriteButton({
  productId,
  productName,
  className,
  size = "md",
}: {
  productId: string;
  productName: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const { isFavorite, toggle } = useFavorites();
  const active = isFavorite(productId);
  const reduced = useReducedMotion();

  const dimensions = {
    sm: "size-8 [--icon:14px]",
    md: "size-9 [--icon:16px]",
    lg: "size-11 [--icon:19px]",
  }[size];

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={
        active
          ? `${productName} favorilerden çıkar`
          : `${productName} favorilere ekle`
      }
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        toggle(productId);
      }}
      className={cn(
        "relative grid shrink-0 place-items-center rounded-full ring-1 ring-inset transition-[color,background-color,box-shadow,transform] duration-300",
        "active:scale-90",
        active
          ? "bg-espresso/16 text-espresso ring-espresso/40"
          : "bg-white/4 text-dim ring-white/10 hover:bg-white/8 hover:text-ink",
        dimensions,
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={active ? "on" : "off"}
          initial={reduced ? false : { scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={reduced ? undefined : { scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", stiffness: 520, damping: 24 }}
          className="grid place-items-center"
        >
          <Heart
            style={{ width: "var(--icon)", height: "var(--icon)" }}
            strokeWidth={2.2}
            className={active ? "fill-espresso" : undefined}
            aria-hidden="true"
          />
        </motion.span>
      </AnimatePresence>

      {/* Favoriye eklendiğinde tek seferlik sıcak parlama */}
      {active && (
        <span className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_20px_-4px_rgba(196,122,69,0.7)]" />
      )}
    </button>
  );
}
