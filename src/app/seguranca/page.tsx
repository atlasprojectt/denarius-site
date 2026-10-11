import type { Metadata } from "next";
import { SecurityContent } from "@/components/pages/security";
import { PAGES } from "@/lib/links";

export const metadata: Metadata = {
  title: PAGES.security.label,
  description: PAGES.security.summary,
};

export default function SecurityPage() {
  return <SecurityContent />;
}
