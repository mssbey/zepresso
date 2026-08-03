"use client";

import { motion, useReducedMotion } from "framer-motion";

import { FavoriteButton } from "@/components/favorite-button";
import { ProductImage } from "@/components/product-image";
import { ProductBadge } from "@/components/product-tags";
import { categories } from "@/data/categories";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/menu";

const featuredCategory = categories[0];

/**
 * "Baristanın Seçimleri" — yatay kaydırılabilir, tam boy fotoğraflı kartlar.
 *
 * Mobilde kart genişliği %76 tutulur; sonraki kartın bir bölümü görünür
 * kalarak rayın kaydırılabildiği ilk bakışta anlaşılır.
 */
export function FeaturedCarousel({
  products,
  onOpen,
}: {
  products: Product[];
  onOpen: (id: string) => void;
}) {
  const reduced = useReducedMotion();

  return (
    <section
      id={featuredCategory.id}
      aria-labelledby={`${featuredCategory.id}-title`}
      className="relative py-9 sm:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">{featuredCategory.eyebrow}</p>
        <h2
          id={`${featuredCategory.id}-title`}
          className="mt-2 text-[clamp(1.55rem,5.6vw,2.2rem)] leading-tight text-ink"
        >
          Baristanın Seçimleri
        </h2>
        <p className="mt-2 max-w-[52ch] text-[0.85rem] leading-relaxed text-dim">
          {featuredCategory.description}
        </p>
      </div>

      <div
        className="no-scrollbar snap-rail mt-6 flex gap-3.5 overflow-x-auto px-4 pb-3 sm:gap-4 sm:px-6"
        role="list"
        aria-label="Öne çıkan ürünler"
      >
        {/* Geniş ekranda içerik ortalansın diye esnek boşluk */}
        <div className="hidden shrink-0 xl:block xl:w-[max(0px,calc((100vw-72rem)/2))]" />

        {products.map((product, index) => (
          <FeaturedCard
            key={product.id}
            product={product}
            index={index}
            onOpen={onOpen}
            reduced={Boolean(reduced)}
          />
        ))}

        <div className="w-1 shrink-0 sm:w-3" aria-hidden="true" />
      </div>
    </section>
  );
}

function FeaturedCard({
  product,
  index,
  onOpen,
  reduced,
}: {
  product: Product;
  index: number;
  onOpen: (id: string) => void;
  reduced: boolean;
}) {
  return (
    <motion.article
      role="listitem"
      initial={reduced ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index, 4) * 0.07,
      }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      className={cn(
        "group relative isolate flex aspect-[3/4] w-[76vw] max-w-[300px] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[1.75rem]",
        "shadow-[0_24px_50px_-28px_rgba(0,0,0,1)] ring-1 ring-inset ring-white/8 transition-shadow duration-500",
        "hover:ring-gold/25 sm:w-[268px] lg:w-[292px]",
      )}
    >
      <ProductImage
        src={product.image}
        alt={product.name}
        photoId={product.id}
        priority={index < 2}
        overlay="none"
        sizes="(min-width: 1024px) 292px, (min-width: 640px) 268px, 76vw"
        className="absolute inset-0 size-full"
        imageClassName="transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
      />

      {/* Yazının okunmasını sağlayan alt karartma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(7,9,11,0.97)_0%,rgba(7,9,11,0.82)_26%,rgba(7,9,11,0.12)_58%,rgba(7,9,11,0.45)_100%)]"
      />

      {/* Görsel üzerinde yavaşça geçen ışık */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent_38%,rgba(228,180,106,0.18)_50%,transparent_62%)] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-full"
      />

      {product.badge && (
        <ProductBadge id={product.badge} className="absolute top-3.5 left-3.5" />
      )}

      <div className="relative flex flex-col gap-1.5 p-4 sm:p-[1.15rem]">
        <h3 className="font-heading text-[1.12rem] leading-snug font-medium text-ink">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-[0.775rem] leading-relaxed text-ink/60">
          {product.summary}
        </p>
        <div className="mt-1.5 flex items-center justify-between gap-3">
          <span className="font-heading text-[1.15rem] leading-none font-semibold text-gold tabular-nums">
            {formatPrice(product.price)}
          </span>
          {product.serving && (
            <span className="rounded-full bg-white/8 px-2.5 py-1 text-[0.66rem] leading-none text-ink/70 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
              {product.serving}
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => onOpen(product.id)}
        aria-label={`${product.name} — detayları gör`}
        className="absolute inset-0 z-10 rounded-[1.75rem]"
      />

      <FavoriteButton
        productId={product.id}
        productName={product.name}
        className="absolute top-3 right-3 z-20 bg-[#0b0e11]/55 backdrop-blur-sm"
      />
    </motion.article>
  );
}
