import { Button } from "@/components/ui/Button";
import { CalButton } from "@/components/ui/CalButton";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { EcosystemGraph } from "@/components/visuals/EcosystemGraph";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div aria-hidden className="bg-dots absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <Eyebrow>Studio digital · IA · Automatisation</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[4.25rem]">
              Transformer vos idées en <span className="text-accent">solutions digitales.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
              Sites web, applications, SaaS, IA et automatisation : Kyraelo conçoit les outils digitaux qui font
              avancer votre entreprise.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CalButton size="lg" />
            <Button href="#expertises" variant="secondary" size="lg" icon={false}>
              Découvrir nos solutions
            </Button>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-ink-faint">
              Un premier échange pour comprendre votre besoin, définir la bonne solution et construire un projet
              adapté à votre activité.
            </p>
          </Reveal>
        </div>
        <EcosystemGraph />
      </Container>
    </section>
  );
}
