import mongoose from "mongoose";
import "dotenv/config";

const dbNome = process.env.MONGODB_NOME as string;
const dbPorta = process.env.MONGODB_PORTA;

const iniciarMongoDB = () => {
  console.log("[mongodb] Tentando conexão com mongo DB");

  mongoose
    .connect(`mongodb://localhost:${dbPorta}/${dbNome}`, {})
    .then(() => {
      console.log("[mongodb] Conectado ao Mongo DB");
    })
    .catch((err) => {
      console.error("[mongodb] Um erro ocorreu", err);
    });
};

export { iniciarMongoDB };