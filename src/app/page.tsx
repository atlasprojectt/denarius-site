import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import { FAQSection } from "@/components/landing/faq-section";
import { HeroSection } from "@/components/landing/hero-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { MotionProvider } from "@/components/landing/motion-provider";
import { TrustSection } from "@/components/landing/trust-section";
import { VerdictSection } from "@/components/landing/verdict-section";
import { WaitlistSection } from "@/components/landing/waitlist-section";

/**
 * A narrativa vai direto ao produto: a resposta que ele dá, o que ele faz e
 * como entra no fluxo, por que é seguro conectar, as objeções restantes e o
 * próximo passo.
 *
 * O problema não tem seção própria — ele fica subentendido na abertura do
 * veredito. Construí-lo em uma seção inteira antes de mostrar qualquer coisa
 * atrasava o produto e fazia a página ler como defesa de tese.
 */
export default function Home() {
  return (
    <MotionProvider>
      <div id="topo" className="flex flex-1 flex-col font-sans">
        <LandingHeader />
        <main className="flex-1">
          <HeroSection />
          <VerdictSection />
          <CapabilitiesSection />
          <TrustSection />
          <FAQSection />
          <WaitlistSection />
        </main>
        <LandingFooter />
      </div>
    </MotionProvider>
  );
}
