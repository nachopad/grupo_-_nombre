const express = require('express');
const router = express.Router();
const shoppingCartController = require('../controllers/shoppingCartController');

const middlewareAuth = require('../middlewares/app-middlewares/userLoggedMiddleware');

router.get('/', shoppingCartController.showCart);
router.post('/add/:id', shoppingCartController.addToCart);
router.post('/remove-from-cart/:id', shoppingCartController.removeFromCart);
router.get('/checkout', middlewareAuth.possibleLogout, shoppingCartController.showFormCheckout)
router.post('/register-order', middlewareAuth.possibleLogout, shoppingCartController.registerOrder);

module.exports = router;

