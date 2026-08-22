"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Download, QrCode as QrCodeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/admin/section-header";
import { toast } from "@/components/ui/toast";

const QR_SIZE = 640;

export function QrCodeCard() {
  const [url, setUrl] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setUrl(window.location.origin);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !url) return;
    QRCode.toCanvas(canvas, url, {
      width: QR_SIZE,
      margin: 2,
      color: { dark: "#171009", light: "#ffffff" },
    }).catch(() => toast.error("QR kod oluşturulamadı. Adresi kontrol edin."));
  }, [url]);

  function downloadPng() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "zepresso-menu-qr.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  async function downloadSvg() {
    try {
      const svg = await QRCode.toString(url, {
        type: "svg",
        margin: 2,
        color: { dark: "#171009", light: "#ffffff" },
      });
      const blob = new Blob([svg], { type: "image/svg+xml" });
      const href = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "zepresso-menu-qr.svg";
      link.href = href;
      link.click();
      URL.revokeObjectURL(href);
    } catch {
      toast.error("QR kod oluşturulamadı. Adresi kontrol edin.");
    }
  }

  return (
    <section className="surface-card overflow-hidden rounded-2xl">
      <div className="border-b border-line px-5 py-4">
        <SectionHeader icon={QrCodeIcon} title="Menü QR Kodu" />
      </div>

      <div className="grid gap-6 p-5 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label>Yönlendirilecek adres</Label>
            <Input
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://zepresso.example.com"
            />
            <p className="text-xs leading-5 text-dim">
              Müşteriler bu QR kodu okuttuğunda bu adrese yönlendirilir. Varsayılan olarak
              sitenin şu anki adresi kullanılır.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="button" onClick={downloadPng}>
              <Download className="size-4" /> PNG indir
            </Button>
            <Button type="button" variant="outline" onClick={downloadSvg}>
              <Download className="size-4" /> SVG indir
            </Button>
          </div>
          <p className="text-xs leading-5 text-dim">
            PNG baskı ve paylaşım için, SVG ise tabela veya büyük format baskılar için önerilir.
          </p>
        </div>

        <div className="grid place-items-center rounded-xl border border-white/8 bg-white p-4">
          <canvas ref={canvasRef} className="size-full max-w-56 rounded-md" />
        </div>
      </div>
    </section>
  );
}
