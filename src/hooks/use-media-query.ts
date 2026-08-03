"use client";

import { useEffect, useState } from "react";

/**
 * Medya sorgusu dinleyicisi.
 * İlk render'da `false` döner; hidrasyon uyuşmazlığı yaşamamak için
 * bileşenler bu değeri yalnızca davranış seçiminde kullanmalı, düzen
 * farklılıkları CSS ile çözülmeli.
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const list = window.matchMedia(query);
    setMatches(list.matches);

    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    list.addEventListener("change", onChange);
    return () => list.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** Tailwind `md` kırılımı ile aynı eşik. */
export function useIsDesktop() {
  return useMediaQuery("(min-width: 768px)");
}
