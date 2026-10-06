"use client";

import clsx from "clsx";
import { CheckCheck } from "lucide-react";
import { motion } from "motion/react";

const MESSAGES: { from: "client" | "bot"; text: string; choices?: string[] }[] = [
  { from: "client", text: "Bonjour, je voudrais prendre rendez-vous." },
  { from: "bot", text: "Bonjour ! Quel service vous intéresse ?", choices: ["Devis", "Intervention", "Conseil"] },
  { from: "client", text: "Devis" },
  { from: "bot", text: "Voici les prochains créneaux disponibles :", choices: ["Mar. 10:00", "Mer. 14:30", "Jeu. 09:00"] },
  { from: "client", text: "Mer. 14:30" },
  { from: "bot", text: "C'est confirmé ✓ Un rappel vous sera envoyé la veille." },
];

/** Conversation WhatsApp illustrative (données fictives). */
export function ChatMockup() {
  return (
    <div aria-hidden className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[32px] border border-line-strong bg-elev shadow-soft">
      <div className="flex items-center gap-3 border-b border-line px-5 py-4">
        <span className="flex size-9 items-center justify-center rounded-full bg-accent text-[13px] font-semibold text-accent-ink">
          VE
        </span>
        <div>
          <p className="text-[14px] font-semibold">Votre entreprise</p>
          <p className="text-[11.5px] text-accent">répond automatiquement</p>
        </div>
      </div>
      <div className="bg-dots space-y-2.5 px-4 py-5">
        {MESSAGES.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.35, delay: 0.2 + i * 0.45 }}
            className={clsx("flex flex-col", m.from === "client" ? "items-end" : "items-start")}
          >
            <div
              className={clsx(
                "max-w-[82%] rounded-2xl px-3.5 py-2 text-[13.5px] leading-snug",
                m.from === "client" ? "rounded-br-md bg-accent text-accent-ink" : "rounded-bl-md border border-line bg-bg",
              )}
            >
              {m.text}
              {m.from === "client" && <CheckCheck className="ml-1.5 inline size-3.5 opacity-70" />}
            </div>
            {m.choices && (
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {m.choices.map((c) => (
                  <span key={c} className="rounded-full border border-accent/40 bg-elev px-2.5 py-1 text-[12px] font-medium text-accent">
                    {c}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
