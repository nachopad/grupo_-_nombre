const productService = require('../../services/Product');
const categoryService = require('../../services/Category');

const productApiController = {
    list: async (req, res) => {
        try {
            const productsDB = await productService.findAll();
            const categoryDB = await categoryService.findAll();

            /**get convierte a un objeto plato cada objeto del array que contiene otras propiedades de Sequelize */
            const productsList = productsDB.map(product => ({
                ...product.get(),
                url_image: `${req.protocol}://${req.get('host')}/images/productDetail/${product.dataValues.images[0].url_image}`,
                detail: `api/products/${product.id}`
            }));
            const countByCategory = categoryDB.map(category => ({
                id: category.id,
                name: category.name,
                count: productsDB.filter(p => p.category_id == category.id).length
            }))

            res.status(200).json({
                countProducts: productsDB.length,
                countByCategory,
                products: productsList,
            });
        } catch (err) {
            res.status(500).json({
                message: 'Internal server error',
                error: err.message
            });
        }
    },
    detail: async (req, res) => {
        try {
            const product = await productService.findByPk(req.params.id);
            res.status(200).json({
                product
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    },
    listOffset: async (req, res) => {
        try {
            const { page, limit = 10 } = req.query;
            const productsDB = await productService.findWithOffset(page, limit);
            const categoryDB = await categoryService.findAll();
            const allProducts = await productService.findAll();

            /**get convierte a un objeto plato cada objeto del array que contiene otras propiedades de Sequelize */
            const productsList = productsDB.map(product => ({
                ...product.get(),
                detail: `api/products/${product.id}`
            }));

            const countByCategory = categoryDB.map(category => ({
                id: category.id,
                name: category.name,
                count: allProducts.filter(p => p.category_id == category.id).length
            }));

            res.status(200).json({
                countProducts: productsDB.length,
                countByCategory,
                products: productsList,
                totalPages: Math.ceil(allProducts.length / limit),
                page: parseInt(page),
                limit: parseInt(limit)
            });
        } catch (err) {
            res.status(500).json({
                message: 'Internal server error',
                error: err.message
            });
        }
    },
}

module.exports = productApiController;