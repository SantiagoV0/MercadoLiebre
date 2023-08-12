//LEVANTAR EL SERVIDOR

// 1. requerimos lo paquetes para levantar el servidor
const express = require("express");
const app = express();

const path = require("path")

//Variable de entorno, si no, se usa el 3001
const port = process.env.PORT || 3000;

// 2. Poner a escuchar el servidor

app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000!"));


//2.1 definir donde se encuentran nuestros archivos estaticos

app.use(express.static("public"));




// 3. Crear rutas
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"));
});

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})