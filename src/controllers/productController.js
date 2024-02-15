const fs = require('fs');
const path = require('node:path');
const crypto = require('crypto');

const productsFilePath = path.join(__dirname, '../models/productData.json');
const productsData = require('../models/productData.json');

const productController = {
    productDetail: (req, res) => {
        let product = productsData.result.find((prod) => prod.id == req.params.id);
        
        return product
        ? res.render('productDetail', { product: product })
        : res.status(404).send('Producto no encontrado');
    },
    productForm: (req, res)=>{
        const { id } = req.params;
        let product = id ? productsData.result.find(prod => prod.id == id ) : null;
        
        res.render('productForm', {product: product});
    },
    store: (req, res) => {
        let newProduct = {
            id: crypto.randomUUID(),
            img: req.body.img,
            name: req.body.name,
            category: req.body.category,
            gender: req.body.gender,
            price: +req.body.price,
            offer: +req.body.offer,
            colors: req.body.colors.split(',').map(color => color.trim()),
            sizes: req.body.sizes.split(',').map(size => size.trim()),
            installments: {
                count: +req.body.installmentsCount || 0, 
                interestRate: +req.body.interestRate || 0
            },
            description: {
                overview: req.body.overview,
                careInstructions: req.body.careInstructions,
                composition: req.body.composition
            }
        };

        productsData.result.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2));

        res.redirect('/products/detail/'+newProduct.id);
    },
    update: (req, res) => {
       const { id } = req.params;
       let updatedProductData = req.body;

       const productIndex = productsData.result.findIndex(prod => prod.id == id);

       if (productIndex !== -1) {
        let updatedProduct = productsData.result[productIndex];
        
        updatedProduct.name = updatedProductData.name;
        updatedProduct.price = +updatedProductData.price;
        updatedProduct.category = updatedProductData.category;
        updatedProduct.gender = updatedProductData.gender;
        updatedProduct.colors = updatedProductData.colors.split(',').map(color => color.trim());
        updatedProduct.sizes = updatedProductData.sizes.split(',').map(size => size.trim());
        updatedProduct.offer = +updatedProductData.offer;
        updatedProduct.installments.count = +updatedProductData.installmentsCount || 0;
        updatedProduct.installments.interestRate = +updatedProductData.interestRate || 0;
        updatedProduct.description.overview = updatedProductData.overview;
        updatedProduct.description.careInstructions = updatedProductData.careInstructions;
        updatedProduct.description.composition = updatedProductData.composition;

        fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2));

        res.redirect('/products/detail/' + id);
        } else {
            res.status(404).send('Producto no encontrado');
        };
    },
    getProducts : (req, res)=>{
        
        res.render('productsList', {featuredProducts : productsData.result});
    }
};

module.exports = productController;