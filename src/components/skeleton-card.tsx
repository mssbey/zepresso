import { cn } from "@/lib/utils";

/**
 * Yükleme iskeleti — arama sonuçları hesaplanırken ve görseller inerken
 * gerçek kartla aynı yüksekliği kaplar, böylece düzen kaymaz.
 */
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "surface-card flex min-h-[136px] items-stretch overflow-hidden rounded-[1.35rem] sm:min-h-[148px]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="min-w-0 flex-1 space-y-2.5 p-3.5 sm:p-4">
        <Shimmer className="h-3.5 w-2/5 rounded-full" />
        <Shimmer className="h-2.5 w-11/12 rounded-full" />
        <Shimmer className="h-2.5 w-3/5 rounded-full" />
        <Shimmer className="mt-3 h-3 w-16 rounded-full" />
      </div>
      <Shimmer className="w-[124px] shrink-0 rounded-none sm:w-[148px]" />
    </div>
  );
}

export function SkeletonFeaturedCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "surface-card relative aspect-[3/4] w-[76vw] max-w-[300px] shrink-0 overflow-hidden rounded-[1.75rem]",
        className,
      )}
      aria-hidden="true"
    >
      <Shimmer className="absolute inset-0 rounded-none" />
      <div className="absolute inset-x-0 bottom-0 space-y-2.5 p-4">
        <Shimmer className="h-3.5 w-3/5 rounded-full" />
        <Shimmer className="h-2.5 w-full rounded-full" />
        <Shimmer className="h-3 w-16 rounded-full" />
      </div>
    </div>
  );
}

function Shimmer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-white/4",
        "after:absolute after:inset-0 after:-translate-x-full after:animate-[shimmer_1.8s_infinite] after:bg-gradient-to-r after:from-transparent after:via-white/7 after:to-transparent",
        className,
      )}
    />
  );
}
