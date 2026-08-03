"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";
import type { CategoryId } from "@/types/menu";

/**
 * Yapışkan kategori navigasyonu.
 *
 * Aktif kategori hem amber kapsül hem de raya oturan hareketli alt çizgiyle
 * gösterilir; iki öğe de `layoutId` ile bir konumdan diğerine akar.
 * Kaydırma sırasında aktif kategori değiştiğinde ilgili sekme yatay olarak
 * görünür alana getirilir — sayfa dikey olarak oynamaz.
 */
export function CategoryRail({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: CategoryId) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef(new Map<string, HTMLButtonElement>());
  const reduced = useReducedMotion();

  useEffect(() => {
    const scroller = scrollerRef.current;
    const item = itemRefs.current.get(activeId);
    if (!scroller || !item) return;

    const target =
      item.offsetLeft - scroller.clientWidth / 2 + item.offsetWidth / 2;
    scroller.scrollTo({
      left: Math.max(0, target),
      behavior: reduced ? "auto" : "smooth",
    });
  }, [activeId, reduced]);

  return (
    <nav
      aria-label="Menü kategorileri"
      className="sticky top-[var(--z-sticky-top)] z-30 w-full border-b border-white/6 glass-strong"
      style={{ height: "var(--z-rail-h)" }}
    >
      <div
        ref={scrollerRef}
        className="no-scrollbar fade-edges-x mx-auto flex h-full max-w-6xl items-center gap-1 overflow-x-auto px-4 sm:px-6"
      >
        {categories.map((category) => {
          const active = category.id === activeId;
          return (
            <button
              key={category.id}
              ref={(node) => {
                if (node) itemRefs.current.set(category.id, node);
                else itemRefs.current.delete(category.id);
              }}
              type="button"
              onClick={() => onSelect(category.id)}
              aria-current={active ? "true" : undefined}
              className={cn(
                "relative shrink-0 rounded-full px-3.5 py-2 text-[0.8125rem] font-semibold whitespace-nowrap transition-colors duration-300",
                active ? "text-[#14100a]" : "text-dim hover:text-ink",
              )}
            >
              {active && (
                <motion.span
                  layoutId="category-capsule"
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 420, damping: 36 }
                  }
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-b from-[#f0cf95] to-gold shadow-[0_10px_22px_-12px_rgba(228,180,106,0.9)]"
                />
              )}
              <span className="relative">{category.name}</span>

              {active && (
                <motion.span
                  layoutId="category-underline"
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 420, damping: 36 }
                  }
                  className="absolute inset-x-3 -bottom-[9px] h-[2px] rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
