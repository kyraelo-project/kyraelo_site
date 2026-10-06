import type { Metadata } from "next";
import { LegalPage, ToComplete } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Conditions générales de vente", robots: { index: false } };

export default function Page() {
  return (
    <LegalPage title="Conditions générales de vente">
      <ToComplete>[À COMPLÉTER] Conditions générales de vente de Kyraelo.</ToComplete>
    </LegalPage>
  );
}
