# ess-mern

Noções básicas de como desenvolver um projeto com MongoDB, Node.js/Express e React (MERN). Repositório oferecido na monitoria 
de Engenharia de Software e Sistemas (IF682), CIn-UFPE.

## Node.js Express

### Inicializando e Rodando o Projeto

Dentro da pasta do seu servidor, crie um arquivo `index.js` e dentro dele escreva:

```js
const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    res.json('ping!')
});

app.listen(4000);
```

Para instalar pacotes, utilizamos este comando:

```
npm install [pacote1] [pacote2] [...]
```

Inicialmente, só vamos utilizar dois pacotes. Instale eles utilizando este comando:

```
npm install nodemon express
```

Este comando irá criar um arquivo [`package.json`](https://docs.npmjs.com/cli/v10/configuring-npm/package-json) na sua pasta. Este arquivo é fundamental para qualquer projeto que utilize Node.js, armazenando informações sobre as dependências e versões utilizadas no seu projeto.  
Caso você tenha clonado um projeto de um repositório já existente, não é necessário instalar todos os pacotes individualmente (pode ser que existam centenas). Se este repositório já tiver um `package.json`, você pode simplesmente executar:
```
npm install
```

Para rodar o servidor Express, execute o seguinte comando:

```
nodemon index.js
```

## Referências

### Documentações
  
- [React](https://react.dev/reference/react)
- [Node.js](https://nodejs.org/docs/latest/api/)
- [Express Framework](https://expressjs.com/pt-br/starter/installing.html)
- [What is package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)
- [Mongoose](https://mongoosejs.com/docs/index.html)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

### Rotas em Node.js

- [Express Routes](https://expressjs.com/pt-br/guide/routing.html)
- [Tutorial on Routes](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)

### Ferramentas Utilizadas

- [Require vs Import](https://medium.com/@chamin.njay/require-vs-import-in-node-js-abdf5427d7b0)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Postman](https://web.postman.co/)

