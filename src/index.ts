import express from "express";
import { initializeApp } from 'firebase-admin/app';
import { routes } from "./routes";

initializeApp()
// Instalar a dependencia do Express
const app = express()

routes(app);

// Criação do servidor com Express
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000")
})