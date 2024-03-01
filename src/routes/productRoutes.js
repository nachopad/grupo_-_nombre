const express = require('express');
const multer = require('../middleware/route-middlewares/multer');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/detail/:id', productController.productDetail);
router.get('/product-form/:id?', productController.productForm);
router.get('/products', productController.getProducts);
router.get('/product-management', productController.productManagement);
router.post('/create', multer.array('img'), productController.store);
router.put('/edit/:id', multer.array('img'), productController.update);
router.delete('/:id/delete', productController.deleteProduct);

module.exports = router;