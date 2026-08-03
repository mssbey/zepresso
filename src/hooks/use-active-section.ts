"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Kaydırma sırasında hangi bölümün "aktif" olduğunu izler.
 *
 * IntersectionObserver yerine konum ölçümü kullanıyoruz: bölüm yükseklikleri
 * çok farklı olduğu için, sticky başlığın hemen altındaki bölümü seçmek
 * kullanıcının gördüğüyle birebir örtüşüyor.
 */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  /** Programatik kaydırma sırasında ölçümü devre dışı bırakır. */
  const lockedUntil = useRef(0);
  const frame = useRef<number | null>(null);

  const measure = useCallback(() => {
    if (Date.now() < lockedUntil.current) return;

    const offset =
      (Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--z-header-h"),
      ) || 68) +
      (Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--z-rail-h"),
      ) || 56) +
      24;

    // Sayfanın sonuna gelindiyse son bölüm aktiftir; kısa bölümler
    // aksi hâlde hiçbir zaman seçilemezdi.
    const atBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 80;
    if (atBottom) {
      setActiveId(ids[ids.length - 1] ?? "");
      return;
    }

    let current = ids[0] ?? "";
    for (const id of ids) {
      const element = document.getElementById(id);
      if (!element) continue;
      if (element.getBoundingClientRect().top <= offset) current = id;
    }
    setActiveId(current);
  }, [ids]);

  useEffect(() => {
    const onScroll = () => {
      if (frame.current !== null) return;
      frame.current = window.requestAnimationFrame(() => {
        frame.current = null;
        measure();
      });
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, [measure]);

  /** Kategoriye dokunulduğunda: anında işaretle, kaydırma bitene kadar kilitle. */
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    setActiveId(id);
    lockedUntil.current = Date.now() + 900;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }, []);

  return { activeId, scrollToSection };
}
