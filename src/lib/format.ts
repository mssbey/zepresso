const priceFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/** 185 → "185 ₺" */
export function formatPrice(value: number) {
  return `${priceFormatter.format(value)} ₺`;
}

/**
 * Türkçe karakterleri arama için normalleştirir.
 * "İçecek" ve "icecek" aynı sonucu vermeli.
 */
export function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replaceAll("â", "a")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}
