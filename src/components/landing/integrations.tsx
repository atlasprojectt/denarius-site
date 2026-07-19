import { Section } from "./section";

const SOURCES = [
  { name: "OpenAI", detail: "Uso e custo via Admin API" },
  { name: "Anthropic", detail: "Uso e custo do Claude via Admin API" },
  { name: "Colaboradores (CSV)", detail: "Importação da estrutura da empresa" },
  { name: "Assinaturas manuais", detail: "Ferramentas e assentos pagos" },
];

export function Integrations() {
  return (
    <Section
      id="integracoes"
      eyebrow="Integrações"
      title="Seus gastos com IA conectados em um só lugar."
      intro="OpenAI e Anthropic são as integrações principais. Importação de colaboradores e assinaturas registradas manualmente completam a visão."
    >
      {/* Simple structural diagram: sources → Denarius. */}
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
        <ul className="grid gap-3 sm:grid-cols-2">
          {SOURCES.map((source) => (
            <li
              key={source.name}
              className="rounded-lg border border-black/10 p-4 dark:border-white/10"
            >
              <p className="font-medium">{source.name}</p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {source.detail}
              </p>
            </li>
          ))}
        </ul>

        <div
          aria-hidden="true"
          className="hidden text-center text-2xl text-zinc-400 lg:block"
        >
          →
        </div>

        <div className="rounded-lg border border-black/10 bg-black/[0.02] p-6 text-center dark:border-white/10 dark:bg-white/[0.02]">
          <p className="font-semibold">Denarius</p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Uso convertido em dinheiro, atribuído aos times e comparado ao
            orçamento.
          </p>
        </div>
      </div>
    </Section>
  );
}
