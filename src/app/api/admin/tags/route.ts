import { NextResponse } from "next/server";

import { readCategoryData, writeCategoryData } from "@/lib/admin/content-store";
import { ApiError, handleApiError, parseBody } from "@/lib/admin/api-utils";
import { tagInputSchema } from "@/lib/admin/schemas";
import { slugify, uniqueSlug } from "@/lib/admin/slug";

export async function GET() {
  const { tags } = await readCategoryData();
  return NextResponse.json(tags);
}

export async function POST(request: Request) {
  try {
    const input = await parseBody(request, tagInputSchema);
    const data = await readCategoryData();
    const existingIds = new Set(Object.keys(data.tags));

    const id = input.id ? input.id : uniqueSlug(slugify(input.label), existingIds);
    if (existingIds.has(id)) {
      throw new ApiError(`"${id}" kimliği zaten kullanılıyor.`, 409);
    }

    const tag = { ...input, id };
    await writeCategoryData({ ...data, tags: { ...data.tags, [id]: tag } });

    return NextResponse.json(tag, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
