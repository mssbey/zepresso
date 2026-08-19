import { createHmac, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE = "zepresso_admin_session";
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 saat

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET tanımlı değil. .env.local dosyasına bir değer ekleyin (bkz. .env.local.example).",
    );
  }
  return secret;
}

function sign(value: string): string {
  return createHmac("sha256", getSecret()).update(value).digest("base64url");
}

/** Süresi `SESSION_TTL_MS` sonra dolan, HMAC ile imzalanmış oturum belirteci üretir. */
export function createSessionToken(): string {
  const payload = String(Date.now() + SESSION_TTL_MS);
  const signature = sign(payload);
  return `${payload}.${signature}`;
}

/** Belirtecin imzasını ve süresini doğrular. */
export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = sign(payload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;

  const expiresAt = Number(payload);
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) return false;

  return true;
}

/** Sabit zamanlı şifre karşılaştırması — zamanlama saldırılarına karşı. */
export function verifyPassword(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    throw new Error(
      "ADMIN_PASSWORD tanımlı değil. .env.local dosyasına bir değer ekleyin (bkz. .env.local.example).",
    );
  }
  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  if (a.length !== b.length) {
    // Uzunluk sızıntısını önlemek için sabit zamanlı bir karşılaştırma yine de çalıştırılır.
    timingSafeEqual(Buffer.alloc(b.length), b);
    return false;
  }
  return timingSafeEqual(a, b);
}

const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 8;
const WINDOW_MS = 5 * 60 * 1000;

/** Basit bellek-içi hız sınırlayıcı — süreç yeniden başlayınca sıfırlanır. */
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 0, resetAt: now + WINDOW_MS });
    return false;
  }
  return entry.count >= MAX_ATTEMPTS;
}

export function registerFailedAttempt(key: string): void {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return;
  }
  entry.count += 1;
}

export function clearAttempts(key: string): void {
  attempts.delete(key);
}
