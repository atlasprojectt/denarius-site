# Assets da landing Denarius

Os slots abaixo reservam a proporção final e devem ser substituídos sem alterar
o layout. Até a entrega dos arquivos, a área interna permanece vazia: sem
skeleton, gráfico falso ou interface inventada.

| Identificador | Arquivo sugerido | Exportação | Proporção | Brief obrigatório |
| --- | --- | ---: | ---: | --- |
| `hero-mock` | `public/hero-mock.png` | Existente (3804 × 2028 px) | Existente | Painel completo atual. Preservar arquivo, posição e uso exclusivo no hero. |
| `veredito-executivo` | `public/veredito-executivo.png` | 1600 × 600 px | 8:3 | Somente veredito, frase executiva e última sincronização. Sem dashboard completo ou cards auxiliares. |
| `composicao-fontes` | `public/composicao-fontes.png` | 1440 × 960 px | 3:2 | Provedor, assinatura, assento e item não atribuído. Foco exclusivo em origem e atribuição. |
| `ritmo-projecao` | `public/ritmo-projecao.png` | 1440 × 960 px | 3:2 | Orçamento, gasto atual, tempo decorrido e projeção. Um período e uma leitura principal. |
| `simulacao-cenario` | `public/simulacao-cenario.png` | 1440 × 960 px | 3:2 | Alteração de ritmo de um time e resultado antes/depois. Mostrar somente um cenário. |
| `relatorio-resumo` | `public/relatorio-resumo.png` | 1440 × 960 px | 3:2 | Cabeçalho e resumo executivo de um relatório. Não mostrar o relatório inteiro. |
| `alerta-escalada` | `public/alerta-escalada.png` | 1280 × 960 px | 4:3 | Um alerta com time, faixa, período e contexto. Uma notificação, sem central completa. |
| `conexao-somente-leitura` | `public/conexao-somente-leitura.png` | 1440 × 900 px | 8:5 | Conexão administrativa e permissão de leitura. Foco em segurança da conexão. |

## Regras de substituição

- A legenda com brief e tamanho permanece visível enquanto o asset não existe.
- A proporção deve ser mantida para evitar mudança de layout.
- Nenhum visual, além do mock existente no hero, deve dominar uma dobra inteira.
- O `hero-mock` é a única visão ampla do painel completo.
- Ao inserir um arquivo final, preserve o `data-asset` no contêiner ou na imagem
  para manter a rastreabilidade.
