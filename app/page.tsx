import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { AiAutomation } from "@/components/sections/AiAutomation";
import { AppsSaas } from "@/components/sections/AppsSaas";
import { CrmErp } from "@/components/sections/CrmErp";
import { Expertises } from "@/components/sections/Expertises";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Odoo } from "@/components/sections/Odoo";
import { Positioning } from "@/components/sections/Positioning";
import { Projects } from "@/components/sections/Projects";
import { WebEcommerce } from "@/components/sections/WebEcommerce";
import { WhatsAppFlow } from "@/components/sections/WhatsAppFlow";
import { WhyKyraelo } from "@/components/sections/WhyKyraelo";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Positioning />
        <Expertises />
        <AiAutomation />
        <AppsSaas />
        <WebEcommerce />
        <CrmErp />
        <WhatsAppFlow />
        <Odoo />
        <Method />
        <Projects />
        <WhyKyraelo />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
