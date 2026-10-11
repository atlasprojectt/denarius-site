// Denarius engine — the model price list as a catalog (pure, no I/O). What
// the simulation offers as swap targets, ordered by price, and each model's
// price tier: the violet shade a model wears on every screen (DESIGN.md ›
// Money domains: one violet base, darkest = most expensive).

import type { ModelPrice } from "./derive";
import type { ModelRef } from "./model-plan";

export type CatalogModel = ModelRef & {
  /** USD per 1M tokens, the price in force on the catalog's date. */
  inputPer1M: number;
  outputPer1M: number;
};

/** How many violet shades the model tiers map onto. */
export const MODEL_SHADES = 4;

const keyOf = (ref: ModelRef) => `${ref.provider}:${ref.model}`;

/** The ranking price: input and output per 1M summed. Within a provider's
 *  family it orders models the way their list prices do. */
export function rankPrice(model: CatalogModel): number {
  return model.inputPer1M + model.outputPer1M;
}

/** Every model with a price in force on `date` (its newest price effective on
 *  or before it), most expensive first; ties keep a stable name order. */
export function catalogOn(prices: ModelPrice[], date: string): CatalogModel[] {
  const latest = new Map<string, ModelPrice>();
  for (const price of prices) {
    if (price.effectiveDate > date) continue;
    const key = keyOf(price);
    const current = latest.get(key);
    if (!current || current.effectiveDate < price.effectiveDate) latest.set(key, price);
  }
  return [...latest.values()]
    .map((price) => ({
      provider: price.provider,
      model: price.model,
      inputPer1M: price.inputPricePer1M,
      outputPer1M: price.outputPricePer1M,
    }))
    .sort((a, b) => rankPrice(b) - rankPrice(a) || keyOf(a).localeCompare(keyOf(b)));
}

/** Lower bounds of the price tiers (input + output per 1M, USD), most
 *  expensive first: frontier models (Opus), the workhorses (Sonnet, GPT-4o,
 *  GPT-5), the light ones (Haiku, the minis), then the nanos. Absolute bands,
 *  not catalog quantiles, so adding a model never repaints the others. */
export const TIER_FLOORS = [25, 8, 1.5] as const;

/** A model's price tier, 0 (the most expensive) to MODEL_SHADES − 1 (the
 *  cheapest), at its price in the catalog. A model outside the catalog
 *  (uncosted) takes the lightest tier. */
export function shadeOf(ref: ModelRef, catalog: CatalogModel[]): number {
  const model = catalog.find((candidate) => keyOf(candidate) === keyOf(ref));
  if (!model) return MODEL_SHADES - 1;
  const price = rankPrice(model);
  const tier = TIER_FLOORS.findIndex((floor) => price >= floor);
  return tier < 0 ? MODEL_SHADES - 1 : tier;
}
