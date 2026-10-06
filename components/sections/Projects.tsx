import clsx from "clsx";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectMockup } from "@/components/visuals/ProjectMockup";
import { PROJECTS } from "@/lib/content";

export function Projects() {
  return (
    <Section id="realisations" muted>
      <SectionHeading
        eyebrow="Réalisations"
        title="Des solutions pensées pour des problèmes réels."
        text="Les projets ci-dessous sont des projets conceptuels : ils illustrent le type de solutions que nous concevons pour des situations fréquentes chez nos clients cibles."
      />

      <ul className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {PROJECTS.map((p, i) => (
          <Reveal
            as="li"
            key={p.name}
            delay={(i % 3) * 0.06}
            className={clsx(i < 2 ? "lg:col-span-3" : "lg:col-span-2", i === 4 && "md:col-span-2 lg:col-span-2")}
          >
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-elev transition-all duration-300 hover:border-line-strong hover:shadow-soft">
              <div className="relative">
                <ProjectMockup type={p.visual} />
                <span className="absolute left-4 top-4 rounded-full border border-line-strong bg-elev/90 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-soft backdrop-blur">
                  Projet conceptuel
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{p.sector}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{p.name}</h3>
                <dl className="mt-5 space-y-4 text-[14.5px] leading-relaxed">
                  <div>
                    <dt className="font-medium">Problème</dt>
                    <dd className="mt-0.5 text-ink-soft">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Solution</dt>
                    <dd className="mt-0.5 text-ink-soft">{p.solution}</dd>
                  </div>
                </dl>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-md bg-muted px-2 py-1 font-mono text-[11.5px] text-ink-soft">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
