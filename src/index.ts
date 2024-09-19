import express from "express";
import { initializeApp } from 'firebase-admin/app';
import dotenv from "dotenv";
import { routes } from "./routes";

dotenv.config()
initializeApp()
// Instalar a dependencia do Express
const app = express()

routes(app);

// Criação do servidor com Express
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000")
})