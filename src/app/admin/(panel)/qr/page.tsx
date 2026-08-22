import { QrCodeCard } from "@/components/admin/qr-code-card";

export default function AdminQrPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="eyebrow">Paylaşım</span>
        <h1 className="mt-1 font-heading text-3xl font-medium text-ink">QR Kod</h1>
      </div>
      <QrCodeCard />
    </div>
  );
}
