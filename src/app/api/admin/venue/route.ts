import { NextResponse } from "next/server";

import { readVenue, writeVenue } from "@/lib/admin/content-store";
import { handleApiError, parseBody } from "@/lib/admin/api-utils";
import { venueSchema } from "@/lib/admin/schemas";

export async function GET() {
  const venue = await readVenue();
  return NextResponse.json(venue);
}

export async function PUT(request: Request) {
  try {
    const venue = await parseBody(request, venueSchema);
    await writeVenue(venue);
    return NextResponse.json(venue);
  } catch (error) {
    return handleApiError(error);
  }
}
