import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/denarius/components/ui/card";
import { CompositionList, type CompositionRow } from "./composition-list";
import { VendorCard, type VendorCardData } from "./vendor-card";

// The composition piece for the landing page: the vendor cards over the
// "Assinaturas e chaves" list (app/(app)/explorar), inside one card.
// Interactive: "Ver modelos" opens the real models panel and comparison.

const copy = {
  itemsTitle: "Assinaturas e chaves",
  itemsSub:
    "Cada assinatura por assento e cada projeto de API conectado, do maior gasto para o menor.",
};

export type CompositionDemoProps = {
  vendors: VendorCardData[];
  rows: CompositionRow[];
  /** e.g. "setembro", the delta column's month. */
  previousMonth: string;
  currency: string;
};

export function CompositionDemo({ vendors, rows, previousMonth, currency }: CompositionDemoProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <div className="grid gap-4 md:grid-cols-3">
          {vendors.map((card) => (
            <VendorCard key={card.vendor} data={card} currency={currency} />
          ))}
        </div>
        <Card aria-labelledby="items-title" className="gap-0 py-0">
          <CardHeader className="pt-4 pb-3">
            <CardTitle as="h3" id="items-title">
              {copy.itemsTitle}
            </CardTitle>
            <CardDescription>{copy.itemsSub}</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <CompositionList rows={rows} previousMonth={previousMonth} />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
