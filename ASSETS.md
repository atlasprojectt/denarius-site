# Assets do site — o que criar

Os espaços abaixo ficam vazios até existirem recortes reais do produto. Cada
placeholder no site informa o conteúdo esperado e o tamanho de exportação.

**Formato geral:** WebP ou PNG, fundo escuro combinando com `#050404` e texto
legível quando a imagem encolher para aproximadamente 350 px de largura.

---

## Já existe ✅

| Onde | Arquivo | Situação |
|---|---|---|
| Hero | `public/hero-dashboard.png` | Captura real do painel |
| Hero e CTA | `public/hero-backdrop.jpg` | Fundo da marca |

---

## Faltam — 4 recortes do produto

Os identificadores são os mesmos do atributo `data-asset` no HTML, então dá
para achar cada espaço inspecionando a página.

### 1. `veredito-barra`

**Seção:** “O seu gasto com IA está sob controle?”  
**Proporção:** 16:3 · **Exportar:** 1600 × 300 px

Barra do veredito com status, frase, ação recomendada e data da última
sincronização.

### 2. `orcamento-mes`

**Seção:** “Orçamento no ritmo do mês.” (card 01, tom `ember`)  
**Proporção:** 3:2 · **Exportar:** 1600 × 1067 px

Gasto do mês, orçamento, marcador do dia e projeção de fechamento.

### 3. `composicao-fonte`

**Seção:** “Cada custo com seu responsável.” (card 02, tom `slate`)  
**Proporção:** 3:2 · **Exportar:** 1600 × 1067 px

Provedores, assinaturas, valores e a linha de gasto não atribuído.

### 4. `orcamento-times`

**Seção:** “Riscos priorizados para agir.” (card 03)  
**Proporção:** 3:2 · **Exportar:** 1600 × 1067 px

Times com status, gasto, orçamento e projeção de fechamento.

> **Os três recortes dos cards usam a mesma proporção (3:2), de propósito.** O
> `orcamento-times` era 16:7 e destoava da pilha. Manter a proporção igual nos
> três é o que mantém os cards no prumo.
>
> Dentro dos cards o espaço fica **limpo**: sem legenda visível e sem fundo
> decorativo (`bare` no `AssetSlot`). A descrição continua no `aria-label` e o
> tamanho, aqui. Fora deles — o `veredito-barra` — a legenda permanece à vista.
>
> O recorte é **um pouco menor que o card**, e o que aparece em volta dele é a
> superfície do card fazendo as vezes de borda. Não há sobreposição nem
> transbordo: nada do recorte é cortado, e nada dele avança para fora do card.

---

## Como enviar

Os arquivos podem chegar com qualquer nome. Para facilitar, use os
identificadores acima. Depois eles serão colocados em `public/` e substituirão
os placeholders sem alterar a proporção ou o layout responsivo.
