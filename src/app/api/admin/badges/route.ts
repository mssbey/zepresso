import { NextResponse } from "next/server";

import { readCategoryData, writeCategoryData } from "@/lib/admin/content-store";
import { ApiError, handleApiError, parseBody } from "@/lib/admin/api-utils";
import { badgeInputSchema } from "@/lib/admin/schemas";
import { slugify, uniqueSlug } from "@/lib/admin/slug";

export async function GET() {
  const { badges } = await readCategoryData();
  return NextResponse.json(badges);
}

export async function POST(request: Request) {
  try {
    const input = await parseBody(request, badgeInputSchema);
    const data = await readCategoryData();
    const existingIds = new Set(Object.keys(data.badges));

    const id = input.id ? input.id : uniqueSlug(slugify(input.label), existingIds);
    if (existingIds.has(id)) {
      throw new ApiError(`"${id}" kimliği zaten kullanılıyor.`, 409);
    }

    const badge = { ...input, id };
    await writeCategoryData({ ...data, badges: { ...data.badges, [id]: badge } });

    return NextResponse.json(badge, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
