const productsData = require('../models/productData.json');

const homeController = {
    getHome: (req, res)=>{
        let featuredProducts = productsData.result.filter(product => product.offer>0);
        res.render('index', {featuredProducts : featuredProducts});
    }
}
module.exports = homeController;