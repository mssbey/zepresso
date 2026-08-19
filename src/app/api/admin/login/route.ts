import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

import {
  SESSION_COOKIE,
  clearAttempts,
  createSessionToken,
  isRateLimited,
  registerFailedAttempt,
  verifyPassword,
} from "@/lib/admin/auth";

export async function POST(request: Request) {
  const headerList = await headers();
  const key = headerList.get("x-forwarded-for") ?? "local";

  if (isRateLimited(key)) {
    return NextResponse.json(
      { error: "Çok fazla başarısız deneme. Birkaç dakika sonra tekrar deneyin." },
      { status: 429 },
    );
  }

  let password: unknown;
  try {
    const body = await request.json();
    password = body?.password;
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  if (typeof password !== "string" || password.length === 0) {
    return NextResponse.json({ error: "Şifre gerekli." }, { status: 400 });
  }

  if (!verifyPassword(password)) {
    registerFailedAttempt(key);
    return NextResponse.json({ error: "Şifre hatalı." }, { status: 401 });
  }

  clearAttempts(key);

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return NextResponse.json({ ok: true });
}
