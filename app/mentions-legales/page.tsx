import type { Metadata } from "next";
import { LegalPage, ToComplete } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Mentions légales", robots: { index: false } };

export default function Page() {
  return (
    <LegalPage title="Mentions légales">
      <ToComplete>
        [À COMPLÉTER] Raison sociale, forme juridique, capital, adresse du siège, SIREN/SIRET, numéro de TVA,
        directeur de la publication, contact, hébergeur (nom, adresse, téléphone).
      </ToComplete>
    </LegalPage>
  );
}
