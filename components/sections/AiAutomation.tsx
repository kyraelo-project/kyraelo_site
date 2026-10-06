"use client";

import clsx from "clsx";
import { Clock, Sparkles } from "lucide-react";
import { useState } from "react";
import { CalButton } from "@/components/ui/CalButton";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FlowDiagram } from "@/components/visuals/FlowDiagram";
import { FLOW_AFTER, FLOW_BEFORE, FLOW_EXAMPLES } from "@/lib/content";

export function AiAutomation() {
  const [tab, setTab] = useState(FLOW_EXAMPLES[0].id);
  const current = FLOW_EXAMPLES.find((f) => f.id === tab) ?? FLOW_EXAMPLES[0];

  return (
    <Section id="ia" muted>
      <SectionHeading
        eyebrow="IA & automatisation"
        title="Et si vos outils travaillaient pour vous ?"
        text="L'IA n'est pas un gadget : c'est un moyen de supprimer les tâches répétitives, de répondre plus vite et de ne plus laisser filer d'opportunités. Voici à quoi cela ressemble concrètement."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-line bg-elev/60 p-7 sm:p-9">
            <div className="flex items-center gap-2 text-ink-faint">
              <Clock aria-hidden className="size-4" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Avant</span>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Chaque étape dépend de quelqu&apos;un : messages, saisies, relances. Le temps passe, les prospects attendent.
            </p>
            <div className="mt-7">
              <FlowDiagram steps={FLOW_BEFORE} tone="muted" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative h-full overflow-hidden rounded-3xl border border-accent/30 bg-elev p-7 shadow-soft sm:p-9">
            <div aria-hidden className="absolute -right-24 -top-24 size-64 rounded-full bg-accent-soft blur-3xl" />
            <div className="relative flex items-center gap-2 text-accent">
              <Sparkles aria-hidden className="size-4" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Après</span>
            </div>
            <p className="relative mt-4 text-[15px] leading-relaxed text-ink-soft">
              Le prospect écrit sur WhatsApp, l&apos;IA qualifie sa demande, le CRM se remplit et le rendez-vous est
              proposé automatiquement. Votre équipe est notifiée.
            </p>
            <div className="relative mt-7">
              <FlowDiagram steps={FLOW_AFTER} />
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-4">
        <div className="rounded-3xl border border-line bg-elev p-7 sm:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">Exemples par secteur</p>
            <div role="tablist" aria-label="Secteurs" className="inline-flex self-start rounded-full border border-line bg-muted p-1">
              {FLOW_EXAMPLES.map((f) => (
                <button
                  key={f.id}
                  role="tab"
                  type="button"
                  id={`tab-${f.id}`}
                  aria-selected={tab === f.id}
                  aria-controls="flow-panel"
                  onClick={() => setTab(f.id)}
                  className={clsx(
                    "min-h-10 rounded-full px-4 text-sm font-medium transition-all duration-300",
                    tab === f.id ? "bg-elev text-ink shadow-soft" : "text-ink-soft hover:text-ink",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div id="flow-panel" role="tabpanel" aria-labelledby={`tab-${current.id}`} className="mt-8 min-h-[120px]">
            <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">{current.context}</p>
            <div className="mt-6">
              <FlowDiagram steps={current.steps} playKey={current.id} />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <CalButton />
        <p className="text-sm text-ink-faint">Identifions ensemble les tâches à automatiser en priorité.</p>
      </Reveal>
    </Section>
  );
}
