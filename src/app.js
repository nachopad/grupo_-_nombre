const express = require('express');
const path = require('node:path');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;
const app = express();

const productRoutes = require('./routes/productRoutes');
const shoppingCartRoutes = require('./routes/shoppingCartRoutes');
const userRouter = require('./routes/userRoutes');
const homeRoutes = require('./routes/homeRoutes');

//Informar que queremos hacer uso de algunos archivos estáticos como recurso.
app.use( express.static('public') );

//Configuracion necesaria para enviar la informacion de formularios.
app.use(express.urlencoded( { extended: false} ));
app.use(express.json());

//Configuración necesaria para poder utilizar metodos PUT y DELETE en formularios.
app.use(methodOverride('_method'));

//Codigo para generar una lista de las posibles ubicaciones de las vistas.
const viewsPath = ['views', 'views/index', 'views/products', 'views/users',];
const generatePathViews = (dirs) =>{
    return dirs.map( dir => path.join(__dirname, dir));
}

//Middleware necesario para indicar donde se encuentra la carpeta de vistas. 
//Ejecuta el generador de las rutas para las views.
app.set('views', generatePathViews(viewsPath));

//Middleware necesario para que express soporte los archivos de la vista como EJS.
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}.`);
});

app.use('/', homeRoutes);
app.use('/products', productRoutes);
app.use('/cart', shoppingCartRoutes);
app.use('/users', userRouter);