//llamada de paquetes
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const ventas = require("./routes/ventas")

//Configuraciones
const app = express();
const puerto = 9000;

//rutas
app.get("/prueba", (req, res) => { res.send("Pagina de prueba secundaria") });
app.get("/", (req, res) => { res.send("Pagina de prueba principal") });

app.use("/api", ventas);

//ejecución
mongoose.connect(process.env.mongodb)
    .then(() => {console.log("Conexión realizada con éxito")})
    .catch((error) => {console.log(error)})

app.listen(puerto, () => {console.log("servidor escuchando en el puerto "+puerto)})
