"use client";

import { BarChart3, Database, MessageCircle, Network, Receipt } from "lucide-react";
import { motion } from "motion/react";
import { PIPELINE } from "@/lib/content";

const ICONS = [MessageCircle, Network, Database, Receipt, BarChart3];

/** Chaîne d'outils connectés, de WhatsApp jusqu'au reporting. */
export function PipelineDiagram() {
  return (
    <ol className="relative mx-auto max-w-md">
      {PIPELINE.map((p, i) => {
        const Icon = ICONS[i];
        return (
          <li key={p.title} className="relative">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex items-center gap-4 rounded-2xl border border-line bg-elev p-4 shadow-soft transition-colors hover:border-accent/40"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon aria-hidden className="size-5" />
              </span>
              <div>
                <p className="font-semibold tracking-tight">{p.title}</p>
                <p className="text-[14px] text-ink-soft">{p.text}</p>
              </div>
              <span className="ml-auto font-mono text-[11px] text-ink-faint">0{i + 1}</span>
            </motion.div>
            {i < PIPELINE.length - 1 && (
              <svg aria-hidden viewBox="0 0 2 32" className="ml-[37px] h-8 w-[2px] overflow-visible">
                <line x1="1" y1="0" x2="1" y2="32" className="stroke-line-strong" strokeWidth="1.5" />
                <line x1="1" y1="0" x2="1" y2="32" className="dash-flow stroke-accent" strokeWidth="1.5" />
              </svg>
            )}
          </li>
        );
      })}
    </ol>
  );
}
