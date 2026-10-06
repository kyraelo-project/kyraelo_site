"use client";

import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { METHOD } from "@/lib/content";

export function Method() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 50%"] });
  const [active, setActive] = useState(-1);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(v <= 0 ? -1 : Math.min(METHOD.length - 1, Math.floor(v * METHOD.length)));
  });

  return (
    <Section id="methode">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Notre méthode"
            title="Une méthode simple. Un projet maîtrisé."
            text="Cinq étapes claires, avec des points de validation à chaque phase. Vous savez toujours où en est votre projet."
          />
        </div>

        <ol ref={ref} className="relative">
          <div aria-hidden className="absolute bottom-6 left-[19px] top-6 w-px bg-line-strong" />
          <motion.div
            aria-hidden
            className="absolute bottom-6 left-[19px] top-6 w-px origin-top bg-accent"
            style={{ scaleY: scrollYProgress }}
          />
          {METHOD.map((m, i) => {
            const on = i <= active;
            return (
              <li key={m.title} className="relative flex gap-6 pb-12 last:pb-0">
                <span
                  className={clsx(
                    "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border font-mono text-[12px] transition-all duration-500",
                    on ? "border-accent bg-accent text-accent-ink" : "border-line-strong bg-bg text-ink-faint",
                    i === active && "ring-4 ring-accent-soft",
                  )}
                >
                  0{i + 1}
                </span>
                <div
                  className={clsx(
                    "flex-1 rounded-3xl border p-6 transition-all duration-500 sm:p-7",
                    i === active ? "border-line-strong bg-elev shadow-soft" : "border-transparent",
                  )}
                >
                  <h3 className={clsx("text-2xl font-semibold tracking-tight transition-colors duration-500", !on && "text-ink-faint")}>
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">{m.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
