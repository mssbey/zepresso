import { z } from "zod";

const CATEGORY_IDS = [
  "one-cikanlar",
  "sicak-kahveler",
  "soguk-kahveler",
  "imza-icecekler",
  "caylar",
  "tatlilar",
  "atistirmaliklar",
] as const;

export const PRODUCT_CATEGORY_IDS = [
  "sicak-kahveler",
  "soguk-kahveler",
  "imza-icecekler",
  "caylar",
  "tatlilar",
  "atistirmaliklar",
] as const;

const idSchema = z
  .string()
  .min(1, "Kimlik gerekli")
  .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Kimlik yalnızca küçük harf, rakam ve tire içerebilir");

export const productArtSchema = z.object({
  vessel: z.enum([
    "espresso",
    "cappuccinoCup",
    "mug",
    "latteGlass",
    "icedGlass",
    "teaGlass",
    "teacup",
    "cheesecakeSlice",
    "cakeSlice",
    "plated",
    "sandwich",
    "croissant",
    "bowl",
  ]),
  liquid: z.tuple([z.string(), z.string()]),
  crema: z.string().optional(),
  light: z.string().min(1),
  lightFrom: z.enum(["left", "right"]),
  steam: z.boolean().optional(),
  garnish: z
    .enum(["beans", "cocoa", "cinnamon", "mint", "citrus", "cream", "pistachio", "berry", "none"])
    .optional(),
  seed: z.number().min(0).max(1),
});

export const productSchema = z.object({
  id: idSchema,
  name: z.string().min(1, "Ürün adı gerekli"),
  categoryId: z.enum(PRODUCT_CATEGORY_IDS),
  price: z.number().positive("Fiyat 0'dan büyük olmalı"),
  summary: z.string().min(1, "Kısa tanım gerekli"),
  description: z.string().min(1, "Açıklama gerekli"),
  ingredients: z.array(z.string().min(1)),
  allergens: z.array(z.string().min(1)),
  calories: z.number().positive().optional(),
  tags: z.array(z.string()),
  badge: z.string().optional(),
  featured: z.boolean().optional(),
  serving: z.string().optional(),
  image: z.string().min(1),
  art: productArtSchema,
});

export const productInputSchema = productSchema.omit({ id: true }).extend({
  id: idSchema.optional(),
});

export const categorySchema = z.object({
  id: z.enum(CATEGORY_IDS),
  name: z.string().min(1),
  eyebrow: z.string().min(1),
  description: z.string().min(1),
});

export const categoriesReorderSchema = z.object({
  categories: z.array(categorySchema).min(1),
});

export const tagSchema = z.object({
  id: idSchema,
  label: z.string().min(1),
  tone: z.enum(["leaf", "ember", "ice", "amber", "copper"]),
});

export const tagInputSchema = tagSchema.omit({ id: true }).extend({
  id: idSchema.optional(),
});

export const badgeSchema = z.object({
  id: idSchema,
  label: z.string().min(1),
});

export const badgeInputSchema = badgeSchema.omit({ id: true }).extend({
  id: idSchema.optional(),
});

export const venueSchema = z.object({
  name: z.string().min(1),
  tagline: z.string().min(1),
  district: z.string().min(1),
  city: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(1),
  phoneHref: z.string().min(1),
  instagram: z.string().min(1),
  instagramUrl: z.string().min(1),
  mapsUrl: z.string().min(1),
  wifi: z.object({ network: z.string().min(1), password: z.string().min(1) }),
  hours: z
    .array(
      z.object({
        days: z.string().min(1),
        open: z.string().min(1),
        close: z.string().min(1),
      }),
    )
    .min(1),
  todayClosing: z.string().min(1),
  allergenNotice: z.string().min(1),
  serviceNote: z.string().min(1),
});

export const campaignSchema = z.object({
  id: idSchema,
  title: z.string().min(1, "Paket adı gerekli"),
  description: z.string().min(1, "Açıklama gerekli"),
  price: z.number().positive("Fiyat 0'dan büyük olmalı"),
  originalPrice: z.number().positive("Eski fiyat 0'dan büyük olmalı").optional(),
  badge: z.string().min(1, "Rozet metni gerekli"),
  image: z.string().min(1, "Görsel gerekli"),
  active: z.boolean(),
  productIds: z.array(idSchema).optional(),
  startsAt: z.string().optional(),
  endsAt: z.string().optional(),
  daysOfWeek: z.array(z.number().int().min(0).max(6)).min(1, "En az bir gün seçin").optional(),
  dailyStart: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Başlangıç saati geçersiz").optional(),
  dailyEnd: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Bitiş saati geçersiz").optional(),
}).superRefine((campaign, context) => {
  if (campaign.originalPrice !== undefined && campaign.originalPrice <= campaign.price) {
    context.addIssue({
      code: "custom",
      path: ["originalPrice"],
      message: "Eski fiyat kampanya fiyatından büyük olmalı",
    });
  }
  if (Boolean(campaign.dailyStart) !== Boolean(campaign.dailyEnd)) {
    context.addIssue({
      code: "custom",
      path: ["dailyEnd"],
      message: "Günlük başlangıç ve bitiş saatini birlikte girin",
    });
  }
  if (
    campaign.startsAt &&
    campaign.endsAt &&
    new Date(campaign.endsAt).getTime() <= new Date(campaign.startsAt).getTime()
  ) {
    context.addIssue({
      code: "custom",
      path: ["endsAt"],
      message: "Bitiş tarihi başlangıçtan sonra olmalı",
    });
  }
});

export const campaignsSchema = z.array(campaignSchema);

export type ProductInput = z.infer<typeof productInputSchema>;
export type TagInput = z.infer<typeof tagInputSchema>;
export type BadgeInput = z.infer<typeof badgeInputSchema>;
export type CampaignInput = z.infer<typeof campaignSchema>;
