import express from "express";
import { connectMongoDB } from "./config/db-connection.js";
// import 'dotenv/config'
import productRouter from './routes/product-router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRouter)

const PORT = process.env.PORT || 3000;

connectMongoDB()
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log(`Server ok on port ${PORT}`));
