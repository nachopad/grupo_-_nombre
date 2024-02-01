const productController = {
    productDetail: (req, res) => {
        return res.render('productDetail');
    },
    shoppingCart: (req, res) => {
        return res.render('shoppingCart');
    }
};

module.exports = productController;