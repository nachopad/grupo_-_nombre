const express = require('express');
const path = require('path');
const app = express();

const productRoutes = require('./routes/productRoutes');

//Informar que queremos hacer uso de algunos archivos estáticos como recurso.
const publicPath = path.join(__dirname, './public');
app.use( express.static(publicPath) );

//Middleware necesario para que express soporte los archivos de la vista como EJS.
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.use('/products', productRoutes);

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/registro', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/register.html'));
});