const fs = require('fs');
const path = require('node:path');
const crypto = require('crypto');

const productsFilePath = path.join(__dirname, '../data/productData.json');
const productsData = require('../data/productData.json');

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
        let file = req.file;
        let newProduct = {
            id: crypto.randomUUID(),
            img: `${file.filename}` ,
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
       const { name, price, category, gender, colors, sizes, offer, installmentsCount,
               interestRate, overview, careInstructions, composition } = req.body;

        productsData.result.forEach(e => {
            if(e.id == id) {
                e.name = name;
                e.price = +price;
                e.category = category;
                e.gender = gender;
                e.colors = colors.split(',').map(color => color.trim());
                e.sizes = sizes.split(',').map(size => size.trim());
                e.offer = +offer;
                e.installments.count = +installmentsCount || 0;
                e.installments.interestRate = +interestRate || 0;
                e.description.overview = overview;
                e.description.careInstructions = careInstructions;
                e.description.composition = composition;
            }
        });
       
        fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2));

        res.redirect('/products/detail/' + id);
    },
    getProducts : (req, res)=>{
        res.render('productsList', {featuredProducts : productsData.result});
    },
    productManagement: (req, res)=>{
        res.render('productManagement', {productList: productsData.result});
    },
    deleteProduct: (req, res)=>{
        let product = productsData.result.find(oneProduct => oneProduct.id === req.params.id);

        let photoFilePath = path.join(__dirname, '/images/productDetail/'+product.img);
        if(fs.existsSync(photoFilePath)) {
            fs.unlinkSync(photoFilePath);
        }
        
        productsData.result = productsData.result.filter(product => product.id != req.params.id);
        fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2));
        res.redirect('/products/product-management');
    }

};

module.exports = productController;