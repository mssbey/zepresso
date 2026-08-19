/**
 * Admin panelden içerik kaydedildiğinde Vercel'de yeni bir deploy tetikler.
 * `src/data/*.ts` statik import edildiği için, veri Blob'da kalıcı olsa bile
 * siteye yansıması yeni bir build gerektiriyor — bu build sırasında
 * `scripts/sync-content.mjs` Blob'daki güncel veriyi `src/data/*.ts`'e yazar.
 *
 * Yalnızca Vercel üzerinde çalışırken tetiklenir (yerel `next dev`'de
 * `content-store.ts` zaten dosyayı doğrudan yazıyor, redeploy'a gerek yok).
 */
export async function triggerRedeploy() {
  const url = process.env.DEPLOY_HOOK_URL;
  if (!process.env.VERCEL || !url) {
    return;
  }
  try {
    await fetch(url, { method: "POST" });
  } catch {
    // Redeploy tetiklenemedi diye admin isteği başarısız gösterilmez.
  }
}
