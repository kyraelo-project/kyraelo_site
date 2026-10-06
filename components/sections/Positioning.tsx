import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { KEYWORDS } from "@/lib/content";

export function Positioning() {
  const loop = [...KEYWORDS, ...KEYWORDS];
  return (
    <section aria-labelledby="positioning-title" className="border-y border-line py-20 sm:py-24">
      <Container className="grid gap-6 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 id="positioning-title" className="text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
            Du besoin métier à la solution digitale.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-lg leading-relaxed text-ink-soft md:pt-2">
            Nous ne commençons pas par la technologie. Nous commençons par comprendre votre activité, vos processus et
            vos objectifs.
          </p>
        </Reveal>
      </Container>

      <div
        className="marquee relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
        aria-label={KEYWORDS.join(", ")}
      >
        <ul className="marquee-track flex w-max gap-4" aria-hidden>
          {loop.map((k, i) => (
            <li
              key={i}
              className="flex items-center gap-4 whitespace-nowrap text-3xl font-medium tracking-[-0.02em] text-ink-faint transition-colors hover:text-ink sm:text-5xl"
            >
              {k}
              <span className="size-1.5 rounded-full bg-accent" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
