// Destinos de navegação e conversão do site.

/**
 * Cadastro do app. Hoje é o modo "Criar conta" da tela de login, que sempre
 * abre em "Entrar" (conferido em 11/10/2026). Trocar pelo link direto do
 * cadastro quando o app aceitar um.
 */
export const SIGNUP_URL = "https://app.usedenarius.pro/login";

/** Login do app: a mesma tela, que já abre no modo "Entrar". */
export const SIGNIN_URL = "https://app.usedenarius.pro/login";

export const CONTACT_EMAIL = "joocrepaldi.pro@gmail.com";
export const CONTACT_URL = `mailto:${CONTACT_EMAIL}`;

export const PRIVACY_URL = "https://app.usedenarius.pro/privacidade";
export const TERMS_URL = "https://app.usedenarius.pro/termos";

/** Páginas do site, na ordem de leitura. */
export const PAGES = {
  home: { href: "/", label: "Início" },
  whyNow: {
    href: "/por-que-agora",
    label: "Por que agora",
    summary: "Como a IA virou um custo variável sem dono, e por que o problema não some sozinho.",
  },
  howItWorks: {
    href: "/como-funciona",
    label: "Como funciona",
    summary:
      "Os três passos, a composição do gasto, o veredito, os times, os e-mails e os relatórios.",
  },
  simulation: {
    href: "/simulacao",
    label: "Simulação",
    summary: "Um exemplo passo a passo, o que entra no plano e as regras que mantêm a conta honesta.",
  },
  security: {
    href: "/seguranca",
    label: "Segurança",
    summary: "Só leitura, sem prompts, número honesto e controle sem vigilância.",
  },
  faq: {
    href: "/perguntas",
    label: "Perguntas",
    summary: "As dúvidas de quem precisa decidir antes de conectar.",
  },
} as const;

export type SiteLink = { href: string; label: string; summary?: string };

/**
 * As features do produto, na ordem das perguntas do CEO. Cada destino é o mesmo
 * do "Saiba mais" da home, e o menu Produto da barra usa esta lista.
 */
export const FEATURES = {
  composition: {
    href: "/como-funciona#composicao",
    label: "Composição do gasto",
    summary: "Todo o gasto com IA, em reais, num lugar só.",
  },
  verdict: {
    href: "/como-funciona#veredito",
    label: "Veredito",
    summary: "Se o mês fecha no orçamento, em uma linha.",
  },
  simulation: {
    href: "/simulacao",
    label: "Simulação",
    summary: "O plano e quanto ele economiza, antes da fatura.",
  },
  emails: {
    href: "/como-funciona#alertas",
    label: "Alertas e resumos",
    summary: "O aviso por e-mail antes da fatura, sem ruído.",
  },
  reports: {
    href: "/como-funciona#relatorios",
    label: "Relatórios",
    summary: "O mês em PDF, para o conselho ou o contador.",
  },
} as const;

export type FeatureId = keyof typeof FEATURES;

export const FEATURE_IDS = Object.keys(FEATURES) as FeatureId[];

/** Fontes dos números de mercado, da seção "Fontes" da narrativa-mestre. */
export const SOURCES = {
  chatgptUsers: {
    label: "Reuters",
    detail: "fev. 2023",
    href: "https://finance.yahoo.com/news/1-chatgpt-sets-record-fastest-051929384.html",
  },
  adoption: {
    label: "McKinsey, via Lewis Silkin",
    detail: "mai. 2024",
    href: "https://www.lewissilkin.com/our-thinking/future-of-work-hub/insights/2024/05/30/the-state-of-ai-in-early-2024-gen-ai-adoption-spikes-and-starts-t",
  },
  enterpriseSpend: {
    label: "Menlo Ventures",
    detail: "dez. 2025",
    href: "https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/",
  },
  tokenmaxxing: {
    label: "LeadDev",
    detail: "ago. 2026",
    href: "https://leaddev.com/reporting/the-tokenmaxxing-hype-didnt-last-long",
  },
  uberBudget: {
    label: "The Information, via Enterprise DNA",
    detail: "2026",
    href: "https://enterprisedna.co/resources/news/uber-claude-code-budget-blown-four-months-2026",
  },
  uberCto: {
    label: "Fortune",
    detail: "ago. 2026",
    href: "https://fortune.com/2026/08/07/uber-ai-spending-tokenmaxxing-is-over-cto",
  },
  finops: {
    label: "FinOps Foundation, via USU",
    detail: "mar. 2026",
    href: "https://www.usu.com/en/blog/6-takeaways-from-the-state-of-finops-report-2026",
  },
  tokenPrices: {
    label: "Epoch AI",
    detail: "mar. 2025",
    href: "https://epoch.ai/data-insights/llm-inference-price-trends",
  },
  costGovernance: {
    label: "Mavvrik e Benchmarkit",
    detail: "2026 · 396 empresas",
    href: "https://www.wboc.com/online_features/press_releases/ai-bill-shock-hits-the-boardroom-40-of-companies-escalated-surprise-ai-costs-1-in/article_96bcba22-8751-5f95-8070-c438f3f66945.html",
  },
  ifood: {
    label: "TI Inside",
    detail: "jun. 2026",
    href: "https://tiinside.com.br/03/06/2026/o-que-acontece-quando-agentes-de-ia-passam-a-participar-das-decisoes-de-produto/",
  },
} as const;

export type Source = (typeof SOURCES)[keyof typeof SOURCES];
