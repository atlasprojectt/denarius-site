import { Capabilities } from "@/components/landing/capabilities";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Integrations } from "@/components/landing/integrations";
import { Problem } from "@/components/landing/problem";
import { Security } from "@/components/landing/security";
import { TrustStrip } from "@/components/landing/trust-strip";
import { UseCases } from "@/components/landing/use-cases";
import { Verdict } from "@/components/landing/verdict";

export default function Home() {
  return (
    <div id="topo" className="flex flex-1 flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Problem />
        <Verdict />
        <Features />
        <HowItWorks />
        <Capabilities />
        <UseCases />
        <Integrations />
        <Security />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
