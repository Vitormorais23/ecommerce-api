import express, { Request, Response } from "express";

// Instalar a dependencia do Express
const app = express()

app.use(express.json())

// Criação de rota
app.get("/", (req: Request, res: Response) => {
    res.send("Bem vindo ao Curso de Node.js - tsc-watch")
})

let usuarios = [
    {
        nome: "José vitor",
        idade: 26
    }, {
        nome: "Derci Santos",
        idade: 33
    }
]

app.get("/users", (req: Request, res: Response) => {
    // mostrando o array no postman
    res.send(usuarios)
})

app.post("/users", (req: Request, res: Response) => {
    let user = req.body
    usuarios.push(user)
    res.send({
        message: "Usuário criado com sucesso!"
    })
})

// Criação do servidor com Express
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000")
})