"use client";

import { useEffect, useRef } from "react";
import { Flame, Info, Leaf, TriangleAlert } from "lucide-react";

import { FavoriteButton } from "@/components/favorite-button";
import { ProductImage } from "@/components/product-image";
import { ProductBadge, TagRow } from "@/components/product-tags";
import { ResponsiveSheet } from "@/components/responsive-sheet";
import { categories } from "@/data/categories";
import { getProductById, getRelatedProducts } from "@/data/products";
import { venue } from "@/data/venue";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/menu";

/**
 * Ürün detayı — yalnızca bilgilendirme amaçlıdır.
 * Sipariş, sepet veya ödeme öğesi bilinçli olarak yoktur.
 */
export function ProductDetailSheet({
  productId,
  open,
  onOpenChange,
  onSelectProduct,
}: {
  productId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectProduct: (id: string) => void;
}) {
  const product = productId ? getProductById(productId) : undefined;

  return (
    <ResponsiveSheet
      open={open && Boolean(product)}
      onOpenChange={onOpenChange}
      title={product?.name ?? "Ürün detayı"}
      description={product?.summary}
      desktopVariant="modal"
    >
      {product && (
        <DetailContent product={product} onSelectProduct={onSelectProduct} />
      )}
    </ResponsiveSheet>
  );
}

function DetailContent({
  product,
  onSelectProduct,
}: {
  product: Product;
  onSelectProduct: (id: string) => void;
}) {
  const category = categories.find((item) => item.id === product.categoryId);
  const related = getRelatedProducts(product, 6);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Farklı bir ürüne geçildiğinde panel, önceki ürünün kaydırma konumunda kalmasın diye başa döner.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [product.id]);

  return (
    <div
      ref={scrollRef}
      className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
    >
      {/* Görsel */}
      <div className="relative">
        <ProductImage
          src={product.image}
          alt={product.name}
          photoId={product.id}
          priority
          overlay="none"
          sizes="(min-width: 640px) 40rem, 100vw"
          className="aspect-[4/3] w-full sm:aspect-[16/9]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0e11] via-[#0b0e11]/72 to-transparent" />
        {product.badge && (
          <ProductBadge id={product.badge} className="absolute top-4 left-4" />
        )}
      </div>

      <div className="relative -mt-10 px-5 pb-8 sm:px-7 sm:pb-10">
        <div className="flex items-start gap-3">
          <div className="min-w-0 flex-1">
            {category && <p className="eyebrow">{category.name}</p>}
            <h2 className="mt-1.5 font-heading text-[clamp(1.45rem,6vw,2rem)] leading-tight text-ink">
              {product.name}
            </h2>
          </div>
          <FavoriteButton
            productId={product.id}
            productName={product.name}
            size="lg"
            className="mt-1"
          />
        </div>

        <div className="mt-3.5 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-heading text-[1.35rem] leading-none font-semibold text-gold tabular-nums">
            {formatPrice(product.price)}
          </span>
          {product.serving && (
            <Meta>{product.serving}</Meta>
          )}
          {typeof product.calories === "number" && (
            <Meta>
              <Flame className="size-3" strokeWidth={2.4} aria-hidden="true" />
              {product.calories} kcal
            </Meta>
          )}
        </div>

        <TagRow ids={product.tags} className="mt-3.5" />

        <p className="mt-4 text-[0.88rem] leading-[1.75] text-ink/80">
          {product.description}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Panel
            icon={<Leaf className="size-3.5" strokeWidth={2.4} aria-hidden="true" />}
            title="İçindekiler"
          >
            <ul className="flex flex-wrap gap-1.5">
              {product.ingredients.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white/5 px-2.5 py-1 text-[0.72rem] leading-none text-ink/85 ring-1 ring-inset ring-white/8"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Panel>

          <Panel
            icon={
              <TriangleAlert className="size-3.5" strokeWidth={2.4} aria-hidden="true" />
            }
            title="Alerjenler"
            tone="warn"
          >
            {product.allergens.length > 0 ? (
              <ul className="flex flex-wrap gap-1.5">
                {product.allergens.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-espresso/10 px-2.5 py-1 text-[0.72rem] leading-none text-[#e0a877] ring-1 ring-inset ring-espresso/25"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[0.78rem] leading-relaxed text-dim">
                Bilinen bir alerjen içermiyor.
              </p>
            )}
          </Panel>
        </div>

        <p className="mt-4 flex items-start gap-2 rounded-xl bg-white/[0.03] p-3 text-[0.72rem] leading-relaxed text-dim ring-1 ring-inset ring-white/6">
          <Info className="mt-px size-3.5 shrink-0 text-gold/70" strokeWidth={2.2} aria-hidden="true" />
          <span>{venue.allergenNotice}</span>
        </p>

        {related.length > 0 && (
          <section className="mt-7" aria-labelledby="related-title">
            <h3
              id="related-title"
              className="font-heading text-[1.02rem] font-medium text-ink"
            >
              Benzer ürünler
            </h3>
            <div
              className="no-scrollbar snap-rail -mx-5 mt-3 flex gap-2.5 overflow-x-auto px-5 pb-1 sm:-mx-7 sm:px-7"
              role="list"
            >
              {related.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="listitem"
                  onClick={() => onSelectProduct(item.id)}
                  className="group surface-card surface-card-hover w-[132px] shrink-0 snap-start overflow-hidden rounded-2xl text-left transition-transform duration-300 active:scale-[0.97]"
                >
                  <ProductImage
                    src={item.image}
                    alt={item.name}
                    photoId={item.id}
                    sizes="132px"
                    className="aspect-square w-full"
                    imageClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                  />
                  <div className="p-2.5">
                    <p className="line-clamp-2 text-[0.74rem] leading-snug font-medium text-ink">
                      {item.name}
                    </p>
                    <p className="mt-1.5 text-[0.72rem] leading-none font-semibold text-gold tabular-nums">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        <p className="mt-7 border-t border-white/6 pt-4 text-center text-[0.7rem] leading-relaxed text-dim/70">
          Bu ekran yalnızca bilgilendirme amaçlıdır. Siparişinizi garsonumuza
          iletebilirsiniz.
        </p>
      </div>
    </div>
  );
}

function Meta({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-[0.7rem] leading-none text-dim ring-1 ring-inset ring-white/8">
      {children}
    </span>
  );
}

function Panel({
  icon,
  title,
  tone = "neutral",
  children,
}: {
  icon: React.ReactNode;
  title: string;
  tone?: "neutral" | "warn";
  children: React.ReactNode;
}) {
  return (
    <div className="surface-card rounded-2xl p-3.5">
      <h3
        className={`flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[0.16em] uppercase ${
          tone === "warn" ? "text-espresso" : "text-gold"
        }`}
      >
        {icon}
        {title}
      </h3>
      <div className="mt-2.5">{children}</div>
    </div>
  );
}
