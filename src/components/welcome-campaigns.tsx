"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgePercent,
  Clock3,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";

import type { Campaign, Product } from "@/types/menu";
import { formatPrice } from "@/lib/format";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface WelcomeCampaignsProps {
  campaigns: Campaign[];
  products: Product[];
  onOpenProduct: (id: string) => void;
}

export function WelcomeCampaigns({ campaigns, products, onOpenProduct }: WelcomeCampaignsProps) {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const reduceMotion = useReducedMotion();

  const eligibleCampaigns = campaigns
    .map((campaign) => ({ campaign, window: getCampaignWindow(campaign, now) }))
    .filter((item) => item.window.eligible);

  useEffect(() => {
    if (campaigns.length === 0) return;
    const revealTimer = window.setTimeout(() => {
      setNow(Date.now());
      setOpen(true);
    }, 550);
    const clock = window.setInterval(() => setNow(Date.now()), 1_000);
    return () => {
      window.clearTimeout(revealTimer);
      window.clearInterval(clock);
    };
  }, [campaigns.length]);

  if (eligibleCampaigns.length === 0) return null;

  const normalizedIndex = activeIndex % eligibleCampaigns.length;
  const { campaign: active, window: activeWindow } = eligibleCampaigns[normalizedIndex];
  const linkedProducts = (active.productIds ?? [])
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));
  const hasMultiple = eligibleCampaigns.length > 1;
  const discount =
    active.originalPrice && active.originalPrice > active.price
      ? Math.round(((active.originalPrice - active.price) / active.originalPrice) * 100)
      : null;

  function select(next: number) {
    setActiveIndex((next + eligibleCampaigns.length) % eligibleCampaigns.length);
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) setDismissed(true);
  }

  function openProduct(productId: string) {
    setOpen(false);
    setDismissed(true);
    window.setTimeout(() => onOpenProduct(productId), 120);
  }

  return (
    <>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          showCloseButton={false}
          className="campaign-dialog w-[min(94vw,68rem)] max-w-none gap-0 overflow-hidden rounded-[1.75rem_1.75rem_4rem_1.75rem] border-0 bg-[#0b0d0f] p-0 shadow-[0_32px_100px_-24px_rgb(0_0_0/0.95),0_0_0_1px_rgb(228_180_106/0.18)] ring-0 sm:max-w-none sm:rounded-[2.5rem_2.5rem_6rem_2.5rem]"
        >
          <DialogTitle className="sr-only">Günün fırsatları</DialogTitle>
          <DialogDescription className="sr-only">
            Zepresso menüsündeki güncel paket fırsatları.
          </DialogDescription>

          <div className="relative grid min-h-[32rem] md:grid-cols-[56%_44%]">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_42%,#0b0d0f_100%)] md:hidden" />
            <div className="absolute inset-y-0 left-[52%] z-10 hidden w-32 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#0b0d0f_82%)] md:block" />

            <div className="relative min-h-[18rem] min-w-0 overflow-hidden md:min-h-[36rem]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.image}
                  alt={`${active.title} paket görseli`}
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 size-full object-cover object-[58%_center]"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_45%,rgb(11_13_15/0.55)_100%)]" />
            </div>

            <div className="relative z-20 flex min-w-0 flex-col justify-center px-6 pt-2 pb-8 sm:px-9 md:px-8 md:py-10 lg:px-10">
              <div aria-hidden="true" className="absolute -right-20 -bottom-28 size-64 rounded-full border border-gold/15" />
              <div aria-hidden="true" className="absolute -right-12 -bottom-20 size-44 rounded-full border border-gold/10" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.2em] text-gold uppercase">
                      <Sparkles className="size-3" />
                      {active.badge}
                    </div>
                    {discount && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#7dba75]/12 px-2.5 py-1.5 text-[0.68rem] font-semibold text-[#a9db9f]">
                        <BadgePercent className="size-3" /> %{discount} avantaj
                      </span>
                    )}
                  </div>

                  <h2 className="mt-4 max-w-sm font-heading text-[clamp(2.15rem,4.5vw,4rem)] leading-[0.94] font-medium text-ink">
                    {active.title}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-dim sm:text-base">
                    {active.description}
                  </p>

                  {linkedProducts.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {linkedProducts.map((product) => (
                        <button
                          key={product.id}
                          type="button"
                          onClick={() => openProduct(product.id)}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-gold/30 hover:bg-gold/10 hover:text-gold"
                        >
                          {product.name}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-1">
                    <span className="font-heading text-5xl leading-none text-gold tabular-nums sm:text-6xl">
                      {formatPrice(active.price)}
                    </span>
                    {active.originalPrice && active.originalPrice > active.price && (
                      <span className="pb-1 text-lg text-dim line-through decoration-espresso decoration-2">
                        {formatPrice(active.originalPrice)}
                      </span>
                    )}
                  </div>

                  {activeWindow.endTime && (
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-dim">
                      <Clock3 className="size-3.5 text-gold" />
                      Sona ermesine
                      <span className="font-mono text-sm font-semibold tracking-wider text-ink tabular-nums">
                        {formatCountdown(activeWindow.endTime - now)}
                      </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-7 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() =>
                    linkedProducts[0] ? openProduct(linkedProducts[0].id) : handleOpenChange(false)
                  }
                  className="group inline-flex h-11 items-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-[#171009] transition-all hover:bg-[#f0c783] active:scale-[0.98]"
                >
                  {linkedProducts.length > 0 ? "Paketi incele" : "Menüyü keşfet"}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                {hasMultiple && (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Önceki kampanya"
                      onClick={() => select(normalizedIndex - 1)}
                      className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-ink transition-colors hover:border-gold/30 hover:bg-gold/10"
                    >
                      <ArrowLeft className="size-4" />
                    </button>
                    <span className="min-w-10 text-center text-xs text-dim tabular-nums">
                      {normalizedIndex + 1} / {eligibleCampaigns.length}
                    </span>
                    <button
                      type="button"
                      aria-label="Sonraki kampanya"
                      onClick={() => select(normalizedIndex + 1)}
                      className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-ink transition-colors hover:border-gold/30 hover:bg-gold/10"
                    >
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              aria-label="Kampanyaları kapat"
              onClick={() => handleOpenChange(false)}
              className="absolute top-4 right-4 z-30 grid size-10 place-items-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur-md transition-all hover:rotate-6 hover:border-gold/30 hover:bg-black/70"
            >
              <X className="size-4" />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <AnimatePresence>
        {dismissed && !open && (
          <motion.button
            type="button"
            initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setOpen(true)}
            className="fixed right-4 bottom-[calc(82px+env(safe-area-inset-bottom,0px))] z-40 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-[#111418]/95 py-2 pr-4 pl-2 text-left shadow-[0_18px_50px_-18px_rgb(0_0_0/0.95),0_0_30px_-18px_rgb(228_180_106/0.7)] backdrop-blur-xl md:bottom-5"
          >
            <span className="grid size-9 place-items-center rounded-full bg-gold text-[#171009]">
              <RotateCcw className="size-4" />
            </span>
            <span>
              <span className="block text-[0.62rem] font-semibold tracking-[0.16em] text-gold uppercase">
                Günün fırsatı
              </span>
              <span className="block max-w-40 truncate text-xs font-medium text-ink">
                Tekrar göster
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

function getCampaignWindow(campaign: Campaign, timestamp: number) {
  if (!campaign.active) return { eligible: false as const };

  const now = new Date(timestamp);
  const startsAt = campaign.startsAt ? new Date(campaign.startsAt).getTime() : null;
  const endsAt = campaign.endsAt ? new Date(campaign.endsAt).getTime() : null;
  if (startsAt && Number.isFinite(startsAt) && timestamp < startsAt) return { eligible: false as const };
  if (endsAt && Number.isFinite(endsAt) && timestamp >= endsAt) return { eligible: false as const };

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = parseTime(campaign.dailyStart);
  const endMinutes = parseTime(campaign.dailyEnd);
  const overnight = startMinutes !== null && endMinutes !== null && startMinutes > endMinutes;
  const scheduleDay = overnight && currentMinutes <= endMinutes ? (now.getDay() + 6) % 7 : now.getDay();

  if (campaign.daysOfWeek?.length && !campaign.daysOfWeek.includes(scheduleDay)) {
    return { eligible: false as const };
  }

  let dailyEndTime: number | null = null;
  if (startMinutes !== null && endMinutes !== null) {
    const inside = overnight
      ? currentMinutes >= startMinutes || currentMinutes <= endMinutes
      : currentMinutes >= startMinutes && currentMinutes <= endMinutes;
    if (!inside) return { eligible: false as const };

    const dailyEnd = new Date(now);
    // Adminin seçtiği bitiş dakikası tamamlanana kadar kampanyayı yayında tut.
    dailyEnd.setHours(Math.floor(endMinutes / 60), endMinutes % 60, 59, 999);
    if (overnight && currentMinutes >= startMinutes) dailyEnd.setDate(dailyEnd.getDate() + 1);
    dailyEndTime = dailyEnd.getTime();
  }

  const endCandidates = [endsAt, dailyEndTime].filter(
    (value): value is number => value !== null && Number.isFinite(value) && value > timestamp,
  );
  return {
    eligible: true as const,
    endTime: endCandidates.length ? Math.min(...endCandidates) : undefined,
  };
}

function parseTime(value?: string) {
  if (!value) return null;
  const [hours, minutes] = value.split(":").map(Number);
  if (!Number.isInteger(hours) || !Number.isInteger(minutes)) return null;
  return hours * 60 + minutes;
}

function formatCountdown(milliseconds: number) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1_000));
  const hours = Math.floor(totalSeconds / 3_600);
  const minutes = Math.floor((totalSeconds % 3_600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
}
