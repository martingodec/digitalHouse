//Importacion de modulos
const express = require('express');
const app = express();

//IMPORTACION DE RUTAS
const indexRoute = require('./routes/indexRoute');
const detalleRoute = require('./routes/detalleRoute');

//Asignando puerto a la app
app.listen(3333, (req, res) => {console.log("App en el puerto 3333")});

//Seteo carpeta stattic
app.use(express.static('./public'));

//Motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views')

app.use('/', indexRoute);
app.use('/detalle', detalleRoute);