const productsData = require('../models/productData.json');

const productController = {
    productDetail: (req, res) => {
        let product = productsData.result.find((prod) => prod.id === parseInt(req.params.id));
        
        return product
        ? res.render('productDetail', { product: product })
        : res.status(404).send('Producto no encontrado');
    }
};

module.exports = productController;