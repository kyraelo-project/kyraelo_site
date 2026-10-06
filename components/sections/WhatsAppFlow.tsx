import { Bell, Bot, CalendarCheck, Filter, Headphones, Link2, MessageSquareReply, Repeat, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChatMockup } from "@/components/visuals/ChatMockup";

const USES = [
  { label: "Prise de rendez-vous", icon: CalendarCheck },
  { label: "Qualification de prospects", icon: Filter },
  { label: "Réponses automatiques", icon: MessageSquareReply },
  { label: "Commandes", icon: ShoppingCart },
  { label: "Notifications", icon: Bell },
  { label: "Relances", icon: Repeat },
  { label: "Support client", icon: Headphones },
  { label: "Connexion CRM / ERP", icon: Link2 },
  { label: "Agents IA", icon: Bot },
];

export function WhatsAppFlow() {
  return (
    <Section id="whatsapp" muted>
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="order-2 lg:order-1">
          <ChatMockup />
          <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
            Exemple de parcours · données fictives
          </p>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="WhatsApp Flow"
            title="WhatsApp, votre nouveau canal opérationnel."
            text="Vos clients sont déjà sur WhatsApp. Nous y créons des parcours guidés qui prennent les rendez-vous, enregistrent les commandes et répondent aux questions fréquentes — puis transmettent tout à vos outils."
          />
          <ul className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {USES.map(({ label, icon: Icon }, i) => (
              <Reveal as="li" key={label} delay={i * 0.03}>
                <div className="flex min-h-12 items-center gap-3 rounded-2xl border border-line bg-elev px-4 py-3 text-[14.5px] transition-colors hover:border-accent/40">
                  <Icon aria-hidden className="size-4 shrink-0 text-accent" />
                  {label}
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-10">
            <Button href="#contact" variant="secondary">Automatiser WhatsApp</Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
