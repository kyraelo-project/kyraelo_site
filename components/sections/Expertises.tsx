import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERTISES } from "@/lib/content";

export function Expertises() {
  return (
    <Section id="expertises">
      <SectionHeading
        eyebrow="Nos expertises"
        title="Une seule équipe pour construire votre écosystème digital."
        text="Cinq domaines complémentaires, pensés pour fonctionner ensemble plutôt que côte à côte."
      />

      <div className="mt-16 grid gap-4 md:grid-cols-6">
        {EXPERTISES.map((e, i) => (
          <Reveal
            key={e.id}
            delay={(i % 3) * 0.06}
            className={clsx(i < 2 ? "md:col-span-3" : "md:col-span-2")}
          >
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-elev p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-soft sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-accent-soft opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-accent">{e.num}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                  {e.items.length} services
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em]">{e.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{e.intro}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {e.items.map((it) => (
                  <li key={it} className="rounded-full border border-line px-3 py-1 text-[12.5px] text-ink-soft">
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href={e.href}
                className="mt-auto inline-flex min-h-11 items-center gap-2 pt-8 text-[14.5px] font-medium text-ink transition-colors hover:text-accent"
              >
                {e.cta}
                <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
