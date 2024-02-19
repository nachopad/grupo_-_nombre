const productsData = require('../data/productData.json');
const shoppingCart = [];

const shoppingCartController = {
    showCart: (req, res) => {
        return res.render('shoppingCart', {shoppingCart: shoppingCart});
    },
    addToCart: (req, res) => {
        let product = productsData.result.find((prod) => prod.id == req.params.id);

        if(product){
            shoppingCart.push(product);
            res.redirect('/cart/');
        }else{
            res.status(404).send('Producto no encontrado');
        }
    },
    removeFromCart: (req, res) => {
        let index = shoppingCart.findIndex((prod) => prod.id == req.params.id);

        if(index !== -1){
            shoppingCart.splice(index, 1);
            res.redirect('/cart/');
        }else{
            res.status(404).send('Producto no encontrado');
        }
    }
};

module.exports = shoppingCartController;