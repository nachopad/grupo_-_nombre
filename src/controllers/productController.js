const productsData = require('../models/productData.json');

const productController = {
    productDetail: (req, res) => {
        let product = productsData.result.find((prod) => prod.id === parseInt(req.params.id));
        
        return product
        ? res.render('productDetail', { product: product })
        : res.status(404).send('Producto no encontrado');
    },
    getProductForm : (req, res)=>{
        let id = req.params.idProduct;
        productsData.result.length
        let product = id?productsData.result.find(prod => prod.id == id ):null;
        res.render('productForm', {product: product});
    }
};

module.exports = productController;