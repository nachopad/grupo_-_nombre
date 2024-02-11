const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/detail/:id', productController.productDetail);
router.get('/product-form/:id?', productController.productForm);
router.post('/create', productController.store);
router.put('/edit/:id', productController.update);

module.exports = router;