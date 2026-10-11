import { shadeOf, type CatalogModel } from "@/denarius/lib/engine/model-catalog";
import type { ModelRef } from "@/denarius/lib/engine/model-plan";

// The violet tier classes, strongest (most expensive) first — the one place a
// model's price tier becomes a color (DESIGN.md › Money domains). Fills paint
// legend swatches; inks paint the bar layers, which draw in currentColor.
const SHADE_BG = ["bg-sim-1", "bg-sim-2", "bg-sim-3", "bg-sim-4"] as const;
const SHADE_TEXT = ["text-sim-1", "text-sim-2", "text-sim-3", "text-sim-4"] as const;

export function modelShadeBg(ref: ModelRef, catalog: CatalogModel[]): string {
  return SHADE_BG[shadeOf(ref, catalog)];
}

export function modelShadeText(ref: ModelRef, catalog: CatalogModel[]): string {
  return SHADE_TEXT[shadeOf(ref, catalog)];
}

export const PROVIDER_LABEL: Record<string, string> = {
  anthropic: "Anthropic",
  openai: "OpenAI",
};
