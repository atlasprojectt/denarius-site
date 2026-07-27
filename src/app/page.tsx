import { AudienceSection } from "@/components/landing/audience-section";
import { FAQSection } from "@/components/landing/faq-section";
import { FinalCTASection } from "@/components/landing/final-cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { ProblemSection } from "@/components/landing/problem-section";
import { ProductSection } from "@/components/landing/product-section";
import { SecuritySection } from "@/components/landing/security-section";

export default function Home() {
  return (
    <div id="topo" className="flex flex-1 flex-col font-sans">
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <ProductSection />
        <HowItWorksSection />
        <AudienceSection />
        <SecuritySection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <LandingFooter />
    </div>
  );
}
