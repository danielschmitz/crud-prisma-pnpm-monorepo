# Crud com Prisma, pnpm e vários fronts

Este é um projeto pessoal "crud" que usa as seguintes tecnologias:

- Monorepo
- Servidor backend em node, express e prisma (Tudo em typescript)
- Frontends: swagger
- uso do pnpm para gerenciar todos os subprojetos

Ele começou com os meus estudos sobre monorepo, e em como ter um projeto "grande" apenas em um único repositório git. Isso trás certos prós e contras e que devem ser usados como base se você deseja se aventurar no mundo monorepo.

O que eu tenho visto ao longo dos últimos anos é que os projetos Web e Apps são criados em repositórios diferentes, e isso nao é ruim. Quanto mais separado, melhor. Mas claro, há problemas. Por exemplo, suponha uma aplicação de controle de estoque de uma empresa, no qual temos o backend em laravel, o front em Vue, e uma aplicação android nativa. Suponha que temos uma nova tarefa, que é criar um novo relatório. Possivelmente você terá que criar um branch para cada repositório do projeto. No nosso exemplo, são 3 possivelmente. Serão 3 branches, 3 PRs, 3 issues etc...

Em um repositório monorepo, isso nao aconteceria. E por isso estou estudando cada vez mais o monorepo e um dos resultados desse estudo é este projeto. minha ideia é fazer um backend unico com alguns fronts diversificados.

## Instalação

1. Você precisa ter o [pnpm instalad](https://pnpm.io/pt/installation). O pnpm é um concorrente do npm ou do yarn e tem como principal vantagem ser muito mais rápido que o npm, por usar dependencias compartilhadas. Ou seja, se você tem 10 projetos em javascript, possivelmente terá 10 node_modules. Com o uso do pnpm, isso nao acontece, pois as dependencias estão compartilhadas entre os projetos.

O pnpm também permite a criação de sub-projetos. Dê uma olhada no arquivo `pnpm-workspace.yaml` para compreender melhor o funcionamento, e também veja o `package.json` para ver como o pnpm lida com os subprojetos.

2. Faça o clone deste projeto

3. Execute `pnpm install` no diretório do projeto

4. Para executar o backend: `pnpm run backend:dev` API estará em `localhost:3000`

5. Para executar os seguintes frontends:

- swagger: `pnpm run backend:dev` Acesse `localhost:3001`
