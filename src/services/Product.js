const fs = require('node:fs');
const path = require('node:path');
const productsFilePath = path.join(__dirname, '../data/productData.json');
const db = require('../database/models');

const Product = {
    filename: productsFilePath,
    getData: function () {
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },
    findAll: async function () {
        try {
            return await db.Products.findAll();
        } catch (error) {
            console.error('Error al obtener productos:', error);
          }
    },
    findByPk: async function (id) {
        try {
            return await db.Products.findByPk(id);
        } catch (error) {
            console.error('Error al obtener el producto:', error);
        }
    },
    findByField: async function (field, text) {
        try {
            return await db.Products.findOne({
                where: { [field]: text }
            });
        } catch (error) {
            console.error('Error al obtener el producto:', error);
        }
    },
    create: async function (files, product) {
        /** CREA pero no mostrara nada a la vista */
        const newProduct = await db.Products.create({
            product_name: product.name,
            price: +product.price,
            overview: product.overview,
            care_instructions: product.careInstructions,
            composition: product.composition,
            stock: 2,
            category_id: product.category,
            discount_id: product.offer
        });

        await db.ProductImages.bulkCreate(files.map(image => ({
            product_id: newProduct.dataValues.product_id, 
            url: image.filename
        })));

        return false;
    },
    delete: async function (id) {

        const removeProduct = await db.Products.findByPk(id,{
            include: [{association: "images"}] 
        });
        //Asi es como se puede acceder a las imagenes asociadas
        console.log(removeProduct.dataValues.images[0].dataValues.url);
        //** Este elimina los archivos, no lo hace y no se ¿por qué? */
        removeProduct.dataValues.images.forEach(p => {
            let photoFilePath = path.join(__dirname, '../../public/images/productDetail/' + p.dataValues.url);
            if (fs.existsSync(photoFilePath)) {
                fs.unlinkSync(photoFilePath);
            }
        });

        await db.ProductImages.destroy({
            where: {product_id: id}
        });

        const row = await db.Products.destroy({
            where: {product_id: id}
        });

        if(!row){
            console.log("Ninguna eliminacion");
            return true
        };
        console.log(row);
        
        return false;
    },
    edit: async function (id, productUpdate) {
        /*
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
        */
       return await db.Products.update({
            product_name: productUpdate.name,
            price: +productUpdate.price,
            overview: productUpdate.overview,
            care_instructions: productUpdate.careInstructions,
            composition: productUpdate.composition,
            stock: 2,
            category_id: productUpdate.category,
            discount_id: productUpdate.offer
       }, 
       { where: { product_id: id} });
    }
};

/*
(async () => {
    const product = await db.Product.findByPk(1, {
        include: [{association: 'categories'}]
      });
      console.log(product.dataValues.categories.category_name)
})();
*/

module.exports = Product;