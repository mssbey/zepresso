"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ProductCard } from "@/components/product-card";
import type { Category, Product } from "@/types/menu";

/**
 * Bir kategoriye ait bölüm: başlık, kısa açıklama ve ürün listesi.
 * Mobilde tek sütun, tablet ve üzerinde iki sütun.
 */
export function MenuSection({
  category,
  products,
  onOpen,
}: {
  category: Category;
  products: Product[];
  onOpen: (id: string) => void;
}) {
  const reduced = useReducedMotion();

  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      className="mx-auto w-full max-w-6xl px-4 py-9 sm:px-6 sm:py-12"
    >
      <motion.header
        initial={reduced ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <p className="eyebrow">{category.eyebrow}</p>
        <div className="mt-2 flex items-center gap-3">
          <h2
            id={`${category.id}-title`}
            className="text-[clamp(1.55rem,5.6vw,2.2rem)] leading-tight text-ink"
          >
            {category.name}
          </h2>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-gradient-to-r from-gold/25 via-white/8 to-transparent"
          />
          <span className="shrink-0 rounded-full bg-white/4 px-2.5 py-1 text-[0.68rem] leading-none text-dim/80 ring-1 ring-inset ring-white/8 tabular-nums">
            {products.length} ürün
          </span>
        </div>
        <p className="mt-2.5 max-w-[54ch] text-[0.85rem] leading-relaxed text-dim">
          {category.description}
        </p>
      </motion.header>

      <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-2">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}
