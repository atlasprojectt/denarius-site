import type { Metadata } from "next";
import { HowItWorksContent } from "@/components/pages/how-it-works";
import { PAGES } from "@/lib/links";

export const metadata: Metadata = {
  title: PAGES.howItWorks.label,
  description: PAGES.howItWorks.summary,
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
