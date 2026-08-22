# Design system — Denarius

## Propósito

O sistema visual do Denarius deve transmitir governança financeira: preciso, calmo, sóbrio e contemporâneo. A interface usa contenção, não ornamento, para tornar dados e decisões confiáveis. O site e o produto devem parecer partes da mesma empresa.

Este documento registra a base já presente no site e estabelece padrões para novas composições. Ele não define uma página específica; define as regras que mantêm as páginas coerentes.

## Princípios de composição

- Hierarquia antes de decoração: cada bloco deve ter uma função clara na leitura.
- Um foco por área: uma seção, card ou visual deve responder a uma ideia principal.
- Espaço em blocos: título e subtítulo formam uma unidade; controles, imagens e grupos de informação recebem respiro próprio.
- Contraste por superfície e tipografia, não por efeitos visuais excessivos.
- Bordas delimitam; não decoram. Elas são discretas e só existem quando esclarecem agrupamento ou estrutura.
- O laranja identifica ação, seleção e ênfase. Não substitui cores semânticas.
- A interface não deve parecer uma pilha de cartões idênticos nem uma sequência de elementos com o mesmo peso.

## Fundamentos existentes

### Cor

A base é escura e neutra, com pequenas diferenças de luminância entre fundo e superfícies. A paleta atual é definida por tokens CSS.

| Papel | Token | Valor/base atual | Uso |
| --- | --- | --- | --- |
| Fundo principal | `--background` | `#050404` | Página e áreas de maior silêncio visual. |
| Superfície elevada | `--card` | `#0c0b0b` | Seções elevadas, painéis e espaços reservados. |
| Ação e marca | `--primary` / `--brand-accent` | `#ff5a1f` | CTA principal, estado ativo, dados de maior importância. |
| Texto principal | `--foreground` | claro sobre fundo escuro | Títulos, valores e informações prioritárias. |
| Texto secundário | `--muted-foreground` | mistura do texto claro com o fundo | Explicações e informação de apoio. |
| Borda comum | `--border` | branco em baixa opacidade | Separação discreta de controles e cards. |
| Linha estrutural | `--frame-line` | branco em opacidade ainda menor | Moldura vertical e divisórias de seção. |

Estados semânticos são exclusivos para informação de estado:

- Verde (`--status-green`): cenário controlado ou saudável.
- Âmbar (`--status-amber`): atenção ou risco projetado.
- Vermelho (`--status-red`): erro ou estouro confirmado.

O laranja não deve indicar erro, excesso de orçamento ou risco projetado.

### Tipografia

O sistema usa duas famílias com papéis diferentes:

| Família | Uso | Característica |
| --- | --- | --- |
| Poppins | Títulos, navegação, controles, valores e texto de leitura principal | Hierarquia clara, peso controlado e aparência editorial. |
| DM Mono | Eyebrows, rótulos, metadados e texto explicativo | Precisão técnica e financeira sem disputar atenção com os títulos. |

Regras:

- Títulos usam peso normal ou moderado. A escala cria hierarquia antes do negrito.
- Eyebrows usam DM Mono em caixa alta, tamanho pequeno e tracking amplo.
- Texto explicativo usa DM Mono em tamanho menor que o corpo principal, entrelinha generosa e contraste reduzido.
- Títulos devem ser curtos e ter largura controlada; textos de apoio não devem formar blocos largos ou centralizados sem necessidade.
- Os níveis atuais de título de seção são `statement`, `standard` e `quiet`. A variação entre eles deve refletir a importância narrativa da seção.

### Raios

Os raios atuais formam uma escala, e não um único valor aplicado a tudo:

| Uso | Raio |
| --- | --- |
| Controle denso | 6 px (`--radius-sm`) |
| Inputs e controles usuais | 10 px (`--radius-md`) |
| Botões e painéis compactos | 14 px (`--radius-lg`) |
| Cards grandes | 16–20 px (`--radius-2xl` e `--radius-3xl`) |
| Botão pequeno no cabeçalho | Pill, apenas quando a baixa altura justificar |

O raio acompanha escala e função. Não transformar todo elemento em pill.

### Bordas e superfícies

O sistema trabalha com superfícies neutras, pouca ou nenhuma sombra e bordas de baixo contraste. A profundidade vem principalmente de:

