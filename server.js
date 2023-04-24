//ESTRUTURA BASICA DE UM SERVIDOR

const express = require("express");
//esta pedindo o pacote 'express' e armazenando no identificador "express"

const app = express();
// o pacote 'express' fornece uma função 'express'. Armazenamos no identificador app para poder usar depois

const porta = 3333;

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

app.listen(porta, mostraPorta);
//irá receber requisição do cliente nessa porta, quando o servidor estiver funcionando, irá chamar a função 'mostraPorta'
