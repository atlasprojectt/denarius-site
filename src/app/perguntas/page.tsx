import type { Metadata } from "next";
import { FaqContent } from "@/components/pages/faq";
import { PAGES } from "@/lib/links";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description: PAGES.faq.summary,
};

export default function FaqPage() {
  return <FaqContent />;
}
