"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, SearchX, X } from "lucide-react";
import { Dialog as DialogPrimitive, VisuallyHidden } from "radix-ui";
import { useEffect, useMemo, useRef, useState } from "react";

import { ProductImage } from "@/components/product-image";
import { TagRow } from "@/components/product-tags";
import { SkeletonCard } from "@/components/skeleton-card";
import { categories, tags as tagMap } from "@/data/categories";
import { products } from "@/data/products";
import { formatPrice, normalize } from "@/lib/format";
import type { Product } from "@/types/menu";

const categoryNames = new Map(categories.map((item) => [item.id, item.name]));

/** Arama dizini bir kez kurulur; her tuş vuruşunda yeniden hesaplanmaz. */
const searchIndex = products.map((product) => ({
  product,
  haystack: normalize(
    [
      product.name,
      product.summary,
      product.description,
      categoryNames.get(product.categoryId) ?? "",
      ...product.ingredients,
      ...product.allergens,
      ...product.tags.map((tag) => tagMap[tag].label),
    ].join(" "),
  ),
  name: normalize(product.name),
}));

const suggestions = ["Cold brew", "Vegan", "Tatlı", "Matcha", "Fıstık", "Buzlu"];

function search(query: string): Product[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return searchIndex
    .filter((entry) => terms.every((term) => entry.haystack.includes(term)))
    .sort((a, b) => {
      // Adında geçenler önce gelsin.
      const aName = terms.every((term) => a.name.includes(term)) ? 0 : 1;
      const bName = terms.every((term) => b.name.includes(term)) ? 0 : 1;
      return aName - bName;
    })
    .map((entry) => entry.product);
}

