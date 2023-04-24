const express = require("express");
//esta pedindo o pacote 'express' e armazenando no identificador "express"

const router = express.Router();
//adicionando a rota
//armazena no identificador router a função Router() que esta dentro do express

const app = express();
// o pacote 'express' fornece uma função 'express'. Armazenamos no identificador app para poder usar depois

const porta = 3333;

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

function novaMulher(require, response) {
  response.json({
    nome: "Akyssa Eduarda",
    foto: "https://avatars.githubusercontent.com/u/110582028?v=4",
    minibio: "Desenvolvedora em formação",
  });
}
// função com objeto. Usando o .json pois é necessario enviar mais informação

app.use(router.get("/mulher", novaMulher));

//listen() = escutar
app.listen(porta, mostraPorta);
//irá receber requisição do cliente nessa porta, quando o servidor estiver funcionando, irá chamar a função 'mostraPorta'
