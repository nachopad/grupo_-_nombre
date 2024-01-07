const express = require('express');
const path = require('path');
const app = express();

//Informar que queremos hacer uso de algunos archivos estáticos como recurso.
const publicPath = path.join(__dirname, './public');
app.use( express.static(publicPath) );

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});