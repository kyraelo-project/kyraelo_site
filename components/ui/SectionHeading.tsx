import clsx from "clsx";
import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, text, align = "left", className }: Props) {
  return (
    <Reveal className={clsx(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">{text}</p>}
    </Reveal>
  );
}
