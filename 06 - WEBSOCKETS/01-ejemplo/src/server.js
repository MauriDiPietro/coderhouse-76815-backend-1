//npm i express express-handlebars socket.io

import express from "express";
import { Server } from "socket.io";
import handlebars from "express-handlebars";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${process.cwd()}/src/public`));

app.engine("handlebars", handlebars.engine());
app.set("views", `${process.cwd()}/src/views`);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("websockets");
});

const serverHttp = app.listen(8080, () =>
  console.log("Server ok en puerto 8080"),
);

const socketServer = new Server(serverHttp);

const products = [];

socketServer.on("connection", (socket) => {
  console.log(`Usuario conectado: ${socket.id}`);
  socket.on("disconnect", () => {
    console.log(`Usuario desconectado: ${socket.id}`);
  });

  socket.emit('saludoDesdeBack', 'Bienvenido a websockets') //solo al que envio el evento
  socket.on('respuestaDesdeFront', (message)=>{
    console.log(message);
  })

  socketServer.emit('products', products)   //emite a todos los clientes
  //socket.broadcast.emit('products', products)   //emite a todos los clientes excepto al que emitió el evento

  socket.on('newProduct', (product) => {
    products.push(product)
    socketServer.emit('products', products)
  })
});
