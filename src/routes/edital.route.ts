import { Router } from "express";
import { criaEdital } from "../controllers";

const editalRoute = Router();

editalRoute.post("/", criaEdital)

export {editalRoute};