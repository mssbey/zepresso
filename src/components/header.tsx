"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Heart, Search } from "lucide-react";
import { useState } from "react";

import { useMenuStore } from "@/components/menu-store";
import { ZepressoLogo } from "@/components/zepresso-logo";
import { venue } from "@/data/venue";
import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

/**
 * Sticky başlık.
 *
 * Kaydırıldığında: yüksekliği azalır, yüzeyi koyulaşır, cam efekti kazanır.
 * Yükseklik `--z-header-h` değişkeniyle paylaşılır; bölüm scroll-margin'i ve
 * kategori rayının konumu bu değeri okur.
 */
export function Header() {
  const { openSearch, openFavorites } = useMenuStore();
  const { count } = useFavorites();
  const [condensed, setCondensed] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCondensed(latest > 28);
  });

  return (
    <header
      data-condensed={condensed}
      className={cn(
        "fixed inset-x-0 top-0 z-40 pt-safe transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        condensed
          ? "glass-strong shadow-[0_10px_30px_-20px_rgba(0,0,0,1)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-gold/22 after:to-transparent"
          : "bg-gradient-to-b from-void via-void/70 to-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center gap-3 px-4 transition-[height,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6",
          condensed ? "h-[54px]" : "h-[68px]",
        )}
      >
        <a
          href="#ust"
          className="group flex min-w-0 flex-col justify-center rounded-lg"
          aria-label="Zepresso — menünün başına dön"
        >
          <ZepressoLogo compact={condensed} className="transition-all duration-500" />
          <motion.span
            aria-hidden={condensed}
            animate={{
              height: condensed ? 0 : 14,
              opacity: condensed ? 0 : 1,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden text-[0.6rem] font-semibold tracking-[0.28em] text-dim uppercase"
          >
            {venue.district} • {venue.city}
          </motion.span>
        </a>

        <div className="ml-auto flex items-center gap-1.5">
          <HeaderAction label="Menüde ara" onClick={openSearch}>
            <Search className="size-[18px]" strokeWidth={2} aria-hidden="true" />
          </HeaderAction>

          <HeaderAction
            label={
              count > 0 ? `Favoriler — ${count} ürün` : "Favoriler — henüz boş"
            }
            onClick={openFavorites}
          >
            <Heart
              className={cn("size-[18px]", count > 0 && "fill-espresso text-espresso")}
              strokeWidth={2}
              aria-hidden="true"
            />
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 560, damping: 22 }}
                className="absolute -top-0.5 -right-0.5 grid min-w-[17px] place-items-center rounded-full bg-gold px-1 text-[0.6rem] leading-[17px] font-bold text-[#14100a] tabular-nums"
              >
                {count > 99 ? "99+" : count}
              </motion.span>
            )}
          </HeaderAction>
        </div>
      </div>
    </header>
  );
}

function HeaderAction({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative grid size-10 place-items-center rounded-full bg-white/4 text-ink ring-1 ring-inset ring-white/8 transition-[background-color,box-shadow,transform] duration-300 hover:bg-white/8 hover:ring-gold/25 active:scale-90"
    >
      {children}
    </button>
  );
}
