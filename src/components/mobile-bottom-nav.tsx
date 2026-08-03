"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, MapPin, Search, UtensilsCrossed } from "lucide-react";

import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

type NavId = "menu" | "ara" | "favoriler" | "mekan";

const items: { id: NavId; label: string; icon: typeof Search }[] = [
  { id: "menu", label: "Menü", icon: UtensilsCrossed },
  { id: "ara", label: "Ara", icon: Search },
  { id: "favoriler", label: "Favoriler", icon: Heart },
  { id: "mekan", label: "Mekân", icon: MapPin },
];

/**
 * Mobil alt navigasyon.
 *
 * Yalnızca `md` altında görünür. `<body>` alt boşluğu bu barın yüksekliğini
 * hesaba katar (bkz. `page` içindeki `pb-[...]`), böylece son bölüm kapanmaz.
 */
export function MobileBottomNav({
  active,
  onNavigate,
}: {
  active: NavId;
  onNavigate: (id: NavId) => void;
}) {
  const { count } = useFavorites();
  const reduced = useReducedMotion();

  return (
    <nav
      aria-label="Hızlı gezinme"
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-8 h-8 bg-gradient-to-t from-void to-transparent" />
      <div className="glass-strong hairline-t pb-safe">
        <ul className="mx-auto flex max-w-md items-stretch justify-around px-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === active;
            return (
              <li key={item.id} className="flex-1">
                <button
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={
                    item.id === "favoriler" && count > 0
                      ? `Favoriler — ${count} ürün`
                      : item.label
                  }
                  className={cn(
                    "relative flex w-full flex-col items-center gap-1 rounded-xl px-1 pt-2.5 pb-2 transition-colors duration-300",
                    isActive ? "text-gold" : "text-dim",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="bottom-nav-indicator"
                      transition={
                        reduced
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 480, damping: 34 }
                      }
                      className="absolute inset-x-3 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
                    />
                  )}

                  <span className="relative">
                    <motion.span
                      className="block"
                      animate={
                        reduced ? undefined : { y: isActive ? -1 : 0, scale: isActive ? 1.08 : 1 }
                      }
                      transition={{ type: "spring", stiffness: 460, damping: 26 }}
                    >
                      <Icon
                        className={cn(
                          "size-[19px]",
                          item.id === "favoriler" && count > 0 && "fill-espresso/70",
                        )}
                        strokeWidth={isActive ? 2.4 : 2}
                        aria-hidden="true"
                      />
                    </motion.span>

                    {item.id === "favoriler" && count > 0 && (
                      <span className="absolute -top-1 -right-2 grid min-w-[15px] place-items-center rounded-full bg-gold px-1 text-[0.55rem] leading-[15px] font-bold text-[#14100a] tabular-nums">
                        {count > 9 ? "9+" : count}
                      </span>
                    )}
                  </span>

                  <span className="text-[0.62rem] font-semibold tracking-[0.04em]">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
