import { Router } from "express";
import { criaEdital, listaEditais, } from "../controllers";

const editalRoute = Router();

editalRoute.post("/editais", criaEdital);
editalRoute.get("/editais", listaEditais);

export {editalRoute};