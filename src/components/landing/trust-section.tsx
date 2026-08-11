import { CheckIcon, XIcon } from "lucide-react";
import { Reveal } from "./reveal";
import { Section } from "./section";

const ACCESSES = [
  "Metadados de uso: tokens, custo, modelo, data e chave.",
  "Chaves somente de leitura, criptografadas e revogáveis.",
  "Assinaturas e colaboradores cadastrados pela sua empresa.",
];

const LIMITS = [
  "Não lê prompts ou respostas.",
  "Não bloqueia nem altera seus provedores.",
  "Não cria rankings individuais.",
];

/**
 * As duas colunas entram com o mesmo atraso interno, então "o que ele acessa" e
 * "o que ele não faz" aparecem em paralelo — o limite tem o mesmo peso da
 * capacidade, e a animação não sugere que um venha depois do outro.
 */
function TrustColumn({
  label,
  items,
  delay,
  tone,
}: {
  label: string;
  items: string[];
  delay: number;
  /** `allow` marca o que o produto acessa; `deny`, o que ele não faz. */
  tone: "allow" | "deny";
}) {
  const Icon = tone === "allow" ? CheckIcon : XIcon;

  return (
    <div>
      <Reveal delay={delay}>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
      </Reveal>
      <ul className="mt-5 divide-y divide-border border-t border-border">
        {items.map((item, index) => (
          <Reveal
            key={item}
            as="li"
            delay={delay + (index + 1) * 0.06}
            className="flex gap-3 py-4 text-sm leading-7"
          >
            {/* O ícone repete o rótulo da coluna item a item — a distinção
                entre acessa e não faz é o argumento inteiro da seção. */}
            <Icon
              aria-hidden="true"
              className={`mt-1.5 size-4 shrink-0 ${
                tone === "allow" ? "text-status-green" : "text-muted-foreground"
              }`}
            />
            <span>{item}</span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

/**
 * Confiança tratada como argumento, não como grade de ícones: o que o produto
 * acessa de um lado, o que ele deliberadamente não faz do outro. Os limites são
 * parte da proposta, então aparecem com o mesmo peso das capacidades.
 */
export function TrustSection() {
  return (
    <Section
      id="confianca"
      eyebrow="Confiança"
      title="O que o Denarius vê — e o que ele não vê."
      intro="O produto acessa apenas os dados necessários para organizar custos e acompanhar orçamentos."
      rule
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <TrustColumn
          label="O que ele acessa"
          items={ACCESSES}
          delay={0}
          tone="allow"
        />
        <TrustColumn
          label="O que ele não faz"
          items={LIMITS}
          delay={0.08}
          tone="deny"
        />
      </div>

      <Reveal>
        <p className="mt-14 max-w-3xl border-l-2 border-brand-accent pl-5 text-base leading-8 text-foreground sm:text-lg">
          Cada valor informa quando foi atualizado. O Denarius mostra o
          contexto; a decisão continua sendo sua.
        </p>
      </Reveal>
    </Section>
  );
}
