import clsx from "clsx";
import Link from "next/link";

/** Glyphe Kyraelo : trois nœuds reliés autour d'un centre. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={clsx("size-6", className)} fill="none">
      <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="7" className="fill-ink" />
      <path d="M8 7v10M8 12l7-5M8 12l7 5" className="stroke-bg" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="15.5" cy="6.8" r="1.6" className="fill-accent" />
      <circle cx="15.5" cy="17.2" r="1.6" className="fill-bg" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/#top" aria-label="Kyraelo — accueil" className={clsx("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-[15px] font-semibold tracking-[0.22em]">KYRAELO</span>
    </Link>
  );
}
