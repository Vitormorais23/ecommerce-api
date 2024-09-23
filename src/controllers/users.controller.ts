import { Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore"

type User = {
    id: number;
    nome: string;
    email: string;
}
let usuarios: User[] = []

export class UsersController {
    // retorna lista de todos usuários
    static async gatAll(req: Request, res: Response) {
        const snapshot = await getFirestore().collection("users").get()
        const users = snapshot.docs.map(doc => {

            return {
                id: doc.id,
                ...doc.data()
            }
        })
        res.send(users)
    }

    // pegar id do usuario
    static async getById(req: Request, res: Response) {
        let userId = req.params.id
        const doc = await getFirestore().collection("users").doc(userId).get()
        let user = {
            id: doc.id,
            ...doc.data()
        }
        res.send(user)
    }

    // cadastrar usuario
    static async save(req: Request, res: Response) {
        let user = req.body;
        const userSalvo = await getFirestore().collection("users").add(user) // O add retorna uma Promise, sendo assim se usa o await se usar await tem q colocar o async
        res.send({
            message: `Usuário ${userSalvo.id} criado com sucesso`
        })
    }

    // Atualizar usuario
    static updateUser(req: Request, res: Response) {
        let userId = Number(req.params.id)
        let user = req.body
        let indexOf = usuarios.findIndex((_user: User) => _user.id === userId)
        usuarios[indexOf].nome = user.nome
        usuarios[indexOf].email = user.email
        res.send({
            message: "Usuário atualizado com sucesso!"
        })
    }

    // Deletar usuário
    static delete(req: Request, res: Response) {
        let userId = Number(req.params.id);
        let indexOf = usuarios.findIndex((user: User) => user.id === userId);
        if (indexOf !== -1) /* A verificação indexOf !== -1 é importante para garantir que o usuário com o ID fornecido exista no array antes de tentar removê-lo */ {
            usuarios.splice(indexOf, 1); // Remove o usuário do array
            res.send({
                message: "Usuario excluído com sucesso!"
            })
        } else {
            res.status(404).send({
                message: "Usuário não encontrado"
            });
        }
    }
}