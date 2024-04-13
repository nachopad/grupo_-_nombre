const express = require('express');
const router = express.Router();
const productMulter = require('../middleware/route-middlewares/productRegisterMulter');
const productRegisterValidation = require('../middleware/route-middlewares/validationProductRegister');

const productController = require('../controllers/productController');
const middlewareAuth = require('../middleware/app-middlewares/userLoggedMiddleware');

router.get('/detail/:id', productController.productDetail);
//** Para probar quitale el authAdmin */
router.get('/product-form/:id?', middlewareAuth.possibleLogout, middlewareAuth.authAdmin ,productController.productForm);
router.get('/products', productController.getProducts);
router.get('/product-management', middlewareAuth.possibleLogout, middlewareAuth.authAdmin , productController.productManagement);
router.post('/create', productMulter.array('img'), productRegisterValidation, productController.store);
router.put('/edit/:id', productMulter.array('img'), productRegisterValidation, productController.update);
router.delete('/:id/delete', productController.deleteProduct);

module.exports = router;