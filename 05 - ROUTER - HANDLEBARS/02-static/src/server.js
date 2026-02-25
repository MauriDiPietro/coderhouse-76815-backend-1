import express from "express";
import apiRouter from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { logger } from "./middlewares/logger.js";

const app = express();
// console.log(process.cwd())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${process.cwd()}/src/public`))

app.use(logger)

app.use('/api', apiRouter);

app.use(errorHandler)

app.listen(8080, () => console.log("Server ok en puerto 8080"));
