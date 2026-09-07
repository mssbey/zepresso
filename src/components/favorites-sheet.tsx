"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, Trash2 } from "lucide-react";

import { FavoriteButton } from "@/components/favorite-button";
import { useMenuContent } from "@/components/menu-content";
import { ProductImage } from "@/components/product-image";
import { ResponsiveSheet } from "@/components/responsive-sheet";
import { useFavorites } from "@/hooks/use-favorites";
import { formatPrice } from "@/lib/format";

/**
 * Favoriler paneli — mobilde bottom sheet, masaüstünde sağdan açılan panel.
 * Liste localStorage'dan beslenir ve tüm arayüzle anlık senkron kalır.
 */
export function FavoritesSheet({
  open,
  onOpenChange,
  onSelectProduct,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectProduct: (id: string) => void;
}) {
  const { ids, clear } = useFavorites();
  const { categoryName, getProductById } = useMenuContent();
  const reduced = useReducedMotion();

  const items = ids
    .map((id) => getProductById(id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  return (
    <ResponsiveSheet
      open={open}
      onOpenChange={onOpenChange}
      title="Favorilerim"
      description="Kalbe dokunduğunuz ürünler burada saklanır."
      desktopVariant="side"
    >
      <div className="flex min-h-0 flex-1 flex-col">
        <header className="shrink-0 px-5 pt-6 pb-4 sm:px-6">
          <p className="eyebrow">Sizin seçtikleriniz</p>
          <div className="mt-2 flex items-end justify-between gap-3 pr-10">
            <h2 className="font-heading text-[1.55rem] leading-tight text-ink">
              Favorilerim
            </h2>
            {items.length > 0 && (
              <span className="pb-1 text-[0.72rem] text-dim tabular-nums">
                {items.length} ürün
              </span>
            )}
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-safe sm:px-6">
          {items.length === 0 ? (
            <EmptyFavorites />
          ) : (
            <ul className="space-y-2.5 pb-4">
              <AnimatePresence initial={false}>
                {items.map((product) => (
                  <motion.li
                    key={product.id}
                    layout={!reduced}
                    initial={reduced ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      reduced
                        ? undefined
                        : { opacity: 0, x: -24, transition: { duration: 0.22 } }
                    }
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    <div className="group surface-card surface-card-hover relative isolate flex items-center gap-3 rounded-2xl p-2.5">
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        photoId={product.id}
                        sizes="68px"
                        className="size-[68px] shrink-0 rounded-xl ring-1 ring-inset ring-white/8"
                        imageClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.09]"
                      />
                      <div className="min-w-0 flex-1 pr-8">
                        <p className="text-[0.6rem] font-bold tracking-[0.16em] text-gold/80 uppercase">
                          {categoryName(product.categoryId)}
                        </p>
                        <p className="mt-0.5 truncate font-heading text-[0.92rem] font-medium text-ink">
                          {product.name}
                        </p>
                        <p className="mt-1 text-[0.85rem] leading-none font-semibold text-gold tabular-nums">
                          {formatPrice(product.price)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectProduct(product.id)}
                        aria-label={`${product.name} — detayları gör`}
                        className="absolute inset-0 z-10 rounded-2xl"
                      />
                      <FavoriteButton
                        productId={product.id}
                        productName={product.name}
                        size="sm"
                        className="absolute top-1/2 right-2.5 z-20 -translate-y-1/2"
                      />
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="shrink-0 border-t border-white/8 px-5 py-3.5 pb-safe sm:px-6">
            <button
              type="button"
              onClick={clear}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[0.78rem] font-medium text-dim transition-colors duration-300 hover:text-espresso"
            >
              <Trash2 className="size-3.5" strokeWidth={2.2} aria-hidden="true" />
              Listeyi temizle
            </button>
          </footer>
        )}
      </div>
    </ResponsiveSheet>
  );
}

function EmptyFavorites() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-14 text-center">
      <div className="relative grid size-20 place-items-center rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(196,122,69,0.24),transparent_65%)] ring-1 ring-inset ring-white/8">
        <Heart className="size-7 text-espresso/70" strokeWidth={1.6} aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-heading text-[1.15rem] text-ink">
        Henüz bir seçiminiz yok
      </h3>
      <p className="mt-2 max-w-[36ch] text-[0.82rem] leading-relaxed text-dim">
        Menüde gezerken beğendiğiniz ürünlerin kalbine dokunun; bir dahaki
        gelişinizde masaya oturur oturmaz hepsi burada olsun.
      </p>
    </div>
  );
}
