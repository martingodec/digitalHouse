//Importacion de modulos
const express = require('express');
const app = express();

//IMPORTACION DE RUTAS
const indexRoute = require('./routes/indexRoute')

app.listen(3333, (req, res) => {console.log("App en el puerto 3333")});

app.use('/', indexRoute);
