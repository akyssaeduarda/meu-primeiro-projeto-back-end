const express = require("express");
//esta pedindo o pacote 'express' e armazenando no identificador "express"

const router = express.Router();
//configurando a rota que vem dentro do express. o identificador recebe uma função de dentro do pacote express

const app = express();
// o pacote 'express' fornece uma função 'express'. Armazenamos no identificador app para poder usar depois

const porta = 3333;

// request = requisição,  response = resposta, send() = função de enviar
function mostraOla(request, response) {
  response.send("Olá, Mundo!");
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

//get() = metodo de pegar
app.use(router.get("/ola", mostraOla));
//o aplicativo do servidor vai usar a rota get chamando o endereço ola e quando isso acontecer, ira executar a função mostraOla

app.listen(porta, mostraPorta);
//irá receber requisição do cliente nessa porta, quando o servidor estiver funcionando, irá chamar a função 'mostraPorta'
