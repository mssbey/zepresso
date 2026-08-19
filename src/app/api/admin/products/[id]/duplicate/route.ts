import { NextResponse } from "next/server";

import { readProducts, writeProducts } from "@/lib/admin/content-store";
import { ApiError, handleApiError } from "@/lib/admin/api-utils";
import { slugify, uniqueSlug } from "@/lib/admin/slug";

type Params = { params: Promise<{ id: string }> };

export async function POST(_request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const products = await readProducts();
    const source = products.find((item) => item.id === id);
    if (!source) {
      throw new ApiError("Ürün bulunamadı.", 404);
    }

    const existingIds = new Set(products.map((item) => item.id));
    const newId = uniqueSlug(slugify(`${source.name}-kopya`), existingIds);
    const copy = { ...source, id: newId, name: `${source.name} (Kopya)`, featured: false };

    await writeProducts([...products, copy]);
    return NextResponse.json(copy, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
