const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/detail/:id', productController.productDetail);
router.get('/productForm/:idProduct?', productController.getProductForm);

module.exports = router;