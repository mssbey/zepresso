import { NextResponse } from "next/server";

import { readCategoryData, removeBadgeFromProducts, writeCategoryData } from "@/lib/admin/content-store";
import { ApiError, handleApiError, parseBody } from "@/lib/admin/api-utils";
import { badgeSchema } from "@/lib/admin/schemas";

type Params = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const input = await parseBody(request, badgeSchema);
    if (input.id !== id) {
      throw new ApiError("Kimlik değiştirilemez.", 400);
    }

    const data = await readCategoryData();
    if (!data.badges[id]) {
      throw new ApiError("Rozet bulunamadı.", 404);
    }

    await writeCategoryData({ ...data, badges: { ...data.badges, [id]: input } });
    return NextResponse.json(input);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const data = await readCategoryData();
    if (!data.badges[id]) {
      throw new ApiError("Rozet bulunamadı.", 404);
    }

    const nextBadges = { ...data.badges };
    delete nextBadges[id];
    await writeCategoryData({ ...data, badges: nextBadges });
    await removeBadgeFromProducts(id);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleApiError(error);
  }
}
