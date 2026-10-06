import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ODOO_SERVICES } from "@/lib/content";
import { CONTACT_HREF } from "@/lib/site";

const MODULES = ["CRM", "Ventes", "Facturation", "Stock", "Achats", "Projets"];

export function Odoo() {
  return (
    <section id="odoo" className="py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-line bg-elev p-8 sm:p-14">
          <div aria-hidden className="bg-dots absolute inset-0 opacity-60 [mask-image:linear-gradient(to_left,black,transparent_60%)]" />
          <div className="relative grid gap-14 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Reveal>
                <Eyebrow>Odoo</Eyebrow>
                <h2 className="mt-5 text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                  Odoo, configuré pour votre entreprise.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                  Nous vous accompagnons dans l&apos;installation, le paramétrage et l&apos;intégration d&apos;Odoo afin de
                  centraliser vos opérations et vos données.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <ul className="mt-9 flex flex-wrap gap-2">
                  {ODOO_SERVICES.map((s) => (
                    <li key={s} className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-[13.5px] text-ink-soft">
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.12} className="mt-10">
                <Button href={CONTACT_HREF}>Parler de mon projet Odoo</Button>
              </Reveal>
            </div>

            {/* Modules centralisés autour d'une base unique */}
            <Reveal delay={0.1} className="flex items-center">
              <div aria-hidden className="w-full">
                <div className="grid grid-cols-3 gap-3">
                  {MODULES.map((m) => (
                    <div
                      key={m}
                      className="flex aspect-square flex-col justify-between rounded-2xl border border-line bg-bg p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 sm:p-4"
                    >
                      <span className="size-6 rounded-lg bg-accent-soft ring-1 ring-accent/20" />
                      <span className="text-[13px] font-medium sm:text-sm">{m}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-accent/40 bg-accent-soft py-4 text-sm font-medium text-accent">
                  <span className="pulse-dot size-1.5 rounded-full bg-accent" />
                  Une base de données unique
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
