import { NextResponse } from "next/server";

import { readCategoryData, removeTagFromProducts, writeCategoryData } from "@/lib/admin/content-store";
import { ApiError, handleApiError, parseBody } from "@/lib/admin/api-utils";
import { tagSchema } from "@/lib/admin/schemas";

type Params = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const input = await parseBody(request, tagSchema);
    if (input.id !== id) {
      throw new ApiError("Kimlik değiştirilemez.", 400);
    }

    const data = await readCategoryData();
    if (!data.tags[id]) {
      throw new ApiError("Etiket bulunamadı.", 404);
    }

    await writeCategoryData({ ...data, tags: { ...data.tags, [id]: input } });
    return NextResponse.json(input);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const data = await readCategoryData();
    if (!data.tags[id]) {
      throw new ApiError("Etiket bulunamadı.", 404);
    }

    const nextTags = { ...data.tags };
    delete nextTags[id];
    await writeCategoryData({ ...data, tags: nextTags });
    await removeTagFromProducts(id);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleApiError(error);
  }
}
