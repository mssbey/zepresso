import { put } from "@vercel/blob";

import { NextResponse } from "next/server";

import { readProducts, writeProducts } from "@/lib/admin/content-store";
import { ApiError, handleApiError } from "@/lib/admin/api-utils";
import { buildScene } from "@/lib/server/art-render.js";

type Params = { params: Promise<{ id: string }> };

export async function POST(_request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const products = await readProducts();
    const index = products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new ApiError("Ürün bulunamadı.", 404);
    }

    const svg = buildScene(products[index]);
    const blob = await put(`menu/${id}.svg`, svg, {
      access: "public",
      contentType: "image/svg+xml",
    });

    const next = [...products];
    next[index] = { ...next[index], image: blob.url };
    await writeProducts(next);

    return NextResponse.json({ ok: true, path: blob.url });
  } catch (error) {
    return handleApiError(error);
  }
}
