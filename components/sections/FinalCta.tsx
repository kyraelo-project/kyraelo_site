import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CAL_URL, CONTACT_HREF } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-[#0e1215] px-7 py-16 text-[#eef0f1] ring-1 ring-white/10 sm:px-16 sm:py-24">
            <div
              aria-hidden
              className="absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(60%_80%_at_80%_20%,black,transparent)]"
            />
            <div aria-hidden className="absolute -right-32 -top-32 size-[420px] rounded-full bg-[#2dd4bf]/15 blur-3xl" />
            <svg aria-hidden viewBox="0 0 400 200" className="absolute bottom-0 right-0 hidden w-[46%] opacity-40 md:block">
              <path d="M0 180 C 120 180, 160 60, 260 60 S 400 20, 400 20" fill="none" stroke="#2dd4bf" strokeWidth="1" className="dash-flow" />
              <circle cx="260" cy="60" r="4" fill="#2dd4bf" className="pulse-dot" style={{ transformOrigin: "260px 60px" }} />
            </svg>

            <div className="relative max-w-3xl">
              <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                <span className="size-1.5 rounded-full bg-[#2dd4bf]" />
                Contact
              </p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl">
                Parlons de votre prochain projet.
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
                Une idée, un processus à automatiser, une application à créer ou un système à connecter ? Parlons-en.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2dd4bf] px-6 py-3.5 text-[15px] font-medium text-[#062320] transition-all duration-300 hover:bg-white active:scale-[0.98]"
                >
                  Réserver un appel
                  <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={CONTACT_HREF}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:border-white/60"
                >
                  <Mail aria-hidden className="size-4" />
                  Nous contacter
                </a>
              </div>
              <p className="mt-6 text-[13.5px] text-white/45">Un premier échange sans engagement pour cadrer votre besoin.</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
