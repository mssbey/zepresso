import { NextResponse } from "next/server";

import { readCategoryData, writeCategoryData } from "@/lib/admin/content-store";
import { ApiError, handleApiError, parseBody } from "@/lib/admin/api-utils";
import { PRODUCT_CATEGORY_IDS, categoriesReorderSchema } from "@/lib/admin/schemas";

const ALL_CATEGORY_IDS = new Set(["one-cikanlar", ...PRODUCT_CATEGORY_IDS]);

export async function GET() {
  const data = await readCategoryData();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  try {
    const { categories } = await parseBody(request, categoriesReorderSchema);

    const ids = categories.map((category) => category.id);
    const idSet = new Set(ids);
    if (idSet.size !== ids.length || idSet.size !== ALL_CATEGORY_IDS.size) {
      throw new ApiError("Kategori kimlikleri değiştirilemez veya kaybedilemez, yalnızca sıralanabilir/düzenlenebilir.");
    }
    for (const id of idSet) {
      if (!ALL_CATEGORY_IDS.has(id)) {
        throw new ApiError(`Bilinmeyen kategori kimliği: ${id}`);
      }
    }
    if (categories[0]?.id !== "one-cikanlar") {
      throw new ApiError('"Öne Çıkanlar" kategorisi her zaman ilk sırada olmalı.');
    }

    const current = await readCategoryData();
    await writeCategoryData({ ...current, categories });

    return NextResponse.json({ categories });
  } catch (error) {
    return handleApiError(error);
  }
}
