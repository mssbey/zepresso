const TURKISH_MAP: Record<string, string> = {
  ç: "c",
  Ç: "c",
  ğ: "g",
  Ğ: "g",
  ı: "i",
  I: "i",
  İ: "i",
  ö: "o",
  Ö: "o",
  ş: "s",
  Ş: "s",
  ü: "u",
  Ü: "u",
};

/** Türkçe karakterleri sadeleştirip URL/dosya-adı güvenli kebab-case üretir. */
export function slugify(input: string): string {
  const folded = input.replace(/[çÇğĞıIİöÖşŞüÜ]/g, (char) => TURKISH_MAP[char] ?? char);
  return folded
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Verilen slug zaten kullanılıyorsa `-2`, `-3` ... ekleyerek benzersizleştirir. */
export function uniqueSlug(base: string, existing: Set<string>): string {
  const root = base || "oge";
  if (!existing.has(root)) return root;
  let i = 2;
  while (existing.has(`${root}-${i}`)) i += 1;
  return `${root}-${i}`;
}
