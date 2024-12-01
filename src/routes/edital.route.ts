import { Router } from "express";
import { criaEdital, listaEditais, } from "../controllers";

const editalRoute = Router();

editalRoute.post("/", criaEdital);
editalRoute.get("/", listaEditais);

export {editalRoute};