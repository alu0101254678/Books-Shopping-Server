const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal para verificar la conexión y realizar la conexión a la base de datos
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Books Shopping');
});

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});