# Uso de Inteligência Artificial

Este arquivo descreve como a IA foi usada no desenvolvimento do Amparo.

## Ferramenta

- **Claude** (Anthropic)

## Para que foi usada

- **Organizar o projeto:** ajudar a separar partes do projeto (comum, usuário, cuidador e voluntário) e a divisão das pastas.
- **Explicar conceitos:** custom hooks, rotas com parâmetro (`:id`), rotas protegidas e responsividade com `sm:`.
- **Revisar o código:** encontrar erros (imports faltando, caminhos errados, botões que ligavam de verdade, telas sem tratamento de erro).
- **Git:** tirar dúvidas sobre commits, `reset` e `revert`.

## Como o resultado foi conferido

- As decisões de produto (o que cada perfil faz, quais telas existem, o fluxo do pedido de ajuda) vieram do protótipo feito pelo grupo.

## Exemplos de pedidos feitos á IA

- "Revise essa parte de um código e procure por falhas de lógica"
- "Me explique como funcionam custom hooks e suas aplicações"
- "De que forma estes componentes poderiam ser organizados?"

## O que aprendemos

- Entender o código é obrigatório. Pedir explicação linha por linha foi o que nos permitiu corrigir e entender falhas aparecidas no código, além de commitar sem fazer muitas alterações depois.
- Separar o projeto em camadas (telas, hooks e services) deixou mais fácil encontrar e corrigir problemas.
