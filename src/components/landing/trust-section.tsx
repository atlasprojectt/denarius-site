import { Section } from "./section";

const ACCESSES = [
  "Metadados de uso: contagem de tokens, custo, modelo, data e o identificador da chave ou do projeto.",
  "Chaves somente de leitura, guardadas criptografadas, nunca registradas em log e revogáveis quando você quiser.",
  "As assinaturas e a lista de colaboradores que a própria empresa cadastra.",
];

const LIMITS = [
  "Não lê prompts nem respostas. O tráfego de IA não passa pelo produto, então esse conteúdo nunca chega até ele.",
  "Não bloqueia, não limita e não altera nada nas suas contas de provedor.",
  "Não monta ranking de pessoas: nomes ficam restritos a administradores e o dado por pessoa pode ser desligado.",
];

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
      intro="Conectar dados de gasto é uma decisão de risco. Por isso o alcance do produto é estreito de propósito, e o limite está escrito aqui em vez de ficar no contrato."
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            O que ele acessa
          </p>
          <ul className="mt-5 divide-y divide-border border-t border-border">
            {ACCESSES.map((item) => (
              <li key={item} className="py-4 text-sm leading-7">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            O que ele não faz
          </p>
          <ul className="mt-5 divide-y divide-border border-t border-border">
            {LIMITS.map((item) => (
              <li key={item} className="py-4 text-sm leading-7">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-14 max-w-3xl border-l-2 border-brand-accent pl-5 text-base leading-8 text-foreground sm:text-lg">
        Ser somente leitura é um limite declarado: o Denarius governa por
        visibilidade, aviso e recomendação, nunca interrompendo o uso. E nenhum
        número aparece sem procedência — cada valor mostra quando foi
        atualizado, os dados são sincronizados uma vez por dia, e sincronização
        atrasada ou gasto sem atribuição aparecem na tela em vez de sumir.
      </p>
    </Section>
  );
}
