import express, { Request, Response } from "express";

// Instalar a dependencia do Express
const app = express();

// Criação de rota
app.get("/", (req: Request, res: Response) => {
    res.send("Bem vindo ao Curso de Node.js - tsc-watch")
})

app.get("/users", (req: Request, res: Response) => {
    
    let usuarios = [
        {
            nome: "José vitor",
            idade: 26
        }, {
            nome: "Derci Santos",
            idade: 33
        }
    ]
    
    // mostrando o array no postman
    res.send(usuarios)
})

// Criação do servidor com Express
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000")
})