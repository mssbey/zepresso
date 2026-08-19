import { NextResponse } from "next/server";
import type { ZodType } from "zod";

export class ApiError extends Error {
  status: number;
  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
  }
}

/** İstek gövdesini JSON olarak okuyup şemaya göre doğrular; hatada `ApiError` fırlatır. */
export async function parseBody<T>(request: Request, schema: ZodType<T>): Promise<T> {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    throw new ApiError("Geçersiz JSON gövdesi.");
  }

  const result = schema.safeParse(json);
  if (!result.success) {
    const message = result.error.issues.map((issue) => issue.message).join(", ");
    throw new ApiError(message || "Doğrulama hatası.");
  }
  return result.data;
}

export function handleApiError(error: unknown): NextResponse {
  if (error instanceof ApiError) {
    return NextResponse.json({ error: error.message }, { status: error.status });
  }
  console.error(error);
  return NextResponse.json({ error: "Beklenmeyen bir sunucu hatası oluştu." }, { status: 500 });
}
