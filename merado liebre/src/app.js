// Requerir los paquetes que vamos a utilizar
const express = require("express");
const app = express();

const path = require("path");

// Declarar los recursos estaticos (donde se encuentra public)
app.use(express.static("public"));

// Poner a escuchar el servidor
app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000/mercadoliebre"))

// ----------- Manejo de rutas -------------




app.get("/mercadoliebre", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/mercadoliebre.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})




