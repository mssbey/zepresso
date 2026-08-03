"use client";

import { motion, useReducedMotion } from "framer-motion";

import { FavoriteButton } from "@/components/favorite-button";
import { ProductImage } from "@/components/product-image";
import { TagRow } from "@/components/product-tags";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/menu";

/**
 * Menü listesinde kullanılan ürün satırı.
 *
 * Fotoğraf kartın sağ kenarına taşar; sol kenarı maskeyle söndüğü için
 * kart "içine resim konmuş kutu" gibi değil, tek parça bir yüzey gibi durur.
 *
 * Kartın tamamı tıklanabilir: içerik üzerine yayılmış görünmez bir düğme
 * detay panelini açar, favori kalbi onun üzerinde ayrı bir katmanda durur.
 * Böylece iç içe geçmiş düğme sorunu oluşmaz.
 */
export function ProductCard({
  product,
  index = 0,
  onOpen,
  className,
}: {
  product: Product;
  index?: number;
  onOpen: (id: string) => void;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index, 6) * 0.055,
      }}
      whileTap={reduced ? undefined : { scale: 0.985 }}
      className={cn(
        "group surface-card surface-card-hover relative isolate flex min-h-[136px] items-stretch overflow-hidden rounded-[1.35rem] sm:min-h-[148px]",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col p-3.5 pr-1 sm:p-4 sm:pr-2">
        {/* Favori kalbi fotoğrafın üzerinde durduğu için başlığa pay gerekmiyor */}
        <h3 className="font-heading text-[1rem] leading-snug font-medium text-ink sm:text-[1.08rem]">
          {product.name}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-[0.78rem] leading-relaxed text-dim sm:text-[0.82rem]">
          {product.summary}
        </p>

        <TagRow ids={product.tags} className="mt-2.5" />

        <div className="mt-auto flex items-baseline gap-2 pt-3">
          <span className="font-heading text-[1.05rem] leading-none font-semibold text-gold tabular-nums">
            {formatPrice(product.price)}
          </span>
          {product.serving && (
            <span className="text-[0.68rem] text-dim/70">
              <span aria-hidden="true" className="mr-2">
                ·
              </span>
              {product.serving}
            </span>
          )}
        </div>
      </div>

      {/* Sağ kenara taşan fotoğraf paneli */}
      <div className="relative w-[124px] shrink-0 self-stretch sm:w-[148px]">
        <ProductImage
          src={product.image}
          alt={product.name}
          photoId={product.id}
          overlay="none"
          sizes="(min-width: 640px) 148px, 124px"
          className={cn(
            "absolute inset-0 size-full",
            /* Sol kenar yumuşayarak kart yüzeyine karışır */
            "[-webkit-mask-image:linear-gradient(to_right,transparent_0,#000_38%)]",
            "[mask-image:linear-gradient(to_right,transparent_0,#000_38%)]",
          )}
          imageClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />
      </div>

      {/* Kart yüzeyini kaplayan görünmez tetikleyici */}
      <button
        type="button"
        onClick={() => onOpen(product.id)}
        aria-label={`${product.name} — detayları gör`}
        className="absolute inset-0 z-10 rounded-[1.35rem]"
      />

      <FavoriteButton
        productId={product.id}
        productName={product.name}
        size="sm"
        className="absolute top-2 right-2 z-20 bg-[#0b0e11]/60 backdrop-blur-sm"
      />
    </motion.article>
  );
}
