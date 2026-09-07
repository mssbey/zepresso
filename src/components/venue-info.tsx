"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Camera,
  ChevronDown,
  Clock,
  Copy,
  Check,
  MapPin,
  Phone,
  TriangleAlert,
  Wifi,
} from "lucide-react";
import { useState, type ComponentType, type SVGProps } from "react";

import { useMenuContent } from "@/components/menu-content";
import { ZepressoWordmark } from "@/components/zepresso-logo";
import { photoCredits } from "@/data/photo-meta";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/** lucide-react marka ikonlarını içermiyor; glif markanın çizgi kalınlığına uyar. */
function InstagramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Menünün sonundaki mekân bilgileri.
 * Telefon, harita ve Instagram bağlantıları gerçek biçimlerde çalışır.
 */
export function VenueInfo() {
  const reduced = useReducedMotion();
  const { venue } = useMenuContent();

  return (
    <section
      id="mekan"
      aria-labelledby="venue-title"
      className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14"
    >
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Mekân</p>
        <h2
          id="venue-title"
          className="mt-2 text-[clamp(1.5rem,5.6vw,2.15rem)] leading-tight text-ink"
        >
          Zepresso hakkında
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <WifiCard />

          <InfoCard icon={Clock} title="Çalışma saatleri">
            <ul className="space-y-1.5">
              {venue.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-3 text-[0.8rem]">
                  <span className="text-dim">{row.days}</span>
                  <span className="shrink-0 text-ink tabular-nums">
                    {row.open} – {row.close}
                  </span>
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard icon={MapPin} title="Adres">
            <p className="text-[0.82rem] leading-relaxed text-ink/85">
              {venue.address}
            </p>
            <ExternalLink href={venue.mapsUrl}>Haritada aç</ExternalLink>
          </InfoCard>

          <InfoCard icon={Phone} title="Telefon">
            <a
              href={venue.phoneHref}
              className="font-heading text-[1.1rem] text-ink tabular-nums transition-colors duration-300 hover:text-gold"
            >
              {venue.phone}
            </a>
            <p className="mt-1 text-[0.75rem] text-dim">
              Rezervasyon ve paket sipariş için arayabilirsiniz.
            </p>
          </InfoCard>

          <InfoCard icon={InstagramGlyph} title="Instagram">
            <a
              href={venue.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-[1.1rem] text-ink transition-colors duration-300 hover:text-gold"
            >
              {venue.instagram}
            </a>
            <p className="mt-1 text-[0.75rem] text-dim">
              Günün önerileri ve yeni tarifler burada.
            </p>
          </InfoCard>

          <InfoCard icon={TriangleAlert} title="Alerjen uyarısı" tone="warn">
            <p className="text-[0.78rem] leading-relaxed text-dim">
              {venue.allergenNotice}
            </p>
          </InfoCard>
        </div>

        {/* Garsona danışabilirsiniz */}
        <div className="surface-card relative mt-3 overflow-hidden rounded-3xl p-5 sm:p-7">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-10 size-56 rounded-full bg-[radial-gradient(circle,rgba(196,122,69,0.2),transparent_68%)] blur-xl"
          />
          <p className="eyebrow">Yardıma mı ihtiyacınız var?</p>
          <p className="mt-2.5 max-w-[58ch] font-heading text-[1.05rem] leading-relaxed text-ink sm:text-[1.15rem]">
            Garsona danışabilirsiniz.
          </p>
          <p className="mt-2 max-w-[62ch] text-[0.82rem] leading-relaxed text-dim">
            {venue.serviceNote}
          </p>
        </div>

        <PhotoCreditsCard />

        <div className="mt-12 flex flex-col items-center gap-5 border-t border-white/6 pt-10">
          <ZepressoWordmark />
          <p className="max-w-[46ch] text-center text-[0.72rem] leading-relaxed text-dim/60">
            Fiyatlara KDV dahildir. Menü içeriği mevsime ve gün içindeki
            hazırlığa göre değişebilir.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

/**
 * Fotoğraf künyesi.
 *
 * Görseller Unsplash'ten alınıyor; lisans, fotoğrafçının adının ve
 * bağlantısının görünür olmasını istiyor. Ayrıntı gürültü yapmasın diye
 * katlanabilir bir öğe içinde duruyor.
 */
function PhotoCreditsCard() {
  return (
    <details className="surface-card group mt-3 overflow-hidden rounded-2xl">
      <summary className="flex cursor-pointer list-none items-center gap-2 p-4 text-[0.72rem] text-dim transition-colors duration-300 hover:text-ink sm:p-5 [&::-webkit-details-marker]:hidden">
        <Camera className="size-3.5 shrink-0 text-gold/70" strokeWidth={2.2} aria-hidden="true" />
        Ürün fotoğrafları temsilîdir — Unsplash
        <ChevronDown
          className="ml-auto size-4 shrink-0 transition-transform duration-300 group-open:rotate-180"
          strokeWidth={2.2}
          aria-hidden="true"
        />
      </summary>
      <div className="border-t border-white/6 px-4 py-4 sm:px-5">
        <p className="flex flex-wrap gap-x-1.5 gap-y-1 text-[0.7rem] leading-relaxed text-dim/70">
          {photoCredits.map((credit, index) => (
            <span key={credit.authorUrl}>
              <a
                href={credit.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-gold"
              >
                {credit.author}
              </a>
              {index < photoCredits.length - 1 && <span aria-hidden="true"> ·</span>}
            </span>
          ))}
        </p>
      </div>
    </details>
  );
}

function WifiCard() {
  const { venue } = useMenuContent();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(venue.wifi.password);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Pano izni yoksa şifre zaten ekranda görünüyor. */
    }
  };

  return (
    <InfoCard icon={Wifi} title="Wi-Fi">
      <p className="font-heading text-[1.1rem] text-ink">{venue.wifi.network}</p>
      <button
        type="button"
        onClick={copy}
        className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-[0.75rem] font-medium text-dim ring-1 ring-inset ring-white/8 transition-[background-color,color,transform] duration-300 hover:bg-gold/12 hover:text-gold hover:ring-gold/25 active:scale-95"
        aria-label="Wi-Fi şifresini kopyala"
      >
        {copied ? (
          <Check className="size-3.5 text-gold" strokeWidth={2.6} aria-hidden="true" />
        ) : (
          <Copy className="size-3.5" strokeWidth={2.2} aria-hidden="true" />
        )}
        <span className="tabular-nums">{venue.wifi.password}</span>
        <span className="sr-only">{copied ? "Kopyalandı" : "Kopyalamak için dokunun"}</span>
      </button>
    </InfoCard>
  );
}

function InfoCard({
  icon: Icon,
  title,
  tone = "neutral",
  children,
}: {
  icon: IconComponent;
  title: string;
  tone?: "neutral" | "warn";
  children: React.ReactNode;
}) {
  return (
    <div className="surface-card rounded-2xl p-4 sm:p-5">
      <h3
        className={cn(
          "flex items-center gap-2 text-[0.66rem] font-bold tracking-[0.18em] uppercase",
          tone === "warn" ? "text-espresso" : "text-gold",
        )}
      >
        <Icon className="size-3.5" strokeWidth={2.4} aria-hidden="true" />
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2.5 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-gold transition-colors duration-300 hover:text-ink"
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
