import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-bg hover:bg-accent hover:text-accent-ink shadow-soft",
  secondary:
    "border border-line-strong bg-elev text-ink hover:border-ink",
  ghost: "text-ink hover:text-accent",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  external?: boolean;
  icon?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", size = "md", external, icon = true, className }: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={clsx(
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 active:scale-[0.98]",
        size === "lg" ? "px-6 py-3.5 text-[15px]" : "px-5 py-2.5 text-sm",
        styles[variant],
        className,
      )}
    >
      {children}
      {icon && (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </a>
  );
}
