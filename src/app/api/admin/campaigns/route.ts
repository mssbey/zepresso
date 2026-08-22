import { NextResponse } from "next/server";

import { handleApiError, parseBody } from "@/lib/admin/api-utils";
import { campaignsSchema } from "@/lib/admin/schemas";
import { readCampaigns, writeCampaigns } from "@/lib/admin/content-store";

export async function GET() {
  return NextResponse.json(await readCampaigns());
}

export async function PUT(request: Request) {
  try {
    const campaigns = await parseBody(request, campaignsSchema);
    await writeCampaigns(campaigns);
    return NextResponse.json(campaigns);
  } catch (error) {
    return handleApiError(error);
  }
}
