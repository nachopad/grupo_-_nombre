const { validationResult } = require('express-validator');

const productModel = require('../services/Product');
const categoryModel = require('../services/Category');
const genderModel = require('../services/Gender')
const discountModel = require('../services/Discount');
const colorModel = require('../services/Color');
const sizeModel = require('../services/Size');

const productController = {
    productDetail: async (req, res) => {
        let product = await productModel.findByPk(req.params.id);
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
        let genders = await genderModel.findAll();
        let discounts = await discountModel.findAll();
        let colors = await colorModel.findAll();
        let sizes = await sizeModel.findAll();
 
        res.render('productForm', { product: product, categories: categories, genders: genders, discounts: discounts, colors: colors, sizes: sizes });
    },
    store: async (req, res) => {
        const errors = validationResult(req);

        const { id } = req.params;

        let product = id ? await productModel.findByPk(id) : null;

        if(errors.isEmpty()) {
            let newProduct = await productModel.create(req.files, req.body);
            return res.redirect('/products/detail/' + newProduct.dataValues.id);
        };

        return res.render('productForm', { product: product, errors: errors.mapped(), oldData: req.body });
    },
    update: async (req, res) => {

        const errors = validationResult(req);

        const { id } = req.params;

        if(errors.isEmpty()) {
            await productModel.edit(req.params.id, req.body, req.files);
            return res.redirect('/products/detail/' + req.params.id);
        };
        return res.redirect('/products/product-form/' + id);
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
        return res.redirect('/products/product-management');
    },
    getFormSearch: async(req, res) => {
        let products = await productModel.seachProduct(req.query.search);
        return res.render('searchProducts',{ products });
    },
    getMensProducts: async (req, res) => {
        let productsForMen = await productModel.listProductsByGender('man');

        let products = await productsForMen.map(product => product);
        let clothesForMen = await products.filter(product => product.category_id === 1);
        let footwearForMen = await products.filter(product => product.category_id === 3);
        res.render('productsForMen', { clothesForMen: clothesForMen, footwearForMen: footwearForMen});
    },
    getWomensProducts: async (req, res) => {
        let productsForWomen = await productModel.listProductsByGender('women');

        let products = await productsForWomen.map(product => product);
        let clothesForWomen = await products.filter(product => product.category_id === 1);
        let footwearForWomen = await products.filter(product => product.category_id === 3);
        res.render('productsForWomen', { clothesForWomen: clothesForWomen, footwearForWomen: footwearForWomen});
    },
    getAccesoriesProducts: async (req, res) => {
        let accesories = await productModel.listProductsByCategory('accesory');
        res.render('accesoriesProducts', { accesories: accesories });
    },
    getClothesProducts: async (req, res) => {
        let clothes = await productModel.listProductsByCategory('clothes');
        res.render('clothingProducts', { clothes: clothes });
    },
    getFootwearProducts: async (req, res) => {
        let footwear = await productModel.listProductsByCategory('footwear');
        res.render('footwearProducts', { footwear: footwear });
    }
};

module.exports = productController;