# Denarius — site

Landing page do [Denarius](https://app.usedenarius.pro), governança de gasto com IA. O Denarius lê uso e custo da OpenAI e da Anthropic, soma as assinaturas, divide por time e responde se o mês fecha dentro do orçamento. O site explica isso e leva ao pedido de demonstração.

## Rodando localmente

Requer Node.js 20.9 ou mais recente.

```bash
npm install
npm run dev
```

O site abre em [http://localhost:3000](http://localhost:3000).

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Serve o build de produção |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Checagem de tipos |

## Variáveis de ambiente

Copie `.env.example` para `.env.local`. Só o formulário de demonstração usa variáveis:

| Variável | Obrigatória | Para quê |
|---|---|---|
| `RESEND_API_KEY` | Sim, em produção | Envia o pedido de demonstração por e-mail via [Resend](https://resend.com) |
| `DEMO_TO_EMAIL` | Não | Quem recebe os pedidos (padrão: `CONTACT_EMAIL` em `src/lib/links.ts`) |
| `DEMO_FROM_EMAIL` | Não | Remetente (padrão: `Denarius <onboarding@resend.dev>`) |

Sem a chave, em desenvolvimento o pedido só aparece no terminal.

## Estrutura

```
src/
  app/            Rotas: home, /por-que-agora, /como-funciona, /simulacao,
                  /seguranca, /perguntas, /demonstracao e /api/demo
  components/     Componentes do site (home, páginas, UI, tema, movimento)
  content/        Dados das perguntas frequentes e dos vereditos
  denarius/       Peças do produto reproduzidas em código (veredito,
                  simulação, relatórios, resumo por e-mail) com os tokens do app
  lib/            Links centrais (links.ts) e o envio do pedido de demo
  assets/         Telas e fundos
docs/nova-landing/
  narrativa-mestre.md   O que dizer: história, claims e fontes dos números
  DESIGN.md             Como parecer: design system do app ("The Quiet Ledger")
```

## Regras de conteúdo

O site está em pré-lançamento. Antes de mudar copy ou visual, leia [`CLAUDE.md`](CLAUDE.md), [`PRODUCT.md`](PRODUCT.md) e os dois documentos em `docs/nova-landing/`. Em resumo: todo número precisa de fonte, nada de clientes, depoimentos ou preço inventados, e o Denarius só lê — não bloqueia, não limita e não guarda prompts.

## Stack e deploy

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 e GSAP para movimento. Deploy na Vercel.
