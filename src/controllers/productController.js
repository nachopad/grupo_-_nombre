const { validationResult } = require('express-validator');

const productModel = require('../services/Product');
const categoryModel = require('../services/Category');
const discountModel = require('../services/Discount');

const productController = {
    productDetail: async (req, res) => {
        let product = await productModel.findByPk(req.params.id, {
            include: [{association: 'categories'}, {association: 'discounts'}, {association: 'images'}]
        });

        return product
            ? res.render('productDetail', { product: product })
            : res.status(404).send('Producto no encontrado');
    },
    productForm: async (req, res) => {
        const { id } = req.params;

        let product = id ? await productModel.findByPk(id, {
            include: [{association: 'categories'}]
        }) : null;

        let categories = await categoryModel.findAll();
        let discounts = await discountModel.findAll();
 
        res.render('productForm', { product: product, categories: categories, discounts: discounts });
    },
    store: async (req, res) => {
        const errors = validationResult(req);

        const { id } = req.params;

        let product = id ? await productModel.findByPk(id) : null;

        if(errors.isEmpty()) {
            let newProduct = await productModel.create(req.files, req.body);
            return res.redirect('/products/detail/' + newProduct.product_id);
        };

        return res.render('productForm', { product: product, errors: errors.mapped(), oldData: req.body });
    },
    update: async (req, res) => {

        const errors = validationResult(req);

        const { id } = req.params;

        let product = id ? await productModel.findByPk(id) : null;

        let categories = await categoryModel.findAll();
        let discounts = await discountModel.findAll();
        
        if(errors.isEmpty()) {
            productModel.edit(req.params.id, req.body);
            return res.redirect('/products/detail/' + req.params.id);
        };

        return res.render('productForm', { product: product, categories:categories, discounts: discounts, errors: errors.mapped(), oldData: req.body });
    },
    getProducts: async (req, res) => {
        let featuredProducts = await productModel.findAll();
        res.render('productsList', { featuredProducts: featuredProducts });
    },
    productManagement: async (req, res) => {
        let productList = await productModel.findAll();
        res.render('productManagement', { productList: productList });
    },
    deleteProduct: async (req, res) => {
        await productModel.delete(req.params.id);
        res.redirect('/products/product-management');
    }

};

module.exports = productController;