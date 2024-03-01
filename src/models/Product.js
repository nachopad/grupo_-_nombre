const fs = require('node:fs');
const crypto = require('crypto');
const path = require('node:path');
const productsFilePath = path.join(__dirname, '../data/productData.json');

const Product = {
    filename: productsFilePath,
    getData: function () {
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },
    findAll: function () {
        return this.getData();
    },
    findByPk: function (id) {
        let allProducts = this.getData().result;
        return allProducts.find((oneProduct => oneProduct.id === id));
    },
    findByField: function (field, text) {
        let allProducts = this.getData().result;
        return allProducts.find((oneProduct => oneProduct[field] === text));
    },
    create: function (files, product) {
        let allProducts = this.getData();
        let newProduct = {
            id: crypto.randomUUID(),
            img: files.map(file => file.filename) || null,
            name: product.name,
            category: product.category,
            gender: product.gender,
            price: +product.price,
            offer: +product.offer,
            colors: product.colors.split(',').map(color => color.trim()),
            sizes: product.sizes.split(',').map(size => size.trim()),
            installments: {
                count: +product.installmentsCount || 0,
                interestRate: +product.interestRate || 0
            },
            description: {
                overview: product.overview,
                careInstructions: product.careInstructions,
                composition: product.composition
            }
        };
        allProducts.result.push(newProduct);
        fs.writeFileSync(this.filename, JSON.stringify(allProducts, null, 2));
        return newProduct;
    },
    /**
     * 
     * @param {*} id from product to remove
     * @returns 
     * Note!: Change the image path to delete
     */
    delete: function (id) {
        let allProducts = this.getData();
        let removePoduct = allProducts.result.find(product => product.id === id);
        removePoduct.img.forEach(p => {
            let photoFilePath = path.join(__dirname, '../../public/images/user-photo/' + p);
            console.log(photoFilePath);
            if (fs.existsSync(photoFilePath)) {
                fs.unlinkSync(photoFilePath);
            }
        });
        allProducts.result = allProducts.result.filter((product => product.id != id));
        fs.writeFileSync(this.filename, JSON.stringify(allProducts, null, 2));
        return removePoduct;
    },

    edit: function (id, productUpdate) {
        let allProducts = this.findAll();
        allProducts.result.forEach(e => {
            if (e.id == id) {
                e.name = productUpdate.name;
                e.price = +productUpdate.price;
                e.category = productUpdate.category;
                e.gender = productUpdate.gender;
                e.colors = productUpdate.colors.split(',').map(color => color.trim());
                e.sizes = productUpdate.sizes.split(',').map(size => size.trim());
                e.offer = +productUpdate.offer;
                e.installments.count = +productUpdate.installmentsCount || 0;
                e.installments.interestRate = +productUpdate.interestRate || 0;
                e.description.overview = productUpdate.overview;
                e.description.careInstructions = productUpdate.careInstructions;
                e.description.composition = productUpdate.composition;
            }
        });
        fs.writeFileSync(this.filename, JSON.stringify(allProducts, null, 2));
    }
};

module.exports = Product;