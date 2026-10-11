import { StatusPill } from "@/components/ui/status-pill";
import { VERDICTS } from "@/content/verdicts";

/** Os vereditos de exemplo, um por linha, cada um com o seu status. */
export function VerdictList({ count = VERDICTS.length }: { count?: number }) {
  return (
    <div>
      <ul className="border-t border-hairline">
        {VERDICTS.slice(0, count).map((verdict) => (
          <li key={verdict.status} className="flex flex-col gap-3 border-b border-hairline py-5">
            <StatusPill status={verdict.status} />
            <p className="type-title-lg text-ink">{verdict.sentence}</p>
          </li>
        ))}
      </ul>
      <p className="type-caption mt-3 text-ash">
        Exemplo ilustrativo. Verde, âmbar e vermelho só aparecem para o status do orçamento.
      </p>
    </div>
  );
}
