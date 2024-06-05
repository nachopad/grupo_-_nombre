const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

const productMulter = require('../middlewares/route-middlewares/productRegisterMulter');
const productRegisterValidation = require('../middlewares/route-middlewares/validationProductRegister');
const middlewareAuth = require('../middlewares/app-middlewares/userLoggedMiddleware');

router.get('/detail/:id', productController.productDetail);
router.get('/product-form/:id?', middlewareAuth.possibleLogout, middlewareAuth.authAdmin, productController.productForm);
router.get('/products', productController.getProducts);
router.get('/product-management', middlewareAuth.possibleLogout, middlewareAuth.authAdmin, productController.productManagement);
router.post('/create', productMulter.array('img'), productRegisterValidation, productController.store);
router.put('/edit/:id', productMulter.array('img'), productRegisterValidation, productController.update);
router.delete('/:id/delete', productController.deleteProduct);
router.get('/search', productController.getFormSearch);
router.get('/men', productController.getMensProducts);
router.get('/women', productController.getWomensProducts);
router.get('/accesories', productController.getAccesoriesProducts);
router.get('/clothes', productController.getClothesProducts);
router.get('/footwear', productController.getFootwearProducts);

module.exports = router;