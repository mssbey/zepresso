"use client";

import { useState } from "react";

import { getPhotoMeta } from "@/data/photo-meta";
import { cn } from "@/lib/utils";

/** Görselin alt kenarındaki karartma yoğunluğu. */
type Overlay = "none" | "soft" | "strong";

const overlays: Record<Overlay, string> = {
  none: "",
  soft: "bg-gradient-to-t from-black/35 via-transparent to-transparent",
  strong: "bg-gradient-to-t from-black/70 via-black/12 to-black/10",
};

/**
 * Ürün fotoğrafı.
 *
 * - Oran sabitlenmiş kapsayıcı → görsel yüklenirken düzen kaymaz (CLS yok).
 * - `photoId` verilirse fotoğrafın 24 px'lik bulanık önizlemesi (LQIP) zemine
 *   basılır; asıl görsel üzerine yumuşakça açılır. Boş gri kutu görünmez.
 * - Görsel bulunamazsa markaya uygun monogram yer tutucusuna düşer.
 */
export function ProductImage({
  src,
  alt,
  photoId,
  className,
  imageClassName,
  priority = false,
  sizes,
  overlay = "soft",
}: {
  src: string;
  alt: string;
  /** Bulanık önizlemenin okunacağı kayıt anahtarı — genelde ürün kimliği. */
  photoId?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  overlay?: Overlay;
}) {
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const blur = photoId ? getPhotoMeta(photoId)?.blur : undefined;

  return (
    <div className={cn("relative overflow-hidden bg-[#0b0e11]", className)}>
      {blur ? (
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 scale-[1.15] bg-cover bg-center blur-[6px] transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            state === "ready" ? "opacity-0" : "opacity-100",
          )}
          style={{ backgroundImage: `url("${blur}")` }}
        />
      ) : (
        state === "loading" && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-surface-2 via-surface to-[#0b0e11]" />
        )
      )}

      {state === "error" ? (
        <PlaceholderArt />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          draggable={false}
          onLoad={() => setState("ready")}
          onError={() => setState("error")}
          className={cn(
            "relative size-full object-cover transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            state === "ready" ? "opacity-100" : "opacity-0",
            imageClassName,
          )}
        />
      )}

      {/* Fotoğrafı koyu yüzeye bağlayan sinematik karartma */}
      {overlay !== "none" && (
        <div
          aria-hidden="true"
          className={cn("pointer-events-none absolute inset-0", overlays[overlay])}
        />
      )}
    </div>
  );
}

/** Görsel yoksa: koyu zemin, sıcak ışık ve tipografik monogram. */
function PlaceholderArt() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(120%_100%_at_70%_15%,rgba(196,122,69,0.22),transparent_60%),linear-gradient(160deg,#171b20,#0b0e11)]">
      <span
        className="font-heading text-[2.4em] leading-none text-gold/35"
        aria-hidden="true"
      >
        Z
      </span>
    </div>
  );
}
