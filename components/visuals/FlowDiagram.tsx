"use client";

import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Fragment } from "react";

type Props = {
  steps: string[];
  tone?: "muted" | "accent";
  /** Clé de rejouement : change → l'animation repart. */
  playKey?: string;
};

/** Enchaînement d'étapes reliées, révélées une à une. */
export function FlowDiagram({ steps, tone = "accent", playKey }: Props) {
  return (
    <ol key={playKey} className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((s, i) => (
        <Fragment key={s + i}>
          <motion.li
            initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className={clsx(
              "rounded-full border px-3.5 py-2 text-[13.5px] font-medium sm:text-sm",
              tone === "accent"
                ? i === 0
                  ? "border-line-strong bg-elev"
                  : "border-accent/30 bg-accent-soft text-ink"
                : "border-dashed border-line-strong bg-transparent text-ink-soft",
            )}
          >
            {s}
          </motion.li>
          {i < steps.length - 1 && (
            <motion.li
              aria-hidden
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.12 + 0.08 }}
              className={tone === "accent" ? "text-accent" : "text-ink-faint"}
            >
              <ArrowRight className="size-4" />
            </motion.li>
          )}
        </Fragment>
      ))}
    </ol>
  );
}
