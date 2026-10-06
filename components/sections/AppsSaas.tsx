"use client";

import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useRef, useState } from "react";
import { CalButton } from "@/components/ui/CalButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUILD_STEPS } from "@/lib/content";

export function AppsSaas() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(BUILD_STEPS.length - 1, Math.floor(v * BUILD_STEPS.length)));
  });

  const step = BUILD_STEPS[active];

  return (
    <section id="saas" className="relative">
      {/* Desktop : progression horizontale pilotée par le scroll */}
      <div ref={ref} className="relative hidden lg:block" style={{ height: `${BUILD_STEPS.length * 45 + 60}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16">
          <Container>
            <SectionHeading
              eyebrow="Applications & SaaS"
              title="Votre idée mérite mieux qu'un prototype."
              text="Nous transformons une idée, un processus métier ou un besoin interne en véritable application web."
            />

            <div className="relative mt-16">
              <div className="absolute left-0 right-0 top-[7px] h-px bg-line-strong" />
              <motion.div
                className="absolute left-0 right-0 top-[7px] h-px origin-left bg-accent"
                style={{ scaleX: progress }}
              />
              <ol className="relative grid grid-cols-7 gap-4">
                {BUILD_STEPS.map((s, i) => (
                  <li key={s.title} className="flex flex-col">
                    <span
                      className={clsx(
                        "size-[15px] rounded-full border-2 transition-all duration-500",
                        i <= active ? "border-accent bg-accent" : "border-line-strong bg-bg",
                        i === active && "ring-4 ring-accent-soft",
                      )}
                    />
                    <span className="mt-4 font-mono text-[11px] text-ink-faint">0{i + 1}</span>
                    <span
                      className={clsx(
                        "mt-1 text-lg font-semibold tracking-tight transition-colors duration-500",
                        i <= active ? "text-ink" : "text-ink-faint",
                      )}
                    >
                      {s.title}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-14 grid grid-cols-[1fr_auto] items-end gap-10 border-t border-line pt-10">
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  Étape {active + 1} / {BUILD_STEPS.length}
                </p>
                <p className="mt-3 max-w-xl text-2xl font-medium leading-snug tracking-tight">{step.text}</p>
              </motion.div>
              <CalButton />
            </div>
          </Container>
        </div>
      </div>

      {/* Mobile / tablette : timeline verticale */}
      <Container className="py-24 sm:py-32 lg:hidden">
        <SectionHeading
          eyebrow="Applications & SaaS"
          title="Votre idée mérite mieux qu'un prototype."
          text="Nous transformons une idée, un processus métier ou un besoin interne en véritable application web."
        />
        <ol className="relative mt-12 space-y-8 border-l border-line-strong pl-7">
          {BUILD_STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} className="relative">
              <span className="absolute -left-[35px] top-1.5 size-[15px] rounded-full border-2 border-accent bg-bg" />
              <span className="font-mono text-[11px] text-ink-faint">0{i + 1}</span>
              <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12">
          <CalButton />
        </div>
      </Container>
    </section>
  );
}
