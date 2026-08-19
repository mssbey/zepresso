import { NextResponse } from "next/server";

import { readProducts, writeProducts } from "@/lib/admin/content-store";
import { ApiError, handleApiError, parseBody } from "@/lib/admin/api-utils";
import { productInputSchema } from "@/lib/admin/schemas";
import { slugify, uniqueSlug } from "@/lib/admin/slug";

export async function GET() {
  const products = await readProducts();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const input = await parseBody(request, productInputSchema);
    const products = await readProducts();
    const existingIds = new Set(products.map((product) => product.id));

    const id = input.id ? input.id : uniqueSlug(slugify(input.name), existingIds);
    if (existingIds.has(id)) {
      throw new ApiError(`"${id}" kimliği zaten kullanılıyor.`, 409);
    }

    const product = { ...input, id };
    await writeProducts([...products, product]);

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
