import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="pb-24 pt-36">
        <Container className="max-w-3xl">
          <Eyebrow>Informations légales</Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{title}</h1>
          <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-ink-soft">{children}</div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export function ToComplete({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-2xl border border-dashed border-line-strong bg-muted p-5 font-mono text-[13.5px]">{children}</p>
  );
}
