<div align=center>

<h3>

    github-app-using-graphql

</h3>

![PRINTS](./packages/app/public/app-github-graphql.gif)

</div>

## 📚 **Sobre**

 <p>Este projeto trata-se de duas aplicações, criei um monorepo com <code>lerna</code> para centralizar todas as dependências.</p>

## <code> **app (Frontend)** </code>

Aplicação consumindo a API GraphQL.
<br />

### _features:_

✔️ Consultar usuários do Github <br />
✔️ Visualizar repositórios do usuário <br />
✔️ Pesquisar repositórios do usuário <br />

> ## Metodologias

- TDD (Test Driven Development)
- Conventional Commits
- Mobile First

> ## Bibliotecas e Ferramentas

- Typescript
- React
- React Testing Library
- React Router DOM
- Storybook
- Jest
- Yarn
- Eslint
- Prettier

## <code> **graphql-api (Backend)** </code>

Aplicação consumindo a API REST do Github e retornando via GraphQL com algumas pequenas modificações.
<br />
<br />

> ## Metodologias e Designs

- TDD (Test Driven Development)
- Conventional Commits

> ## Bibliotecas e Ferramentas

- GraphQL
- Apollo Server
- Nodemon
- Axios
- Jest
- Yarn
- Eslint
- Prettier

<br />

### 🚀 **Mão na massa**

```bash
# Clone este repositório
$ git clone https://github.com/felipepxavier/github-app-using-graphql

# Acesse a pasta do projeto no terminal/cmd
$ cd github-app-using-graphql

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

```

<br />

### 📖 **Documentação de componentes (Storybook)**

```bash

# Acesse a pasta do projeto frontend
$ cd github-app-using-graphql

$ cd packages
$ cd app
$ yarn storybook

```
