"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

import { ProductImage } from "@/components/product-image";
import { venue } from "@/data/venue";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Sinematik giriş.
 *
 * Görsel `scale` ile hafifçe kayar (parallax), üzerinde yavaşça gezinen bir
 * sıcak ışık lekesi vardır. Hareket tercihi kapalıysa her ikisi de durur.
 */
export function Hero({ onExplore }: { onExplore: () => void }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const imageY = useTransform(smooth, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(smooth, [0, 1], [1.06, 1.16]);
  const contentY = useTransform(smooth, [0, 1], ["0%", "-14%"]);
  const contentOpacity = useTransform(smooth, [0, 0.75], [1, 0]);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
  };
  const item = reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
      };

  return (
    <section
      ref={ref}
      id="ust"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[min(88svh,760px)] w-full overflow-hidden"
    >
      {/* Görsel katmanı */}
      <motion.div
        style={reduced ? undefined : { y: imageY, scale: imageScale }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <ProductImage
          src="/hero.jpg"
          alt="Zepresso barında hazırlanan espresso"
          photoId="__hero"
          priority
          overlay="none"
          sizes="100vw"
          className="size-full"
        />
      </motion.div>

      {/* Yavaş gezinen sıcak ışık */}
      {!reduced && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-12%] right-[-18%] -z-10 size-[70vw] max-w-[620px] rounded-full bg-[radial-gradient(circle,rgba(228,180,106,0.3),rgba(196,122,69,0.08)_45%,transparent_70%)] blur-2xl"
          style={{ animation: "drift 16s ease-in-out infinite" }}
        />
      )}

      {/* Okunabilirlik gradyanı */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,10,12,0.88)_0%,rgba(8,10,12,0.32)_34%,rgba(8,10,12,0.72)_74%,var(--z-void)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(8,10,12,0.72)_0%,transparent_58%)]"
      />

      <motion.div
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex min-h-[min(88svh,760px)] w-full max-w-6xl flex-col justify-end px-4 pt-28 pb-12 sm:px-6 sm:pb-16 lg:pb-20"
      >
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="eyebrow flex items-center gap-2.5"
          >
            <span className="h-px w-7 bg-gradient-to-r from-gold to-transparent" />
            Zepresso Signature
          </motion.p>

          <motion.h1
            variants={item}
            id="hero-title"
            className="mt-4 max-w-[15ch] text-[clamp(2.1rem,8.4vw,4.25rem)] leading-[1.02] font-normal text-ink text-balance"
          >
            Kahvenin en{" "}
            <span className="bg-gradient-to-br from-[#f4dcae] via-gold to-espresso bg-clip-text text-transparent italic">
              karanlık
            </span>{" "}
            ve en güzel hâli.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-[42ch] text-[0.95rem] leading-relaxed text-dim sm:text-base"
          >
            Özenle seçilen çekirdekler, ustaca hazırlanan tatlar.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <OpenStatus closing={venue.todayClosing} />
          </motion.div>

          <motion.div variants={item} className="mt-7">
            <button
              type="button"
              onClick={onExplore}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#f0cf95] to-gold px-6 py-3.5 text-sm font-bold tracking-[0.02em] text-[#140f08] shadow-[0_16px_34px_-16px_rgba(228,180,106,0.85)] transition-[transform,box-shadow,filter] duration-300 hover:brightness-[1.06] hover:shadow-[0_20px_44px_-16px_rgba(228,180,106,0.95)] active:scale-[0.97]"
            >
              Menüyü keşfet
              <ArrowDown
                className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0.5"
                strokeWidth={2.6}
                aria-hidden="true"
              />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function OpenStatus({ closing }: { closing: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full bg-[#0b0e11]/70 px-3.5 py-2 text-[0.8rem] font-medium text-ink/90 ring-1 ring-inset ring-white/10 backdrop-blur-md">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#4ADE80] opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-[#4ADE80] shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
      </span>
      Şu anda açığız
      <span aria-hidden="true" className="text-dim">
        •
      </span>
      <span className="text-dim">{closing}&apos;a kadar</span>
    </span>
  );
}
