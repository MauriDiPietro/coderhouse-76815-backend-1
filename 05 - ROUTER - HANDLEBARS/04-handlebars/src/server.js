import express from "express";
import apiRouter from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { logger } from "./middlewares/logger.js";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views-router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("views", `${process.cwd()}/src/views`);
app.set("view engine", "handlebars");

app.use(logger);

app.use("/api", apiRouter);
app.use('/', viewsRouter);

app.use(errorHandler);

app.listen(8080, () => console.log("Server ok en puerto 8080"));
