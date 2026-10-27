import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  /** light = for dark backgrounds */
  variant?: "dark" | "light";
  compact?: boolean;
  className?: string;
};

/**
 * Wordmark with a minimal building mark: three stacked volumes with a gold
 * roofline, drawn as inline SVG so it stays sharp at every size.
 */
export function Logo({ variant = "dark", compact = false, className = "" }: Props) {
  const light = variant === "light";
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group flex items-center gap-3 ${className}`}
    >
      <span
        className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-colors duration-500 ${
          light
            ? "border-white/20 bg-white/10"
            : "border-navy-100 bg-navy-800"
        }`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="overflow-visible">
          <path d="M3 20.5V10.2l5.4-3.6V20.5" stroke={light ? "#FFFFFF" : "#FFFFFF"} strokeWidth="1.4" fill="none" />
          <path d="M9.6 20.5V5.6L15 2.5v18" stroke={light ? "#D4AF65" : "#D4AF65"} strokeWidth="1.4" fill="none" />
          <path d="M16.2 20.5v-7l4.8-2.9v9.9" stroke={light ? "#FFFFFF" : "#FFFFFF"} strokeWidth="1.4" fill="none" />
          <path d="M2 20.5h20" stroke="#D4AF65" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-display text-[11.5px] font-bold uppercase leading-[1.3] tracking-[0.1em] sm:text-[13.5px] sm:tracking-[0.14em] ${
            light ? "text-white" : "text-navy-800"
          }`}
        >
          Building <span className="text-gold-500">&amp;</span> Great Design
        </span>
        {!compact && (
          <span
            className={`mt-1.5 text-[9.5px] font-medium uppercase tracking-[0.3em] ${
              light ? "text-white/55" : "text-navy-500"
            }`}
          >
            Architecture &amp; Construction
          </span>
        )}
      </span>
    </Link>
  );
}
