const express = require('express');
const mongoose = require('mongoose');

// Conexión a la base de datos de MongoDB en Azure Cosmos DB
const mongoURI = "mongodb://alu0101254678:Ivlc6PhBZ9i71tj7Q5Jx8b39ZV4b4yccm2Hgwste6YYGcLl3hUSv5YxrNrAiEoUT8UG5fGd2OFeVACDbdeOomg%3D%3D@alu0101254678.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@alu0101254678@";
mongoose.connect(mongoURI, {

}).then(() => {
    console.log('Conexión exitosa a Azure Cosmos DB');
    messagge = 'Conexión exitosa a Azure Cosmos DB';
  }).catch((error) => {
    console.error('Error de conexión a Azure Cosmos DB:', error);
  });

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal para verificar la conexión y realizar la conexión a la base de datos
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Books Shopping');
});

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});