import express from "express";
import { connectMongoDB } from "./config/db-connection.js";
// import 'dotenv/config'
import userRouter from './routes/user-router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter)

const PORT = process.env.PORT || 3000;

connectMongoDB()
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log(`Server ok on port ${PORT}`));
