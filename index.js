const express = require("express");
const app = express();
const usuario = require("./rotas/usuario");
const nota = require("./rotas/nota");
const porta = 3000;

app.use(express.json());

app.use("/usuario", usuario);
app.use("/nota", nota);

app.get("/:nome", function(req, res){
    const nome = req.params.nome

    res.send("Olá " + nome);
});

app.listen(porta, function (){
    console.log("aplicação rodando na porta" + porta);
});
