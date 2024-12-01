import express, { Request, Response, NextFunction } from "express";

import { editalRoute } from "./routes/edital.route";

import { iniciarMongoDB } from "./context/conexao-mongodb";

const app = express();
const port = 5000;

iniciarMongoDB();

app.use(express.json());

app.use('/editais', editalRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});