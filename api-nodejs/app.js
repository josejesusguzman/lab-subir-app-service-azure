//Hello World API
const express = require('express');
const app = express();
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.urlencoded({
    extended: true
  }))

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(3000, () => {
  console.log('El servidor se está ejecutando en http://localhost:3000/');
});

app.post('/', (req, res) => {
  res.send(req.body.name);
});


