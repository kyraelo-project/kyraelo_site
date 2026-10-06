import { Blocks, Link2, Sparkle, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY } from "@/lib/content";

const ICONS = [Blocks, Sparkle, Link2, TrendingUp];

export function WhyKyraelo() {
  return (
    <Section id="pourquoi">
      <SectionHeading
        eyebrow="Pourquoi Kyraelo"
        title="La technologie doit résoudre un problème. Pas en créer un."
        text="Kyraelo est un studio technologique indépendant. Nous concevons des outils utiles, compréhensibles et durables, pour des entreprises de toutes tailles."
      />
      <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map((w, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal as="li" key={w.title} delay={i * 0.06} className="group bg-elev p-8 transition-colors duration-300 hover:bg-bg">
              <Icon aria-hidden className="size-6 text-accent transition-transform duration-500 group-hover:rotate-12" />
              <h3 className="mt-10 text-2xl font-semibold tracking-tight">{w.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{w.text}</p>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
