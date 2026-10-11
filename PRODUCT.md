# Product

<!-- impeccable:product-schema 1 -->

Registro durável do produto para trabalho de design. A fonte de verdade da história e dos números é [docs/nova-landing/narrativa-mestre.md](docs/nova-landing/narrativa-mestre.md); as regras desta worktree estão em [CLAUDE.md](CLAUDE.md).

## Platform

web

## Stack

Delegado ao Claude (11/10/2026): Next.js (App Router) com TypeScript e Tailwind CSS, npm, deploy na Vercel. Escolhido por ser nativo da Vercel e próximo da base do app.

## Users

Empresas de tecnologia de 20 a 200 pessoas que usam IA em vários times e não têm equipe de FinOps nem de plataforma de IA. Quem compra é o CEO ou o CTO, que dá cerca de dez segundos a cada visita; o financeiro (CFO, controller) acompanha junto e precisa prever o fechamento e explicar a conta.

## Product Purpose

Orçamento, veredito e simulação para o gasto com IA. O Denarius conecta OpenAI e Anthropic por leitura, soma as assinaturas por assento, converte tudo em reais, divide por time, responde se o mês fecha dentro do orçamento e, quando não fecha, simula num plano onde o mês passa a fechar.

## Positioning

"Um plano de observabilidade unificado" do gasto com IA (palavras do fundador): lê, consolida, projeta e simula. Nunca é limitador nem agente. Ver o gasto virou gratuito; o Denarius vende a decisão: o veredito, onde o mês fecha e a comparação de um plano antes da fatura.

## Operating Context

O CEO abre o Início, lê o veredito, recebe alertas por e-mail e o resumo semanal. O financeiro usa o orçamento por time, a projeção e o relatório mensal congelado em PDF. Líderes de time veem os totais do próprio time, sem nomes individuais.

## Capabilities and Constraints

- Lê uso e custo das APIs administrativas da OpenAI e da Anthropic uma vez por dia. Não bloqueia, não limita, não roteia, não aplica nada e não guarda prompts nem respostas.
- Projeção por regras fixas a partir do 5º dia do mês; a IA só redige o texto.
- Simulação: comparação de modelo e volume num plano, a preço de tabela, com ≈ em todo número simulado. O plano não é salvo nem compartilhado.
- Estágio: pré-lançamento, sem clientes pagantes. Preço não definido.

## Brand Commitments

- "Governança de gasto com IA" acompanha o nome no título das páginas e no rodapé, para afastar a leitura de cripto. Ao lado do logo, não (decisão do fundador, 11/10/2026).
- O logo é o do app (`src/components/site/logo.tsx`, traços idênticos aos de app.usedenarius.pro); o favicon é o ícone do app.
- Visual herdado do app: [docs/nova-landing/DESIGN.md](docs/nova-landing/DESIGN.md) ("The Quiet Ledger").
- Copy em pt-BR, clara antes de impressionante. O Ramp não é citado na landing.

## Evidence on Hand

Números de mercado com fonte na seção "Fontes" da narrativa. Não há clientes, depoimentos, logos, estudos de caso, certificações nem percentual de economia próprio; nada disso pode ser inventado. As telas do produto ainda serão capturadas com dados de demonstração.

## Product Principles

1. Veredito antes de gráfico.
2. Número honesto ou nenhum número.
3. Controle, não vigilância.
4. Só leitura, por princípio: o sistema aponta, a empresa decide.
5. Feito para o Brasil: reais, português, LGPD.
