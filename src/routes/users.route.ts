import express from "express";
import { UsersController } from "../controllers/users.controller";

export const userRoutes = express.Router();

userRoutes.get("/users", UsersController.gatAll)
userRoutes.get("/users/:id", UsersController.getById)
userRoutes.post("/users", UsersController.save)
userRoutes.put("/users/:id", UsersController.updateUser)
userRoutes.delete("/users/:id", UsersController.delete)