import type { Metadata } from "next";
import { LegalPage, ToComplete } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Politique de confidentialité", robots: { index: false } };

export default function Page() {
  return (
    <LegalPage title="Politique de confidentialité">
      <ToComplete>
        [À COMPLÉTER] Responsable du traitement, données collectées, finalités, bases légales, durées de conservation,
        destinataires (dont l&apos;outil de prise de rendez-vous), droits des personnes et modalités d&apos;exercice,
        cookies.
      </ToComplete>
    </LegalPage>
  );
}
