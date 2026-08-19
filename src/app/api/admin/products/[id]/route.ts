import { NextResponse } from "next/server";

import { readProducts, writeProducts } from "@/lib/admin/content-store";
import { ApiError, handleApiError, parseBody } from "@/lib/admin/api-utils";
import { productSchema } from "@/lib/admin/schemas";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const products = await readProducts();
  const product = products.find((item) => item.id === id);
  if (!product) {
    return NextResponse.json({ error: "Ürün bulunamadı." }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const input = await parseBody(request, productSchema);
    if (input.id !== id) {
      throw new ApiError("Kimlik değiştirilemez.", 400);
    }

    const products = await readProducts();
    const index = products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new ApiError("Ürün bulunamadı.", 404);
    }

    const next = [...products];
    next[index] = input;
    await writeProducts(next);

    return NextResponse.json(input);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const products = await readProducts();
    const next = products.filter((item) => item.id !== id);
    if (next.length === products.length) {
      throw new ApiError("Ürün bulunamadı.", 404);
    }
    await writeProducts(next);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleApiError(error);
  }
}
