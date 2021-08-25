// Hello World API
// Importamos los modulos necesarios (antes se debe ejecutar en terminal npm install)
const express = require('express');
const app = express();
const http = require('http');
const port = process.env.PORT || 8080

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
app.listen(port, () => {
    console.log('El servidor se está ejecutando en el puerto' + port);
});