1. diferença sutil entre fundo e superfície;
2. borda fina em baixa opacidade;
3. espaçamento entre planos;
4. ordem de leitura.

Não usar sombra forte, glow como estrutura, bordas laranja em todos os cards ou múltiplos níveis de cinza sem função semântica.

### Moldura de conteúdo

Em telas largas, as seções compartilham uma moldura vertical contínua (`--frame-line`) dentro de uma largura máxima de `max-w-6xl`. A moldura pertence ao fluxo da página, acompanha a rolagem e delimita o espaço em que o conteúdo existe.

As seções alternam entre superfície base e elevada. Quando uma seção tem regra superior, a próxima não duplica essa linha. O objetivo é continuidade, não grade decorativa.

### Espaçamento e ritmo

O espaçamento é organizado por relação, não por uma distância fixa repetida:

- Eyebrow → título: curto.
- Título → texto de apoio: médio.
- Cabeçalho de seção → conteúdo: amplo.
- Elementos que pertencem ao mesmo componente: compacto, mas legível.
- Blocos com funções diferentes: maior separação.
- Seções narrativas principais: respiro vertical maior que as seções auxiliares.

A referência atual de seção é de 64/80/96 px de preenchimento vertical nas seções padrão e 80/112/128 px nas seções de maior importância, em escalas responsivas. Novos componentes devem preservar essa sensação de agrupamento e respiro, sem criar vazios arbitrários.

## Componentes e padrões existentes

### Cabeçalho de seção

Ordem fixa: eyebrow opcional → título → introdução opcional → conteúdo. Essa sequência cria uma leitura previsível e evita que todas as seções tenham o mesmo peso.

### CTA

Há dois níveis:

- Primário: fundo laranja, texto escuro, usado para a ação principal do contexto.
- Secundário: superfície neutra preenchida, usado para ação complementar.

Em hover, o corpo do CTA permanece estável ou sobe no máximo 1 px; uma seta opcional pode avançar 2 px. Não usar escala, pulsação, bounce ou glow chamativo como feedback.

### Cards de capacidade

Os cards atuais combinam uma afirmação textual com uma evidência visual. A imagem ou slot de imagem faz parte do fluxo e preserva sua proporção, evitando que a substituição posterior altere o layout. A alternância do lado da evidência cria ritmo, mas a superfície e a estrutura permanecem consistentes.

### Listas, FAQ e estados

- Linhas divisórias organizam listas densas.
- Ícones são funcionais: confirmam, negam, expandem ou orientam; não decoram títulos.
- FAQ usa disclosure acessível com estado expandido, foco visível e movimento reduzido quando solicitado pelo sistema.
- Cores semânticas aparecem com texto contextual, nunca como único meio de comunicar estado.

### Espaços de imagem

Quando um visual final não está disponível, o site reserva a proporção e registra seu objetivo e tamanho de exportação. O placeholder não deve simular uma interface inexistente. Cada imagem deve provar uma funcionalidade específica, não tentar mostrar toda a plataforma em uma única composição.

## Novo padrão: cards em plano sobreposto

### Objetivo

Usar um card maior como plano de contexto e cards menores como unidades de informação relacionadas. O conjunto deve ler como uma composição única, não como cards encaixados arbitrariamente.

Esse padrão é indicado quando há uma relação de pertencimento clara, por exemplo: uma visão financeira contendo quatro princípios de confiança, ou um resumo contendo métricas complementares. Não é indicado apenas para “deixar mais bonito”.

### Estrutura

O padrão possui dois níveis:

1. **Card externo (canvas):** define o agrupamento e oferece a moldura mais ampla.
2. **Cards internos (unidades):** apresentam informações independentes dentro do mesmo contexto.

Os cards internos ficam visualmente sobre o plano do card externo, mas permanecem alinhados por uma margem regular. Eles não devem tocar a borda externa, nem criar uma sequência de mais de dois níveis de aninhamento.

### Regra geométrica da borda interna

Defina:

- `R_ex`: raio do card externo.
- `M`: margem entre o limite interno do card externo e o limite do card interno.
- `R_int`: raio do card interno.

A regra é:

