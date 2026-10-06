"use client";

import clsx from "clsx";
import { AppWindow, Bot, Building2, Globe, MessageCircle, Network, Workflow, Database } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const W = 600;
const H = 540;
const CX = W / 2;
const CY = H / 2;

const NODES = [
  { label: "Site web", icon: Globe },
  { label: "Application", icon: AppWindow },
  { label: "IA", icon: Bot },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "CRM", icon: Network },
  { label: "ERP", icon: Database },
  { label: "Automatisation", icon: Workflow },
].map((n, i, arr) => {
  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / arr.length;
  return { ...n, x: CX + Math.cos(angle) * 225, y: CY + Math.sin(angle) * 205 };
});

/** Visualisation de l'écosystème Kyraelo : l'entreprise au centre, ses outils connectés autour. */
export function EcosystemGraph({ className }: { className?: string }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className={clsx("relative mx-auto w-full max-w-[600px]", className)}
      style={{ aspectRatio: `${W} / ${H}` }}
      role="img"
      aria-label="L'écosystème Kyraelo : votre entreprise au centre, connectée à son site web, ses applications, l'IA, WhatsApp, le CRM, l'ERP et l'automatisation."
    >
      <div aria-hidden className="halo absolute inset-0" />

      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full" aria-hidden>
        <ellipse cx={CX} cy={CY} rx={225} ry={205} className="fill-none stroke-line" strokeDasharray="2 6" />
        <ellipse cx={CX} cy={CY} rx={120} ry={110} className="fill-none stroke-line" />
        {NODES.map((n, i) => (
          <g key={n.label}>
            <motion.line
              x1={CX}
              y1={CY}
              x2={n.x}
              y2={n.y}
              className={clsx("transition-colors duration-300", active === i ? "stroke-accent" : "stroke-line-strong")}
              strokeWidth={1}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.3 + i * 0.08, ease: "easeOut" }}
            />
            <motion.circle
                r={2.6}
                className="fill-accent motion-reduce:hidden"
                initial={{ cx: CX, cy: CY, opacity: 0 }}
                animate={{ cx: [CX, n.x], cy: [CY, n.y], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 2.4,
                  delay: 1.4 + i * 0.55,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
          </g>
        ))}
      </svg>

      {/* Centre */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-line-strong bg-elev px-4 py-3 shadow-soft sm:px-6 sm:py-4">
          <span className="flex size-8 items-center justify-center rounded-xl bg-ink text-bg sm:size-10">
            <Building2 aria-hidden className="size-4 sm:size-5" />
          </span>
          <span className="text-[13px] font-semibold sm:text-[15px]">Entreprise</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint sm:block">
            vos objectifs
          </span>
        </div>
      </motion.div>

      {/* Outils */}
      {NODES.map((n, i) => {
        const Icon = n.icon;
        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(n.x / W) * 100}%`, top: `${(n.y / H) * 100}%` }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <div
              className={clsx(
                "flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-elev py-1.5 pl-1.5 pr-3 text-[11.5px] font-medium shadow-soft transition-all duration-300 sm:gap-2 sm:py-2 sm:pl-2 sm:pr-4 sm:text-[13.5px]",
                active === i ? "-translate-y-0.5 border-accent" : "border-line",
              )}
            >
              <span
                className={clsx(
                  "flex size-6 items-center justify-center rounded-full transition-colors duration-300 sm:size-7",
                  active === i ? "bg-accent text-accent-ink" : "bg-accent-soft text-accent",
                )}
              >
                <Icon aria-hidden className="size-3.5 sm:size-4" />
              </span>
              {n.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
