import express from "express";

// Instalar a dependencia do Express
const app = express();

// Criação de rota
app.get("/", (req, res) => {
    res.send("Bem vindo ao Curso de Node.js")
})

// Criação do servidor com Express
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000")
})