`R_int = max(R_ex − M, R_min)`

Em outras palavras, o raio interno acompanha o externo e diminui exatamente pela margem que separa os dois planos. Isso faz as curvas parecerem intencionalmente concêntricas.

Para o espaço útil do card interno, a relação é:

`largura_int = largura_ex − 2M`

`altura_int = altura_ex − 2M`

Como ponto de partida:

| Escala do card externo | `R_ex` | `M` | `R_int` recomendado |
| --- | ---: | ---: | ---: |
| Compacto | 14 px | 6 px | 8 px |
| Padrão | 16 px | 8 px | 8 px |
| Amplo | 20 px | 10–12 px | 8–10 px |

`R_min` é 8 px para evitar que o card interno pareça quadrado ou perca a relação com o restante do sistema.

### Borda e contraste

- Card externo: borda de 1 px, usando a linha estrutural ou a borda comum em baixa opacidade.
- Card interno: borda de 1 px com contraste igual ou ligeiramente mais discreto que a externa.
- Não engrossar a borda para compensar contraste. A separação entre planos vem da margem e da pequena diferença de superfície.
- A margem entre os dois cartões deve permanecer visível em todos os lados; ela é o “respiro de borda” do padrão.
- Sem sombras duras. Se houver elevação, ela deve ser quase imperceptível e nunca substituir a borda.

### Espaçamento interno

O card externo não recebe conteúdo competitivo além do que explica o grupo (por exemplo, título curto ou rótulo). Os cards internos recebem conteúdo próprio e padding proporcional à sua densidade.

Para manter o agrupamento legível:

- margem entre card externo e interno: 6–12 px, conforme a escala;
- lacuna entre cards internos: igual ou maior que a margem de borda; nunca menor;
- padding de conteúdo do card interno: normalmente 16–24 px;
- se houver título de grupo no card externo, separar título e grade interna com um intervalo maior que a margem de borda.

### Hierarquia visual

O plano externo tem presença silenciosa: organiza. Os cards internos têm a informação: explicam. Apenas um elemento por conjunto pode receber acento laranja ou cor semântica; os demais usam o contraste neutro.

Evitar:

- colocar títulos grandes no card externo e em todos os internos;
- repetir ícones decorativos em cada unidade;
- criar bordas espessas em ambos os níveis;
- preencher todos os espaços livres com badges, gráficos ou textos;
- usar o padrão para itens sem relação de pertencimento;
- criar um terceiro nível de card dentro do card interno.

### Responsividade

Em telas menores, manter o card externo como contexto e empilhar os cards internos. A margem de borda pode reduzir, mas não desaparecer; use 6–8 px como mínimo. O raio interno deve continuar obedecendo à relação com o raio externo. Não comprimir cards lado a lado se a largura tornar o conteúdo ilegível.

## Movimento e interação

Os tokens atuais definem 120 ms para interações rápidas, 160 ms como duração padrão e até 180 ms para microinterações. A curva principal é `cubic-bezier(0.22, 1, 0.36, 1)`.

Movimento deve confirmar uma interação ou organizar a entrada de conteúdo. A página respeita `prefers-reduced-motion`: conteúdo não pode depender de animação para estar disponível, e transições devem ser reduzidas de forma segura.

## Acessibilidade

- Texto secundário deve manter contraste suficiente sobre o fundo escuro.
- O foco de teclado usa o anel laranja da marca e permanece visível.
- Controles são elementos semânticos reais.
- Ícones decorativos recebem `aria-hidden`; imagens e slots recebem descrição útil.
- Informação de estado não depende somente de cor.
- Não esconder conteúdo essencial em hover ou em animações.

## Critérios de revisão

Antes de aprovar uma nova seção ou componente, verificar:

- A importância de cada bloco é evidente sem depender de cor?
- O espaço separa grupos diferentes e mantém juntos os elementos relacionados?
- A borda está delimitando uma relação real?
- Há apenas um foco principal na área?
- O laranja está sendo usado como acento, e não como superfície estrutural?
- Cards sobrepostos respeitam `R_int = max(R_ex − M, R_min)` e deixam a margem visível?
- O componente funciona empilhado em telas pequenas?
- Estados, foco e movimento continuam acessíveis?
