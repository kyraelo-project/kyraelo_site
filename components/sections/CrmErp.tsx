import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PipelineDiagram } from "@/components/visuals/PipelineDiagram";

const POINTS = [
  "Une information saisie une seule fois, disponible partout",
  "Des processus qui s'enchaînent sans intervention manuelle",
  "Une vision claire de votre activité, en temps réel",
  "Vos outils existants conservés lorsque c'est pertinent",
];

export function CrmErp() {
  return (
    <Section id="crm">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="CRM & ERP"
            title="Connecter vos outils. Simplifier votre quotidien."
            text="Messagerie, gestion clients, devis, factures, tableaux de bord : quand vos outils ne se parlent pas, vos équipes recopient les mêmes informations. Kyraelo connecte ces outils entre eux pour supprimer les doubles saisies et les processus manuels."
          />
          <ul className="mt-10 space-y-4">
            {POINTS.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 0.05} className="flex gap-3 text-[15.5px]">
                <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
                {p}
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-10">
            <Button href="#contact" variant="secondary">Structurer mon entreprise</Button>
          </Reveal>
        </div>
        <div className="rounded-[28px] border border-line bg-muted/60 p-6 sm:p-10">
          <PipelineDiagram />
        </div>
      </div>
    </Section>
  );
}
