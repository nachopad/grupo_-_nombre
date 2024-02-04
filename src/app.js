const express = require('express');
const path = require('node:path');
const port = process.env.PORT || 3000;
const app = express();

const productRoutes = require('./routes/productRoutes');
const shoppingCartRoutes = require('./routes/shoppingCartRoutes');
const userRouter = require('./routes/userRoutes');

//Informar que queremos hacer uso de algunos archivos estáticos como recurso.
app.use( express.static('public') );

//Codigo para generar una lista de las posibles ubicaciones de las vistas
const viewsPath = ['views', 'views/users', 'views/products'];
const generatePathViews = (dirs) =>{
    return dirs.map( dir => path.join(__dirname, dir));
}

//Middleware necesario para indicar donde se encuentra la carpeta de vistas. Ejecuta el generador de las rutas para las views
app.set('views', generatePathViews(viewsPath));

//Middleware necesario para que express soporte los archivos de la vista como EJS.
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}.`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.use('/products', productRoutes);
app.use('/cart', shoppingCartRoutes);
app.use('/users', userRouter);
