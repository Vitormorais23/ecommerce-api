import express, {Request, Response} from "express";

export const userRoutes = express.Router();

type User = {
    id: number;
    nome: string;
    email: string;
}
let id = 1
let usuarios: User[] = []

userRoutes.get("/users", (req: Request, res: Response) => {
    // mostrando o array no postman
    res.send(usuarios)
})

// comparar para encontrar id do usuario
userRoutes.get("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id)
    let user = usuarios.find(user => user.id === userId)
    res.send(user)
})

// cadastrar usuario
userRoutes.post("/users", (req: Request, res: Response) => {
    let user = req.body
    user.id = id++
    usuarios.push(user)
    res.send({
        message: "Usuário criado com sucesso!"
    })
})

// Atualizar usuario
userRoutes.put("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id)
    let user = req.body
    let indexOf = usuarios.findIndex((_user: User) => _user.id === userId)
    usuarios[indexOf].nome = user.nome
    usuarios[indexOf].email = user.email
    res.send({
        message: "Usuário atualizado com sucesso!"
    })
})

userRoutes.delete("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let indexOf = usuarios.findIndex((user: User) => user.id === userId);
    if (indexOf !== -1) /* A verificação indexOf !== -1 é importante para garantir que o usuário com o ID fornecido exista no array antes de tentar removê-lo */{
        usuarios.splice(indexOf, 1); // Remove o usuário do array
        res.send({
            message: "Usuario excluído com sucesso!"
        })
    } else {
        res.status(404).send({
            message: "Usuário não encontrado"
        });
    }
})