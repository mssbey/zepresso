import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { venue } from "@/data/venue";
import "./globals.css";

/** Başlıklar: karakterli, zarif serif. */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

/** Arayüz metinleri: modern, okunaklı sans-serif. */
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zepresso — Menü",
    template: "%s · Zepresso",
  },
  description:
    "Zepresso Alsancak dijital menüsü. Sıcak ve soğuk kahveler, imza içecekler, çaylar, tatlılar ve atıştırmalıklar.",
  applicationName: "Zepresso",
  formatDetection: { telephone: true, address: false, email: false },
  openGraph: {
    title: "Zepresso — Menü",
    description: venue.tagline,
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: false },
};

export const viewport: Viewport = {
  themeColor: "#080A0C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  /* iPhone çentiği: env(safe-area-inset-*) değerlerinin dolması için gerekli. */
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`dark ${fraunces.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-svh bg-void text-ink">
        <a
          href="#menu-icerigi"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#14100a]"
        >
          İçeriğe geç
        </a>
        {children}
      </body>
    </html>
  );
}
