# Documentação de conteúdo — Landing Page Denarius

## Visão geral

Denarius é uma plataforma de governança de gastos com inteligência artificial para empresas de tecnologia. Ela conecta OpenAI e Anthropic em modo somente leitura, transforma dados de uso em valores financeiros, compara o consumo com orçamentos e apresenta uma resposta executiva: o gasto com IA está sob controle?

O site é voltado a CEOs, CTOs e lideranças financeiras de empresas de tecnologia, especialmente organizações com 20 a 200 pessoas. A proposta não é reduzir ou bloquear o uso de IA, mas oferecer contexto para decisões financeiras antes do fechamento da fatura.

## Objetivo do site

Apresentar o Denarius como a camada de visibilidade e governança financeira do uso corporativo de IA. A narrativa mostra o problema da dispersão de consumo, explica como a plataforma cria uma leitura executiva e encerra convidando a empresa a solicitar acesso ou agendar uma demonstração.

## Navegação e conversão

A navegação conduz para as partes principais da página:

- Produto
- Como funciona
- Confiança
- Perguntas frequentes

Há chamadas para solicitar acesso à plataforma. A solicitação pede nome e e-mail corporativo e notifica por e-mail o responsável pela liberação manual. O envio só confirma sucesso após uma resposta positiva do provedor.

## Seções do site

### Abertura

Mensagem principal: "Saiba se o gasto com IA está sob controle."

O texto apresenta o Denarius como uma forma de transformar uso de OpenAI e Anthropic em dinheiro, comparar o resultado com os orçamentos e mostrar o que requer atenção antes da fatura. A mensagem de apoio é dirigida a líderes que precisam decidir com clareza, sem depender de planilhas, tokens e relatórios dispersos.

As ações oferecidas são conhecer ou solicitar acesso ao Denarius e consultar os recursos da plataforma.

### Conclusão executiva

Esta seção estabelece que a plataforma começa pela conclusão, antes da investigação detalhada. O Denarius compara orçamento, gasto realizado e ritmo do período para apresentar uma leitura do cenário.

Os possíveis estados são:

- Sob controle
- Atenção necessária
- Orçamento excedido
- Coletando ritmo, quando ainda não há dados suficientes para projeção

O veredito é calculado por regras determinísticas, e não por opinião de IA. A projeção é uma estimativa linear e passa a ser apresentada a partir do quinto dia do período, quando existe base mínima de observação.

### Uma visão para decidir

Esta parte explica os recursos que transformam dados de consumo em decisões financeiras.

#### Atribuição e composição do gasto

O Denarius reúne custos de APIs, assinaturas e assentos. A leitura pode ser organizada por time, projeto, workspace, provedor e modelo. Tudo que ainda não foi associado a um centro de custo permanece explicitamente identificado como "Não atribuído"; nenhum gasto é ocultado da leitura financeira.

#### Ritmo e projeção

A plataforma mostra quanto foi gasto, quanto do orçamento já foi consumido, se o gasto está avançando mais rápido que o tempo do mês e qual é a projeção de fechamento quando há dados suficientes. A finalidade é antecipar desvios antes da fatura.

#### Simulação de cenários

Lideranças podem analisar o impacto de mudanças no ritmo de consumo de um time. Entre os exemplos estão reduzir o ritmo da Engenharia, calcular o ajuste necessário para fechar dentro do orçamento e observar o efeito esperado sobre a margem projetada. O Denarius mostra os efeitos; a decisão permanece com a empresa.

#### Relatórios compartilháveis

O produto permite gerar relatórios do mês corrente ou de períodos já fechados. Eles incluem resumo executivo e veredito, orçamento, gasto e projeção, composição por provedor, gastos por time, assinaturas, custos não atribuídos e notas metodológicas.

### Como funciona

O processo de adoção é apresentado em três etapas:

1. Conectar os provedores: a empresa adiciona credenciais administrativas da OpenAI e/ou Anthropic. O Denarius apenas lê dados de uso e custo.
2. Organizar os centros de custo: a empresa importa o quadro de pessoas e associa projetos ou workspaces aos times relevantes.
3. Definir os orçamentos: são criados limites para a empresa e para cada time, permitindo acompanhar ritmo e receber avisos antes do fechamento.

### Confiança, transparência e segurança

Esta seção descreve as garantias e os limites da plataforma.

#### Dados utilizados

O Denarius utiliza metadados de uso e custo. Prompts, respostas, anexos e conteúdo de conversas com IA não são armazenados.

#### Governança sem vigilância

A leitura padrão é por time. Informações individuais aparecem somente quando necessárias para investigar um pico e apenas para administradores autorizados. A plataforma não cria rankings de pessoas, e os dados individuais não devem ser usados para avaliação de desempenho.

#### Segurança e privacidade

- Credenciais dos provedores são cifradas em repouso.
- As conexões com APIs são somente leitura.
- Os dados são isolados por empresa.
- Há perfis de acesso para administradores e visualizadores.
- Administradores podem exportar e excluir dados da empresa.
- A plataforma segue princípios de minimização e transparência da LGPD.

#### Números honestos

A plataforma deixa explícitas as limitações e lacunas dos dados:

- Modelos sem preço conhecido aparecem como não custeados, nunca como custo zero.
- Sincronizações atrasadas geram aviso de dados possivelmente desatualizados.
- Diferenças de reconciliação ficam visíveis.
- A taxa de câmbio e a data de atualização são informadas.
- O câmbio é declarado e congelado para o período orçamentário.
- O gasto é reconciliado entre o total da empresa, os times e os itens não atribuídos.

### Alertas e atualizações

As integrações com OpenAI e Anthropic fazem sincronização diária e preservam custos em dólar como fonte de verdade. A plataforma pode alertar no produto e por e-mail quando faixas importantes de orçamento são cruzadas.

Para reduzir ruído, existe um aviso por combinação de time, nível e período. Um novo alerta é gerado apenas quando há uma escalada real da situação.

### Limites do produto

O site declara de forma explícita que:

- O Denarius não bloqueia, limita nem interrompe o uso de ferramentas de IA.
- A plataforma recomenda e simula cenários; não toma decisões pela empresa.
- A fatura do provedor é o documento oficial de cobrança.
- Projeções são estimativas, não garantias.
- A plataforma não armazena o conteúdo de prompts ou respostas.

### Perguntas frequentes

As perguntas respondem dúvidas sobre bloqueio de uso, tratamento de prompts e respostas, provedores suportados, frequência de atualização, início das projeções, alertas repetidos, custos não atribuídos, consolidação de assinaturas e APIs, relação com a fatura do provedor e solicitação de acesso.

## Encerramento

Mensagem final: "Transforme gasto com IA em uma decisão controlada."

O encerramento reforça que a empresa pode obter uma leitura financeira clara antes de o custo virar surpresa e convida o visitante a solicitar acesso ou conhecer a plataforma.

## Links institucionais

O rodapé disponibiliza acesso a contato, política de privacidade, termos de uso e entrada na plataforma. Esses destinos devem ser mantidos atualizados conforme os canais e documentos oficiais da empresa forem definidos.
