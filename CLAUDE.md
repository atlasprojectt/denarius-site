# CLAUDE.md — nova landing do Denarius

Esta worktree é o recomeço da landing page do Denarius, do zero. O branch `worktree-nova-landing` é órfão: não carrega código, histórico nem documentação do site anterior.

## Precedência

A worktree fica dentro da pasta do repositório antigo (`denarius-site/.claude/worktrees/nova-landing`), então o Claude Code também carrega o `CLAUDE.md` e o `AGENTS.md` da raiz de `denarius-site`. Eles descrevem o site antigo. **Quando conflitarem com este arquivo, este arquivo vence.**

Salvo pedido explícito, não leia nem reaproveite nada do repositório pai: `CONTENT.md`, `UI.md`, `SITE.md`, `DESIGN_SYSTEM.md`, `ASSETS.md`, `context.md` ou o código em `src/`.

## Fontes de verdade

Leia as duas antes de planejar ou implementar qualquer seção:

| Arquivo | Responde | Conteúdo |
|---|---|---|
| [docs/nova-landing/narrativa-mestre.md](docs/nova-landing/narrativa-mestre.md) | O que dizer | História, claims, números com fonte, estrutura da landing, banco de frases e o que não dizer |
| [docs/nova-landing/DESIGN.md](docs/nova-landing/DESIGN.md) | Como parecer | Design system do app ("The Quiet Ledger"): tokens, tipografia, cor, forma e receitas |

Os dois são documentos do fundador. Não os edite sem pedido; se algo neles parecer errado ou conflitante, aponte em vez de corrigir por conta própria.

## O que o Denarius é

Nas palavras do fundador (11/10/2026), o Denarius é "um plano de observabilidade unificado" do gasto com IA: ele lê, consolida, projeta e simula. **Nunca é limitador nem agente.** Não bloqueia, não limita, não roteia chamadas, não aplica nada aos provedores e não age sozinho. Quem decide e quem age é a empresa.

Se a palavra "observabilidade" entrar na copy, deixe claro que é do gasto, para o executivo. A narrativa trata a observabilidade de LLM (por requisição, para quem programa) como uma alternativa que não resolve o problema.

**Simulação é comparação no plano, não troca de modelo** (decisão do fundador, 11/10/2026). Dentro da Simulação, o usuário troca o modelo de um time, e o volume, para ver em quanto o mês fecha contra o orçamento. O hero e a seção 4 podem mostrar essa comparação; o exemplo de Engenharia (Opus → Sonnet) entra como cálculo. A landing nunca apresenta a troca de modelo como algo que o Denarius faz ou recomenda: o plano é um cálculo e nada é aplicado. Frases do Banco que prometem "troca de modelo", como o subtítulo, precisam ser reescritas nesse enquadramento.

## Conteúdo

- **Regra de ouro:** todo número precisa ter fonte na seção "Fontes" da narrativa. Número sem fonte não entra.
- **Estrutura** (decisão do fundador, 11/10/2026): a home mostra só o essencial, de forma concisa, e cada seção dela termina num "Saiba mais" que leva à rota do assunto. O detalhe mora nas rotas: `/por-que-agora`, `/como-funciona`, `/simulacao`, `/seguranca` e `/perguntas`, ligadas em sequência por "Próxima página". A ordem da história segue "A landing, seção por seção" da narrativa, e o ranking de "Ordem das features" decide o peso de cada bloco: a Simulação ganha o maior destaque. Conteúdo novo entra na rota do assunto, não na home.
- **Copy:** pt-BR, no tom da narrativa (claro antes de impressionante). Títulos, subtítulo e chamadas saem do "Banco de frases". Siga a tabela "O que não dizer, e o que dizer no lugar".
- **Fatos do produto que não se distorcem:**
  - o Denarius só lê uso e custo;
  - sincroniza todo dia, nunca "em tempo real";
  - não guarda prompts nem respostas, só metadados de uso;
  - a projeção é calculada por regras fixas; a IA só redige o texto;
  - a Simulação estima a preço de tabela: não garante economia nem afirma que dois modelos entregam o mesmo resultado;
  - controle, não vigilância: não existe ranking de pessoas.
- **Estágio:** pré-lançamento, sem clientes pagantes. Não invente clientes, depoimentos, logos, números de uso, percentual de economia próprio, certificações nem integrações além de OpenAI, Anthropic e assinaturas cadastradas. Itens da "Visão" só entram como próximos passos.
- **Preço não definido:** nada de preço, plano gratuito, teste grátis, "sem cartão" ou lista de espera.
- **Sem o nome do Ramp** (decisão do fundador): a landing diz "painel gratuito" e não cita nenhuma marca concorrente. O nome fica só no pitch e no deck. Números cuja fonte é o Ramp, como os 12% de economia, ficam fora da landing, porque citá-los exigiria nomear a fonte.

### Visuais do produto

