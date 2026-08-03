import { cn } from "@/lib/utils";

/**
 * Tipografik "Zepresso" logosu.
 *
 * Hazır bir sembol yerine: serif wordmark + kavrulmuş çekirdek noktası.
 * Nokta, "Z"nin sağ üstündeki boşluğa oturur ve markanın tek grafik öğesidir.
 */

function BeanDot({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      fill="none"
    >
      <ellipse
        cx="12"
        cy="12"
        rx="10.5"
        ry="7.5"
        transform="rotate(-38 12 12)"
        fill="url(#zBean)"
      />
      <path
        d="M6.2 17.8C9 13.2 15 10.8 17.8 6.2"
        stroke="#080A0C"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="zBean" x1="2" y1="4" x2="22" y2="20">
          <stop stopColor="#E4B46A" />
          <stop offset="1" stopColor="#C47A45" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ZepressoLogo({
  className,
  compact = false,
}: {
  className?: string;
  /** Küçülen başlıkta kullanılan dar varyant. */
  compact?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex select-none items-baseline font-heading leading-none tracking-[-0.02em] text-ink",
        compact ? "text-[1.35rem]" : "text-[1.6rem]",
        className,
      )}
    >
      <span className="relative">
        <span className="bg-gradient-to-br from-gold via-[#f0d3a0] to-espresso bg-clip-text text-transparent">
          Z
        </span>
        <BeanDot
          className={cn(
            "absolute -top-px -right-[3px] rotate-[8deg]",
            compact ? "size-[7px]" : "size-2",
          )}
        />
      </span>
      <span className="ml-[0.5px]">epresso</span>
    </span>
  );
}

/** Menü sonunda ve boş durumlarda kullanılan büyük, nefes alan wordmark. */
export function ZepressoWordmark({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <BeanDot className="size-4 opacity-90" />
      <span className="font-heading text-[clamp(2rem,9vw,3.25rem)] leading-none tracking-[-0.03em] text-ink">
        Zepresso
      </span>
      <span className="text-[0.6rem] font-semibold tracking-[0.42em] text-dim uppercase">
        Alsancak · İzmir
      </span>
    </div>
  );
}
