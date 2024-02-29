const fs = require('node:fs');
const crypto = require('crypto');
const path = require('node:path');
const productsFilePath = path.join(__dirname, '../data/productData.json');

const Product = {
    filename: productsFilePath,
    getData: function() {
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },
    findAll: function() {
        return this.getData();
    },
    findByPk: function(id){
        let allProducts = this.getData().result;
        return allProducts.find((oneProduct => oneProduct.id === id));
    },
    findByField: function(field, text) {
        let allProducts = this.getData().result;
        return allProducts.find((oneProduct => oneProduct[field] === text));
    },
    create: function() {
        let allProducts = this.getData();

        let newProduct = {
            id: crypto.randomUUID,

        };
    },
    delete: function(id) {
        let allProducts = this.getData();
        let finalProducts = allProducts.result.filter((oneProduct => oneProduct.id === id));
        fs.writeFileSync(this.filename, JSON.stringify(finalProducts, null, ' '));
        return true;
    },
    edit: function() {

    }
};

module.exports = Product;