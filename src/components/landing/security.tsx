import { Section } from "./section";

const POINTS = [
  {
    title: "Acesso somente para leitura",
    text: "As chaves são usadas apenas para ler dados de uso e custo. O Denarius não altera nem bloqueia nada nas suas contas.",
  },
  {
    title: "Credenciais armazenadas com segurança",
    text: "As chaves são criptografadas, nunca registradas em log e podem ser giradas ou revogadas a qualquer momento.",
  },
  {
    title: "Metadados, não conteúdo",
    text: "O Denarius guarda metadados de uso — tokens, custo, modelo, data. Prompts e respostas nunca são armazenados.",
  },
  {
    title: "Visibilidade individual por permissão",
    text: "O dado por pessoa é restrito a administradores por padrão e pode ser desativado, mantendo o foco nos times.",
  },
  {
    title: "Transparência sobre os dados",
    text: "Cada número mostra quando foi atualizado. Falhas de sincronização e gastos não atribuídos aparecem de forma explícita.",
  },
  {
    title: "Monitora e orienta, não bloqueia",
    text: "O Denarius acompanha, avisa e recomenda. Ele não interrompe o uso dos provedores — a decisão é sempre da empresa.",
  },
];

export function Security() {
  return (
    <Section
      id="seguranca"
      eyebrow="Segurança e confiança"
      title="Criado para dados financeiros e de uso sensíveis."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {POINTS.map((point) => (
          <article key={point.title}>
            <h3 className="font-medium">{point.title}</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {point.text}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
