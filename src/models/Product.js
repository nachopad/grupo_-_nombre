const fs = require('node:fs');
const path = require('node:path');
const crypto = require('crypto');
const productsFilePath = path.join(__dirname, '../data/productData.json');
const db = require('../database/models');

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
    create: async function (files, product) {
        /** CREA pero no mostrara nada a la vista */
        const producto = await db.Product.create({
            product_name: product.name,
            price: +product.price,
            overview: product.overview,
            care_instructions: product.careInstructions,
            composition: product.composition,
            stock: 2,
            category_id: 1,
            discount_id: 1
        })
        await db.ProductImages.bulkCreate(files.map(image => ({
            product_id: producto.dataValues.product_id, 
            url: image.filename
        })));

        console.log(producto); 
        return false;
    },
    delete: async function (id) {

        const removeProduct = await db.Product.findByPk(id,{
            include: [{association: "images"}] 
        });
        //Asi es como se puede acceder a las imagenes asociadas
        console.log(removeProduct.dataValues.images[0].dataValues.url);
        //** Este elimina los archivos, no lo hace y no se ¿por qué? */
        removeProduct.dataValues.images.forEach(p => {
            let photoFilePath = path.join(__dirname, '../../public/images/productDetail/' + p.dataValues.url);
            console.log(photoFilePath);
            if (fs.existsSync(photoFilePath)) {
                fs.unlinkSync(photoFilePath);
            }
        });
        await db.ProductImages.destroy({
            where: {product_id: id}
        })
        const row = await db.Product.destroy({
            where: {product_id: id}
        });
        if(!row){
            console.log("Ninguna eliminacion");
            return true
        };
        console.log(row);
        return false;

        //Solo lo deje por referencia nomas
        let allProducts = this.getData();
        let removePoduct = allProducts.result.find(product => product.id === id);

        removePoduct.img.forEach(p => {
            let photoFilePath = path.join(__dirname, '../../public/images/userProfile/' + p);
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