const express = require("express");
//esta pedindo o pacote 'express' e armazenando no identificador "express"

const router = express.Router();
//configuranção de rota

const app = express();
// o pacote 'express' fornece uma função 'express'. Armazenamos no identificador app para poder usar depois

const porta = 3333;

const mulheres = [
  {
    nome: "Akyssa Eduarda",
    foto: "https://avatars.githubusercontent.com/u/110582028?v=4",
    minibio: "Desenvolvedora em formação",
  },
  {
    nome: "Simaria Conceição",
    foto: "https://bit.ly/3LJIyOF",
    minibio: "Desenvolvedora e intrutora",
  },
  {
    nome: "Iana Chan",
    imagem: "https://bit.ly/3JCXBqP",
    minibio: "Fundadora do Programaria",
  },
];
//uma lista (array) com vários objetos

function mostraMulheres(request, response) {
  response.json(mulheres);
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get("/mulheres", mostraMulheres));

app.listen(porta, mostraPorta);
//irá receber requisição do cliente nessa porta, quando o servidor estiver funcionando, irá chamar a função 'mostraPorta'
//se o servidor estiver funcionando, ira chamar a função mostraPorta
