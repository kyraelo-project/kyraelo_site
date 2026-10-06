import clsx from "clsx";
import type { ReactNode } from "react";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={clsx(
        "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-accent" />
      {children}
    </p>
  );
}
