const productModel = require('../services/Product');

const homeController = {
    getHome: async (req, res)=>{
        let productsOnSale = await productModel.listProductsOnSale();
        res.render('index', { productsOnSale: productsOnSale });
    }
}
module.exports = homeController;