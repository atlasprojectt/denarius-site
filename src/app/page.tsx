import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import { FAQSection } from "@/components/landing/faq-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { ProblemSection } from "@/components/landing/problem-section";
import { TrustSection } from "@/components/landing/trust-section";
import { VerdictSection } from "@/components/landing/verdict-section";
import { WaitlistSection } from "@/components/landing/waitlist-section";

/**
 * A narrativa da página, em ordem: o problema de controle, a resposta que o
 * produto dá, a prova de que ele dá essa resposta, como ele entra no fluxo
 * atual, por que é seguro conectar, as objeções restantes e o próximo passo.
 */
export default function Home() {
  return (
    <div id="topo" className="flex flex-1 flex-col font-sans">
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <VerdictSection />
        <CapabilitiesSection />
        <HowItWorksSection />
        <TrustSection />
        <FAQSection />
        <WaitlistSection />
      </main>
      <LandingFooter />
    </div>
  );
}
