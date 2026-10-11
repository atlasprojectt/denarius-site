import type { Metadata } from "next";
import { WhyNowContent } from "@/components/pages/why-now";
import { PAGES } from "@/lib/links";

export const metadata: Metadata = {
  title: PAGES.whyNow.label,
  description: PAGES.whyNow.summary,
};

export default function WhyNowPage() {
  return <WhyNowContent />;
}
