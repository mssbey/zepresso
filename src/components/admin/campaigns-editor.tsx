"use client";

import { useRef, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUp,
  CalendarClock,
  ImagePlus,
  Link2,
  Loader2,
  Megaphone,
  Plus,
  Save,
  Trash2,
  UploadCloud,
  X,
} from "lucide-react";

import type { Campaign, Product } from "@/types/menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/admin/section-header";
import { toast } from "@/components/ui/toast";

const DAYS = [
  { value: 1, label: "Pzt" },
  { value: 2, label: "Sal" },
  { value: 3, label: "Çar" },
  { value: 4, label: "Per" },
  { value: 5, label: "Cum" },
  { value: 6, label: "Cmt" },
  { value: 0, label: "Paz" },
] as const;

export function CampaignsEditor({
  initialCampaigns,
  products,
}: {
  initialCampaigns: Campaign[];
  products: Product[];
}) {
  const [campaigns, setCampaigns] = useState(() => initialCampaigns.map((item) => ({ ...item })));
  const [saving, setSaving] = useState(false);

  function update(index: number, patch: Partial<Campaign>) {
    setCampaigns((current) =>
      current.map((campaign, itemIndex) =>
        itemIndex === index ? { ...campaign, ...patch } : campaign,
      ),
    );
  }

  function addCampaign() {
    setCampaigns((current) => [
      ...current,
      {
        id: `paket-${Date.now()}`,
        title: "Yeni Paket",
        description: "Paket içeriğini ve fırsatın detaylarını buraya yazın.",
        price: 300,
        originalPrice: 360,
        badge: "Özel Fırsat",
        image: "",
        active: true,
        productIds: [],
        daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
        dailyStart: "00:00",
        dailyEnd: "23:59",
      },
    ]);
  }

  function toggleDay(index: number, day: number) {
    const selected = campaigns[index].daysOfWeek ?? [];
    update(index, {
      daysOfWeek: selected.includes(day)
        ? selected.filter((value) => value !== day)
        : [...selected, day].sort(),
    });
  }

  function addProduct(index: number, productId: string) {
    if (!productId) return;
    const selected = campaigns[index].productIds ?? [];
    if (!selected.includes(productId)) update(index, { productIds: [...selected, productId] });
  }

  function removeProduct(index: number, productId: string) {
    update(index, {
      productIds: (campaigns[index].productIds ?? []).filter((id) => id !== productId),
    });
  }

  function removeCampaign(index: number) {
    if (!window.confirm("Bu kampanyayı silmek istediğinize emin misiniz?")) return;
    setCampaigns((current) => current.filter((_, itemIndex) => itemIndex !== index));
  }

  function move(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= campaigns.length) return;
    setCampaigns((current) => {
      const next = [...current];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  async function save() {
    setSaving(true);
    try {
      const response = await fetch("/api/admin/campaigns", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(campaigns),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.error ?? "Kampanyalar kaydedilemedi.");
        return;
      }
      setCampaigns(data);
      toast.success("Kampanyalar kaydedildi. Yayına alınmak üzere hazırlanıyor.");
    } catch {
      toast.error("Sunucuya ulaşılamadı.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      {campaigns.length === 0 && (
        <div className="surface-card grid min-h-64 place-items-center rounded-2xl border border-dashed border-white/10 p-8 text-center">
          <div>
            <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-gold/10 text-gold">
              <Megaphone className="size-5" />
            </span>
            <h2 className="mt-4 font-heading text-xl text-ink">Henüz kampanya yok</h2>
            <p className="mt-1 text-sm text-dim">İlk açılış fırsatınızı birkaç dakikada hazırlayın.</p>
          </div>
        </div>
      )}

      {campaigns.map((campaign, index) => (
        <section key={campaign.id} className="surface-card overflow-hidden rounded-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
            <SectionHeader icon={Megaphone} title={`Paket ${index + 1}`} />
            <div className="flex items-center gap-1.5">
              <span className="mr-2 text-xs text-dim">Menüde göster</span>
              <Switch
                checked={campaign.active}
                onCheckedChange={(checked) => update(index, { active: checked })}
                aria-label={`${campaign.title} kampanyasını göster`}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                disabled={index === 0}
                onClick={() => move(index, -1)}
                aria-label="Yukarı taşı"
              >
                <ArrowUp />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                disabled={index === campaigns.length - 1}
                onClick={() => move(index, 1)}
                aria-label="Aşağı taşı"
              >
                <ArrowDown />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="text-dim hover:text-destructive"
                onClick={() => removeCampaign(index)}
                aria-label="Kampanyayı sil"
              >
                <Trash2 />
              </Button>
            </div>
          </div>

          <div className="grid gap-6 p-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="grid content-start gap-4 sm:grid-cols-2">
              <Field label="Paket adı">
                <Input
                  value={campaign.title}
                  onChange={(event) => update(index, { title: event.target.value })}
                  placeholder="Kahve + Tatlı Keyfi"
                />
              </Field>
              <Field label="Fiyat (₺)">
                <Input
                  type="number"
                  min="1"
                  step="1"
                  value={campaign.price || ""}
                  onChange={(event) => update(index, { price: Number(event.target.value) })}
                />
              </Field>
              <Field label="Eski fiyat (₺)">
                <Input
                  type="number"
                  min="1"
                  step="1"
                  value={campaign.originalPrice ?? ""}
                  onChange={(event) =>
                    update(index, {
                      originalPrice: event.target.value ? Number(event.target.value) : undefined,
                    })
                  }
                  placeholder="360"
                />
              </Field>
              <Field label="Üst rozet">
                <Input
                  value={campaign.badge}
                  onChange={(event) => update(index, { badge: event.target.value })}
                  placeholder="Günün Fırsatı"
                />
              </Field>
              <Field label="Görsel yolu / URL">
                <Input
                  value={campaign.image}
                  onChange={(event) => update(index, { image: event.target.value })}
                  placeholder="/campaigns/paket.png"
                />
              </Field>
              <Field label="Açıklama" className="sm:col-span-2">
                <Textarea
                  rows={4}
                  value={campaign.description}
                  onChange={(event) => update(index, { description: event.target.value })}
                  placeholder="Pakette neler olduğunu anlatın…"
                />
              </Field>

              <div className="sm:col-span-2 rounded-xl border border-white/8 bg-black/10 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-ink">
                  <Link2 className="size-4 text-gold" /> Paketteki ürünler
                </div>
                <p className="mt-1 text-xs text-dim">
                  Müşteri bu ürünlere kampanya kartından doğrudan ulaşabilir.
                </p>
                <select
                  value=""
                  onChange={(event) => addProduct(index, event.target.value)}
                  className="mt-3 h-9 w-full rounded-lg border border-input bg-[#111418] px-3 text-sm text-ink outline-none focus:border-gold"
                >
                  <option value="">Ürün ekle…</option>
                  {products
                    .filter((product) => !(campaign.productIds ?? []).includes(product.id))
                    .map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name} · {product.price} ₺
                      </option>
                    ))}
                </select>
                {(campaign.productIds ?? []).length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(campaign.productIds ?? []).map((productId) => {
                      const product = products.find((item) => item.id === productId);
                      return (
                        <span
                          key={productId}
                          className="inline-flex items-center gap-1.5 rounded-full border border-gold/15 bg-gold/8 py-1 pr-1.5 pl-3 text-xs text-ink"
                        >
                          {product?.name ?? productId}
                          <button
                            type="button"
                            onClick={() => removeProduct(index, productId)}
                            className="grid size-5 place-items-center rounded-full text-dim hover:bg-white/10 hover:text-ink"
                            aria-label={`${product?.name ?? productId} ürününü kaldır`}
                          >
                            <X className="size-3" />
                          </button>
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="sm:col-span-2 rounded-xl border border-white/8 bg-black/10 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-ink">
                  <CalendarClock className="size-4 text-gold" /> Yayın planı
                </div>
                <p className="mt-1 text-xs leading-5 text-dim">
                  Mutlak tarih aralığını, haftanın günlerini ve günlük saat aralığını birlikte kullanabilirsiniz.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Field label="Başlangıç tarihi (opsiyonel)">
                    <Input
                      type="datetime-local"
                      value={campaign.startsAt ?? ""}
                      onChange={(event) => update(index, { startsAt: event.target.value || undefined })}
                    />
                  </Field>
                  <Field label="Bitiş tarihi (opsiyonel)">
                    <Input
                      type="datetime-local"
                      value={campaign.endsAt ?? ""}
                      onChange={(event) => update(index, { endsAt: event.target.value || undefined })}
                    />
                  </Field>
                  <Field label="Her gün başlangıç">
                    <Input
                      type="time"
                      value={campaign.dailyStart ?? ""}
                      onChange={(event) => update(index, { dailyStart: event.target.value || undefined })}
                    />
                  </Field>
                  <Field label="Her gün bitiş">
                    <Input
                      type="time"
                      value={campaign.dailyEnd ?? ""}
                      onChange={(event) => update(index, { dailyEnd: event.target.value || undefined })}
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Label>Gösterilecek günler</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {DAYS.map((day) => {
                      const selected = (campaign.daysOfWeek ?? []).includes(day.value);
                      return (
                        <button
                          key={day.value}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => toggleDay(index, day.value)}
                          className={
                            selected
                              ? "rounded-lg bg-gold px-3 py-1.5 text-xs font-semibold text-[#171009]"
                              : "rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-dim hover:border-gold/25 hover:text-ink"
                          }
                        >
                          {day.label}
                        </button>
                      );
                    })}
                  </div>
                  {(campaign.daysOfWeek ?? []).length === 0 && (
                    <p className="mt-2 text-xs text-[#e7a66d]">En az bir gün seçin.</p>
                  )}
                </div>
              </div>
            </div>

            <CampaignImageUploader
              campaign={campaign}
              onChange={(image) => update(index, { image })}
            />
          </div>
        </section>
      ))}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button type="button" variant="outline" onClick={addCampaign}>
          <Plus className="size-4" /> Yeni paket ekle
        </Button>
        <Button type="button" onClick={save} disabled={saving}>
          {saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}
          Tümünü kaydet
        </Button>
      </div>
    </div>
  );
}

function CampaignImageUploader({
  campaign,
  onChange,
}: {
  campaign: Campaign;
  onChange: (path: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function upload(file: File) {
    setUploading(true);
    try {
      const form = new FormData();
      form.set("campaignId", campaign.id);
      form.set("file", file);
      const response = await fetch("/api/admin/campaigns/upload", { method: "POST", body: form });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.error ?? "Görsel yüklenemedi.");
        return;
      }
      onChange(data.path);
      toast.success("Kampanya görseli yüklendi.");
    } catch {
      toast.error("Görsel yüklenemedi.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <Label>Görsel önizleme</Label>
      <div className="group relative mt-1.5 aspect-[4/3] overflow-hidden rounded-[1.25rem_1.25rem_2.75rem_1.25rem] border border-white/10 bg-black/25">
        {campaign.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={campaign.image} alt="" className="size-full object-cover" />
        ) : (
          <div className="grid size-full place-items-center text-dim">
            <ImagePlus className="size-8" />
          </div>
        )}
        <button
          type="button"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
          className="absolute inset-0 flex items-center justify-center gap-2 bg-black/20 text-sm font-medium text-white opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
        >
          {uploading ? <Loader2 className="size-4 animate-spin" /> : <UploadCloud className="size-4" />}
          {uploading ? "Yükleniyor…" : "Görsel yükle"}
        </button>
      </div>
      <p className="mt-2 text-xs leading-5 text-dim">JPEG, PNG veya WebP · en fazla 5 MB · 4:3 önerilir</p>
      <input
        ref={inputRef}
        className="hidden"
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) void upload(file);
          event.target.value = "";
        }}
      />
    </div>
  );
}

function Field({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <Label>{label}</Label>
      {children}
    </div>
  );
}
