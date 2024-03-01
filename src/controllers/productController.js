const fs = require('fs');
const path = require('node:path');
const crypto = require('crypto');

const productsFilePath = path.join(__dirname, '../data/productData.json');
const productsData = require('../data/productData.json');
const productModel = require('../models/Product');

const productController = {
    productDetail: (req, res) => {
        let product = productModel.findAll().result.find((prod) => prod.id == req.params.id);

        return product
            ? res.render('productDetail', { product: product })
            : res.status(404).send('Producto no encontrado');
    },
    productForm: (req, res) => {
        const { id } = req.params;
        let product = id ? productModel.findAll().result.find(prod => prod.id == id) : null;

        res.render('productForm', { product: product });
    },
    store: (req, res) => {
        let newProduct = productModel.create(req.files, req.body);
        return res.redirect('/products/detail/' + newProduct.id);
    },
    update: (req, res) => {
        productModel.edit(req.params.id, req.body);
        return res.redirect('/products/detail/' + req.params.id);
    },
    getProducts: (req, res) => {
        res.render('productsList', { featuredProducts: productModel.findAll().result });
    },
    productManagement: (req, res) => {
        res.render('productManagement', { productList: productModel.findAll().result });
    },
    deleteProduct: (req, res) => {
        let productremoved = productModel.delete(req.params.id);
        res.redirect('/products/product-management');
    }

};

module.exports = productController;