export function SearchOverlay({
  open,
  onOpenChange,
  onSelectProduct,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectProduct: (id: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [pending, setPending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const reduced = useReducedMotion();

  // Panel kapandığında sorguyu sıfırla; bir sonraki açılış temiz başlasın.
  useEffect(() => {
    if (!open) {
      const timer = window.setTimeout(() => setQuery(""), 260);
      return () => window.clearTimeout(timer);
    }
  }, [open]);

  // Kısa bir gecikme: hızlı yazarken listeyi her harfte yeniden dizmeyiz,
  // bu aralıkta iskelet gösterilir.
  useEffect(() => {
    if (!query) {
      setPending(false);
      return;
    }
    setPending(true);
    const timer = window.setTimeout(() => setPending(false), 160);
    return () => window.clearTimeout(timer);
  }, [query]);

  const results = useMemo(() => search(query), [query]);
  const trimmed = query.trim();

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/78 backdrop-blur-[6px] data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
        <DialogPrimitive.Content
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            inputRef.current?.focus();
          }}
          className="fixed inset-0 z-50 flex flex-col outline-none data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 sm:inset-x-0 sm:top-[7vh] sm:bottom-auto sm:mx-auto sm:max-h-[80vh] sm:w-[min(720px,calc(100vw-3rem))] sm:overflow-hidden sm:rounded-3xl sm:ring-1 sm:ring-white/10 sm:data-open:slide-in-from-top-4"
        >
          <VisuallyHidden.Root>
            <DialogPrimitive.Title>Menüde ara</DialogPrimitive.Title>
            <DialogPrimitive.Description>
              Ürün adı, kategori veya içeriğe göre menüyü filtreleyin.
            </DialogPrimitive.Description>
          </VisuallyHidden.Root>

          <div className="flex min-h-0 flex-1 flex-col bg-[#0b0e11] sm:max-h-[80vh]">
            {/* Arama alanı */}
            <div className="shrink-0 border-b border-white/8 pt-safe">
              <div className="flex items-center gap-2.5 px-4 py-3.5 sm:px-5">
                <Search
                  className="size-[18px] shrink-0 text-gold"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Kahve, tatlı veya içerik ara…"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  aria-label="Menüde ara"
                  className="min-w-0 flex-1 bg-transparent text-[0.95rem] text-ink placeholder:text-dim/70 outline-none [&::-webkit-search-cancel-button]:hidden"
                />
                <DialogPrimitive.Close asChild>
                  <button
                    type="button"
                    aria-label="Aramayı kapat"
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-white/5 text-dim ring-1 ring-inset ring-white/8 transition-[background-color,color,transform] duration-300 hover:bg-white/10 hover:text-ink active:scale-90"
                  >
                    <X className="size-4" strokeWidth={2.4} aria-hidden="true" />
                  </button>
                </DialogPrimitive.Close>
              </div>
            </div>

            {/* Sonuçlar */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-safe sm:px-5">
              {!trimmed ? (
                <EmptyQueryState onPick={setQuery} />
              ) : pending ? (
                <div className="space-y-2.5 py-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <SkeletonCard key={index} />
                  ))}
                </div>
              ) : results.length === 0 ? (
                <NoResultsState query={trimmed} />
              ) : (
                <>
                  <p
                    aria-live="polite"
                    className="pt-4 pb-2 text-[0.68rem] font-semibold tracking-[0.16em] text-dim uppercase"
                  >
                    {results.length} sonuç
                  </p>
                  <ul className="space-y-2.5 pb-6">
                    <AnimatePresence initial={false}>
                      {results.map((product, index) => (
                        <motion.li
                          key={product.id}
                          layout={!reduced}
                          initial={reduced ? false : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={reduced ? undefined : { opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                            delay: Math.min(index, 8) * 0.025,
                          }}
                        >
                          <ResultRow
                            product={product}
                            onSelect={() => onSelectProduct(product.id)}
                          />
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </>
              )}
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function ResultRow({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group surface-card surface-card-hover flex w-full items-center gap-3 rounded-2xl p-2.5 text-left transition-transform duration-300 active:scale-[0.985]"
    >
      <ProductImage
        src={product.image}
        alt={product.name}
        photoId={product.id}
        sizes="64px"
        className="size-16 shrink-0 rounded-xl ring-1 ring-inset ring-white/8"
        imageClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.09]"
      />
      <div className="min-w-0 flex-1">
        <p className="text-[0.6rem] font-bold tracking-[0.16em] text-gold/80 uppercase">
          {categoryNames.get(product.categoryId)}
        </p>
        <p className="mt-0.5 truncate font-heading text-[0.95rem] font-medium text-ink">
          {product.name}
        </p>
        <p className="mt-0.5 truncate text-[0.74rem] text-dim">{product.summary}</p>
        <TagRow ids={product.tags} className="mt-1.5" />
      </div>
      <span className="shrink-0 self-start pt-1 font-heading text-[0.95rem] leading-none font-semibold text-gold tabular-nums">
        {formatPrice(product.price)}
      </span>
    </button>
  );
}

function EmptyQueryState({ onPick }: { onPick: (value: string) => void }) {
  return (
    <div className="py-6">
      <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-dim uppercase">
        Sık aranan
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {suggestions.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onPick(item)}
            className="rounded-full bg-white/5 px-3.5 py-2 text-[0.8rem] font-medium text-ink/85 ring-1 ring-inset ring-white/8 transition-[background-color,box-shadow,transform] duration-300 hover:bg-gold/12 hover:text-gold hover:ring-gold/25 active:scale-95"
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-8 text-center text-[0.78rem] leading-relaxed text-dim/70">
        Ürün adının yanı sıra içerik de arayabilirsiniz.
        <br />
        Örneğin <span className="text-gold/85">“tahin”</span> ya da{" "}
        <span className="text-gold/85">“mascarpone”</span>.
      </p>
    </div>
  );
}

function NoResultsState({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
      <div className="relative grid size-20 place-items-center rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(196,122,69,0.22),transparent_65%)] ring-1 ring-inset ring-white/8">
        <SearchX className="size-7 text-gold/60" strokeWidth={1.6} aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-heading text-[1.15rem] text-ink">
        “{query}” için sonuç yok
      </h3>
      <p className="mt-2 max-w-[34ch] text-[0.82rem] leading-relaxed text-dim">
        Farklı bir kelime deneyebilir ya da menüyü kategoriler üzerinden
        gezebilirsiniz. Aradığınız tarif menüde değilse garsonumuza
        danışabilirsiniz.
      </p>
    </div>
  );
}
