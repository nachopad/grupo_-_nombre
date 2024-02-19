const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/detail/:id', productController.productDetail);
router.get('/product-form/:id?', productController.productForm);
router.get('/products', productController.getProducts);
router.get('/product-management', productController.productManagement);
router.post('/create', productController.store);
router.put('/edit/:id', productController.update);
router.delete('/:id/delete', productController.deleteProduct);

module.exports = router;