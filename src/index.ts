import express, { Request, Response } from "express";

// Instalar a dependencia do Express
const app = express()

app.use(express.json())

// Criação de rota
app.get("/", (req: Request, res: Response) => {
    res.send("Bem vindo ao Curso de Node.js - tsc-watch")
})

let id = 1
let usuarios: {id: number, nome: string, email: string} [] = []

app.get("/users", (req: Request, res: Response) => {
    // mostrando o array no postman
    res.send(usuarios)
})

// comparar para encontrar id do usuario
app.get("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id)
    let user = usuarios.find(user => user.id === userId)
    res.send(user)
})

// cadastrar usuario
app.post("/users", (req: Request, res: Response) => {
    let user = req.body
    user.id = id++
    usuarios.push(user)
    res.send({
        message: "Usuário criado com sucesso!"
    })
})

// Criação do servidor com Express
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000")
})