Mostre o produto como ele é: telas reais com dados de demonstração, ou reproduções em código fiéis às receitas do DESIGN.md (veredito, barra de ritmo, Simulação). Nunca invente tela, elemento ou recurso que o app não tem. Todo visual com números leva o rótulo "exemplo ilustrativo"; número simulado leva ≈ e o rótulo "Simulação".

### Chamadas para ação

- **"Pedir demonstração"** é a chamada principal (decisão do fundador, 11/10/2026, substitui "Simule o fechamento do seu mês" e "Criar conta"). O app está em beta fechado, sem cadastro aberto: cada demonstração é marcada com o fundador. O botão abre um e-mail para `joocrepaldi.pro@gmail.com` com o assunto "Demonstração do Denarius" (`DEMO_URL` em `src/lib/links.ts`). No cabeçalho o rótulo é "Pedir demo", para a barra caber num celular de 360px. Nunca "lista de espera".
- **"Ver como funciona"** é a chamada secundária, no lugar de "Fale com o fundador": o caminho para quem ainda não quer conversar. Na própria página Como funciona, a chamada final fica só com o pedido de demonstração. O e-mail do fundador continua no footer e no lead das Perguntas.
- **"Entrar"** fica no cabeçalho, para quem já tem acesso: `https://app.usedenarius.pro/login`.
- **Footer:** Privacidade e Termos de uso são páginas do app, em `https://app.usedenarius.pro/privacidade` e `https://app.usedenarius.pro/termos`.

Não invente formulário, agenda nem fluxo de demonstração.

## Design

O DESIGN.md foi escrito para o app e cita arquivos que não existem aqui (`app/globals.css`, `lib/bars.ts`, `components/domain/*`, `tests/design-system.test.ts`). Use-o como especificação, não como código.

- **Valem por inteiro:** os tokens primitivos (cores, DM Sans e DM Mono, raios, espaçamento), a escada de quatro tintas, as regras de cor (laranja só como estado ligado, marca ou gasto; verde, âmbar e vermelho só para status de orçamento; violeta para simulação e modelos), a Inverse Weight Rule, Pill-Means-Press, Concentric, Flat-at-Rest, a proibição do eyebrow e numerais tabulares em todo número.
- **Links de texto** (decisão do fundador, 11/10/2026): o sublinhado fica laranja (`--coin-orange`) no hover e no foco do teclado, em todos os links do site; o texto continua na tinta. Use os utilitários `link-underline` e `link-hover-underline` do `globals.css`, nunca a cor solta.
- **São do app e não se transferem sozinhas:** a sidebar, o grid do cockpit, o `PageHeader`, a busca e a escala sem `clamp()` (essa regra vale "dentro do app").
- **O que o DESIGN.md não cobre** (display maior que 44px, ritmo entre seções, composição do hero, navegação do site): proponha uma extensão coerente com as regras dele, como o peso caindo conforme o tamanho sobe, e registre a decisão em vez de improvisar em silêncio.
- **Tema:** claro e escuro, com os valores do DESIGN.md para cada um. Por padrão segue o sistema (`prefers-color-scheme`); um seletor no footer troca o tema e guarda a escolha. A opção selecionada usa `signal-orange`, como o DESIGN.md manda para o seletor de tema. O tema certo precisa estar aplicado antes da primeira pintura, sem piscar.

## Stack

**Next.js (App Router) com TypeScript e Tailwind CSS, deploy na Vercel**, gerenciado com npm. É a stack nativa da Vercel; o DESIGN.md (`app/globals.css`, React Server Components, classes Tailwind) indica que o app usa a mesma base, então os tokens se traduzem direto.

- Use a versão estável mais recente de cada pacote no momento de criar o projeto. A versão instalada do Next.js pode ter mudanças incompatíveis com o que você conhece: leia o guia em `node_modules/next/dist/docs/` antes de escrever código e respeite os avisos de depreciação.
- A landing é estática: Server Components por padrão e componente de cliente só onde há interação, como o seletor de tema.
- DM Sans e DM Mono carregadas pelo sistema de fontes do Next.js, sem layout shift.
- Tokens do DESIGN.md como variáveis CSS, expostas ao Tailwind.
- Não adicione dependência para o que CSS ou um script pequeno resolvem.

## Qualidade

Quando houver conflito, a ordem é: exatidão factual, clareza, confiança, conversão, coerência com o app, usabilidade e acessibilidade, refinamento visual, novidade.

- HTML semântico, navegação por teclado com foco visível e contraste AA. A escada de tintas foi medida para isso: respeite as superfícies em que cada degrau pode ficar.
- `prefers-reduced-motion` respeitado; nenhuma informação essencial escondida atrás de animação.
- Mobile tão deliberado quanto desktop, com alvos de 44px abaixo de md e sem layout shift.
- Antes de dar algo por concluído: lint, typecheck e build (quando existirem) e conferência no navegador em desktop e mobile.
