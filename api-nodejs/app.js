// Hello World API
// Importamos los modulos necesarios (antes se debe ejecutar en terminal npm install)
const express = require('express');
const app = express();
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Para poder obtener información del request de la petición post
app.use(express.urlencoded({
    extended: true
  }))

// Ponemos la funcionalidad de una petición GET
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Ponemos la funcionalidad de una petición POST
app.post('/', (req, res) => {
  // Regresa el valor de la variable que se recibe con nombre name
  res.send(req.body.name);
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('El servidor se está ejecutando en http://localhost:3000/');
});

