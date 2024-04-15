const express = require('express');
const router = express.Router();

const shoppingCartController = require('../controllers/shoppingCartController');

router.get('/', shoppingCartController.showCart);
router.post('/add/:id', shoppingCartController.addToCart);
router.post('/remove-from-cart/:id' ,shoppingCartController.removeFromCart);
//**Ultimos agregados */
router.get('/checkout', shoppingCartController.showFormCheckout)
router.post('/register-order', shoppingCartController.registerOrder);

module.exports = router;

