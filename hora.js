const express = require("express");
//esta pedindo o pacote 'express' e armazenando no identificador "express"

const router = express.Router();
//configurando a rota

const app = express();
// o pacote 'express' fornece uma função 'express'. Armazenamos no identificador app para poder usar depois

const porta = 3333;

function mostraHora(request, response) {
  const data = new Date();

  const hora = data.toLocaleTimeString("pt-BR");

  response.send(hora);
}
//função de capturar horário local

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get("/hora", mostraHora));

app.listen(porta, mostraPorta);
//irá receber requisição do cliente nessa porta, quando o servidor estiver funcionando, irá chamar a função 'mostraPorta'
