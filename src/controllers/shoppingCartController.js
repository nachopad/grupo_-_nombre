const productsData = require('../data/productData.json');
const shoppingCart = [];
const productService = require('../services/Product');
const orderService = require('../services/Order')
const shoppingCartController = {
    showCart: (req, res) => {
        return res.render('shoppingCart', { shoppingCart: shoppingCart });
    },
    addToCart: async (req, res) => {
        try {
            let product = await productService.findByPk(req.params.id);

            if (product) {
                shoppingCart.push(product.dataValues);
                res.redirect('/cart/');
            } else {
                res.status(404).send('Producto no encontrado');
            }
        } catch (err) {
            res.status(404).send(err);
        }
    },
    removeFromCart: (req, res) => {
        let index = shoppingCart.findIndex((prod) => prod.product_id == req.params.id);
        if (index !== -1) {
            shoppingCart.splice(index, 1);
            res.redirect('/cart/');
        } else {
            res.status(404).send('Producto no encontrado');
        }
    },
    showFormCheckout: (req, res) => {
        let subtotal = shoppingCart.reduce((state, product) => state + (+product.price), 0);
        return res.render('checkoutShoppingCart', { subtotal });
    },
    registerOrder: async (req, res) => {
        try {
            let subtotal = shoppingCart.reduce((state, product) => state + (+product.price), 0);
            await orderService.registerOrder(req.body, shoppingCart, req.session.userLogged.user_id, subtotal);
        }catch(err){
            res.status(400).send(err);
        }
        
    }
};

module.exports = shoppingCartController;