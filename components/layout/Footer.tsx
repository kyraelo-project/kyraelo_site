import { CAL_URL, CONTACT_HREF, EMAIL, FOOTER_COMPANY, FOOTER_SOLUTIONS, LEGAL, SITE } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">{title}</p>
      <ul className="mt-5 space-y-3 text-[14.5px]">{children}</ul>
    </div>
  );
}

const linkCls = "text-ink-soft transition-colors hover:text-ink";

export function Footer() {
  return (
    <footer className="border-t border-line pb-28 pt-20 sm:pb-12">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">{SITE.tagline}</p>
          </div>
          <Column title="Solutions">
            {FOOTER_SOLUTIONS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkCls}>{l.label}</a>
              </li>
            ))}
          </Column>
          <Column title="Entreprise">
            {FOOTER_COMPANY.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkCls}>{l.label}</a>
              </li>
            ))}
          </Column>
          <Column title="Contact">
            <li>
              <a href={CONTACT_HREF} className={linkCls}>Email : {EMAIL}</a>
            </li>
            <li>
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>
                Réserver un appel
              </a>
            </li>
          </Column>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[13px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kyraelo. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-ink">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
