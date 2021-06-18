//PROYECTO INTEGRADOR DH.
const express = require('express');
const app = express();

app.listen(3333, (req, res) => {console.log("App en el puerto 3333")});

app.get('/', (req, res) =>{
res.send('HOLA')
})