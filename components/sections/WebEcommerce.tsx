import { AppWindow, Code2, LayoutTemplate, ShoppingBag, Store, UserRound } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrowserMockup } from "@/components/visuals/BrowserMockup";
import { WEB_OFFERS } from "@/lib/content";

const ICONS = [AppWindow, LayoutTemplate, ShoppingBag, Store, Code2, UserRound];

export function WebEcommerce() {
  return (
    <Section id="web" muted>
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Web & E-commerce"
            title="Votre présence digitale, pensée pour votre activité."
            text="Un site n'est pas une carte de visite figée : c'est un outil qui présente votre offre, rassure vos clients et peut se connecter au reste de votre entreprise."
          />
          <Reveal className="mt-10">
            <Button href="#contact" variant="secondary">Créer mon site</Button>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:pl-6">
          <div className="transition-transform duration-500 hover:-rotate-1 hover:scale-[1.01]">
            <BrowserMockup />
          </div>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WEB_OFFERS.map((o, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal as="li" key={o.title} delay={(i % 3) * 0.06}>
              <div className="group h-full rounded-3xl border border-line bg-elev p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-soft">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-ink">
                  <Icon aria-hidden className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{o.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{o.text}</p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
