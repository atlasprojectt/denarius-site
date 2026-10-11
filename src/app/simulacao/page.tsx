import type { Metadata } from "next";
import { SimulationContent } from "@/components/pages/simulation";
import { PAGES } from "@/lib/links";

export const metadata: Metadata = {
  title: PAGES.simulation.label,
  description: PAGES.simulation.summary,
};

export default function SimulationPage() {
  return <SimulationContent />;
}
