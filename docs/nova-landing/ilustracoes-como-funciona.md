# Ilustrações para a página Como funciona

Briefing para extrair, do app Denarius, as peças que faltam na página
`/como-funciona` da landing (worktree `nova-landing`). Escrito em 12/10/2026.

## O que já existe (não precisa fazer)

| Seção da página | Peça | Onde está |
|---|---|---|
| Configuração | Conexão das chaves, interativa | `src/denarius/chaves/` |
| Composição | Texto (as contas do total); a tela da composição fica na home | `src/denarius/composicao/` |
| Veredito | Texto + exemplos de status; a tela do veredito fica na home | `src/denarius/veredito/` |
| Relatórios | Texto; a folha do relatório fica na home | `src/denarius/relatorios/` |

## O que falta

### 1. Lista de times (essencial)

- **Seção:** "Cada time com o seu orçamento." (`#times`). Hoje é um espaço
  reservado (skeleton `AssetSlot layout="teams"`).
- **Tela do app:** a lista de times.
- **Precisa mostrar:**
  - cada time com o orçamento do mês, o gasto, a projeção de fechamento e o
    status;
  - pelo menos um time em cada status: No controle, Atenção e Estourado
    (os rótulos são fixos no app);
  - o botão "Simular" no time que não vai fechar;
  - só totais por time: nenhum nome de pessoa (regra "controle, não
    vigilância").
- **Formato preferido:** componente interativo, no mesmo padrão das peças
  existentes (ver "Como entregar"). Se a interação for pequena, basta o hover
  das linhas; o "Simular" pode ser só visual.
- **Formato aceito:** PNG em 2x, tema escuro, 16:10 (2400×1500), recortado na
  área do app, sem a barra do navegador.

### 2. E-mail de alerta (recomendado)

- **Seção:** "Quando um alerta chega." (`#alertas`). Hoje o alerta é um cartão
  de texto escrito à mão, baseado no exemplo da narrativa-mestre.
- **O que é:** o e-mail que o app envia quando um time cruza 80%, 100% ou a
  projeção de estouro, como chega na caixa de entrada.
- **Precisa mostrar:**
  - o time e o nível do alerta (status Atenção, de preferência);
  - o tamanho do problema em reais: o percentual do orçamento, a projeção e a
    diferença para o limite;
  - os maiores contribuintes do aumento.
- **Formato preferido:** componente, como o resumo semanal já feito em
  `src/denarius/resumo-email/` (`email-demo.tsx` + `mail-mock.tsx`): a mesma
  moldura de caixa de entrada, com o corpo do alerta no lugar do resumo.
- **Formato aceito:** PNG em 2x do e-mail real, 4:3 (1800×1350).

## Como entregar

- **Componente interativo:** uma pasta em `src/denarius/<feature>/` com
  1. `<feature>-dados.ts`: os dados de demonstração, como props tipadas;
  2. `<feature>-demo.tsx`: o componente que só desenha a partir das props.
- **Regras do componente:**
  - nenhuma chamada de rede, nenhuma lógica do app (Supabase, rotas, auth);
  - usar os tokens e componentes que já estão em `src/denarius/` (`tokens.css`,
    `components/ui`);
  - pensado para a largura real da tela (entre 1000 e 1440px); a landing
    reduz com `CardStage`.
- **Dados de demonstração:** a mesma empresa fictícia, o mesmo mês (outubro) e
  os mesmos times e valores das peças que já existem (`resumo-email-dados.ts`,
  `veredito-dados.ts`, `composicao-dados.ts`), para tudo bater entre as telas.
  - Exemplo: Engenharia é o maior consumidor no resumo semanal; deve ser o
    mesmo time, com números coerentes, na lista de times e no alerta.
- **Captura estática:** tema escuro, PNG em 2x, sem dados reais de cliente.
- **Nada inventado:** só o que o app faz hoje. Se uma tela não existir no app,
  avisar em vez de desenhar.

Quando as peças chegarem, o texto do exemplo de alerta na página será ajustado
para bater com os dados delas.
