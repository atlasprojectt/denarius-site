// Objeções da narrativa-mestre, com as respostas curtas dela.

export type FaqItem = { id: string; question: string; answer: string };

export const FAQ_GROUPS: Array<{ id: string; title: string; items: FaqItem[] }> = [
  {
    id: "conexao",
    title: "Conexão e segurança",
    items: [
      {
        id: "chave",
        question: "Dar uma chave de administrador não é arriscado?",
        answer:
          "O Denarius só lê uso e custo, guarda a chave criptografada e ela pode ser revogada a qualquer momento. E dá para começar sem chave nenhuma, só com as assinaturas e a lista de times.",
      },
      {
        id: "proxy",
        question: "Por que não usar um proxy?",
        answer:
          "O proxy exige mudar código e põe um terceiro no caminho de cada chamada e de cada prompt. O Denarius conecta sem tocar no código e não guarda prompts. Quem precisa bloquear pode usar os dois.",
      },
      {
        id: "vigilancia",
        question: "Isso não vira vigilância de funcionário?",
        answer:
          "Não há ranking de pessoas. Nomes só aparecem para administradores, só no contexto de um pico, e a empresa pode desligar a exibição de nomes.",
      },
      {
        id: "ferramentas",
        question: "Funciona com outras ferramentas de IA?",
        answer:
          "OpenAI e Anthropic conectam direto, por leitura. Assinaturas por assento, como ChatGPT Team, Claude Team e Copilot, entram cadastradas, para o total incluir tudo o que a empresa paga.",
      },
    ],
  },
  {
    id: "controle",
    title: "Controle e Simulação",
    items: [
      {
        id: "bloqueio",
        question: "Se não bloqueia, controla o quê?",
        answer:
          "Controle é saber antes. O estouro acontece porque a informação chega com a fatura; um aviso com dias de antecedência dá tempo de agir. Cortar a IA de um time no meio de uma entrega costuma custar mais que o estouro.",
      },
      {
        id: "modelo",
        question: "Usar um modelo mais barato não piora o trabalho?",
        answer:
          "Pode piorar, e o Denarius não diz o contrário. A Simulação mostra o custo de cada escolha; quem conhece o trabalho do time decide se vale. Quando sobra orçamento, ela mostra o caminho inverso: quanto cabe de um modelo melhor.",
      },
      {
        id: "planilha",
        question: "Isso não é só uma planilha?",
        answer:
          "A planilha não tem o gasto de ontem por modelo, o preço de cada modelo nem a projeção do mês. O Denarius junta os três e recalcula a cada mudança, sem ninguém montar nada.",
      },
    ],
  },
  {
    id: "mercado",
    title: "Mercado e prestação de contas",
    items: [
      {
        id: "paineis",
        question: "Os provedores já não têm painel?",
        answer:
          "Cada um mostra só o próprio gasto, em tokens e dólares por projeto. O Denarius junta provedores e assinaturas, em reais, por time, contra um orçamento, com projeção e alerta.",
      },
      {
        id: "preco",
        question: "O preço do token está caindo. O problema não vai sumir?",
        answer:
          "O preço cai, o gasto sobe: o gasto corporativo com IA generativa triplicou de 2024 para 2025. Preço menor libera mais uso.",
      },
      {
        id: "provedores",
        question: "A OpenAI ou a Anthropic não vão fazer isso?",
        answer:
          "Cada provedor controla o próprio produto e não tem motivo para somar o gasto do concorrente. A visão consolidada precisa de alguém neutro.",
      },
      {
        id: "conselho",
        question: "Como presto contas ao conselho?",
        answer:
          "Com o resumo semanal por e-mail e o relatório mensal congelado em PDF, que guarda o mês como ele fechou. A trilha de auditoria registra as ações administrativas.",
      },
    ],
  },
];

const ALL_ITEMS = FAQ_GROUPS.flatMap((group) => group.items);

/** As perguntas que a home mostra antes do "Saiba mais". */
export const HOME_FAQ = ["chave", "modelo", "bloqueio"].map((id) => {
  const item = ALL_ITEMS.find((faq) => faq.id === id);
  if (!item) throw new Error(`Pergunta "${id}" não existe em FAQ_GROUPS.`);
  return item;
});
