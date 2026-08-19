import { put } from "@vercel/blob";

import { NextResponse } from "next/server";

import { ApiError, handleApiError } from "@/lib/admin/api-utils";

const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

const ID_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const productId = form.get("productId");
    const file = form.get("file");

    if (typeof productId !== "string" || !ID_PATTERN.test(productId)) {
      throw new ApiError("Geçersiz ürün kimliği.");
    }
    if (!(file instanceof File)) {
      throw new ApiError("Dosya bulunamadı.");
    }
    if (file.size > MAX_SIZE) {
      throw new ApiError("Dosya 5 MB'tan büyük olamaz.");
    }
    const ext = ALLOWED_TYPES[file.type];
    if (!ext) {
      throw new ApiError("Yalnızca JPEG, PNG veya WebP yüklenebilir.");
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const blob = await put(`menu/photos/${productId}.${ext}`, buffer, {
      access: "public",
      contentType: file.type,
    });

    return NextResponse.json({ path: blob.url });
  } catch (error) {
    return handleApiError(error);
  }
}
