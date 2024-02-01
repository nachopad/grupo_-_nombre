const express = require('express');
const path = require('node:path');
const port = process.env.PORT || 3000;
const app = express();

const productRoutes = require('./routes/productRoutes');

//Informar que queremos hacer uso de algunos archivos estáticos como recurso.
app.use( express.static('public') );

//Middleware necesario para indicar donde se encuentra la carpeta de vistas.
app.set('views', path.join(__dirname, 'views'));

//Middleware necesario para que express soporte los archivos de la vista como EJS.
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}.`);
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