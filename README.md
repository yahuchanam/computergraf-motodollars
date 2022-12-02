# Compugraf Test

Teste front-end para se tornar um Compugrafiniano!

### Considerações:

- Desenvolvido com Angular 15 e suas features
- Desenvolvido seguindo The Angular Way
- O projeto está usando Ivy
- Tentei componentizar o máximo possível
- Fiz uso dos pattern:
- SOLID (em alguns momentos - SRP é um desafio no Angular)
- Object Calisthnics
- Clean Code
- Clean Architecture

### Layout UX/UI:

Link para o layout no figma:

https://www.figma.com/file/0WaXyv06sKDGc01DYzG99j/CG---Teste-Cambio---Marcus-Borges?node-id=301%3A701&t=Gyjf4vaXvWPnE8kd-1

### Desenho de arquitetura de solução 

Está na pasta raiz, com o nome arquitetura-solucao.drawio
É possível abri-lo usando a ferramenta em https://draw.io


### _DISCLAIMER:_

Tentei usar o minimo possível de bibliotecas te terceiros, usando apenas:

- Angular Material: como sugerido no desafio
- SubSink: para controlar as subscrições
- Normalize.css: para ter um css reset mão na roda
- NGX-Mask: para mascaras no geral (a de moeda ainda está com alguns bugs)
- NG2-Currency: para mascara de valores
- FontAwesome: para usar 1 icone (sim, poderia usar um SVG...)

Também não usei as API sugeridas, mas penso que ficou bacaninha :).

Para rodar:

```
npm install
ng serve -o
```

ou acesse:
https://computergraf-motodollars.vercel.app/exchange

Obrigado!

Critérios de aceite:

1) Dar preferência ao framework/biblioteca “Angular”, mas poderá ser utilizado outro de sua preferência (React, Vue, etc.).
2) Usar linguagem TypeScript.
3) Dar preferência para uso do Boostrap, se precisar, pode ser usado algum outro
componente de interface (Angular-Material, etc).
4) Disponibilizar o projeto no seu perfil do GitHub para que possamos baixar o código.
5) Criar um arquivo de Readme no projeto, explicitando como devemos executar o
projeto na máquina local. Ex:(executar os seguintes comandos npm install, ng
server, etc).
6) Usar o IndexedDB do navegador para armazenamento das cotações contratadas.
7) Para cálculo do frete, usar como endereço de origem o CEP da Compugraf: “01228-
200”.
8) No campo onde será informado o CEP do comprador, deverá ser chamada uma API
de consulta. https://api.postmon.com.br/v1/cep/{cep}, para retornar o endereço
do comprador.
9) Para calcular a cotação do dólar (fechamento do dia anterior), poderá ser utilizada
a API do Banco Central (
) ou qualquer outra de sua preferência.
10) Para calcular o valor do frete poderá ser utilizada a API abaixo ou qualquer outra
de sua preferência.
https://developers.google.com/maps/documentation/distance-matrix/start
11) O layout e estilo da tela são de sua livre escolha.

Extras:

Deverá conter um grid com todas as compras contratadas (informações gravadas no IndexDB)
 https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCot
  acao=@dataCotacao)
 
1) Nome do comprador
2) CEP do comprador
3) Quantidade de Dólares comprados
4) Distância calculada para o frete


Muito obrigado se você chegou até aqui!

Espero que possamos trabalhar juntos.

