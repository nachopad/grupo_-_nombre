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
            return await db.Products.findByPk(id, {
                include: ['categories', 'discounts', 'colors', 'sizes', 'images']
            });
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
        try {
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
    
            await db.ProductColors.bulkCreate(product.colors.map(color => ({
                product_id: newProduct.dataValues.product_id,
                color_id: +color
            })));

            await db.ProductSizes.bulkCreate(product.sizes.map(size => ({
                product_id: newProduct.dataValues.product_id,
                size_id: +size
            })));
    
            await db.ProductImages.bulkCreate(files.map(image => ({
                product_id: newProduct.dataValues.product_id, 
                url: image.filename
            })));
    
            return newProduct;

        } catch (error) {
            console.error('Error al crear el producto:', error);
        }
    },
    delete: async function (id) {
        try {
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
    
            await db.Products.destroy({
                where: {product_id: id}
            });
            
            return false;

        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }

    },
    edit: async function (id, productUpdate, files) {
        try {
            await db.Products.update({
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

           await db.ProductColors.destroy({
                where: {
                    product_id: id
                }
           });

           await db.ProductColors.bulkCreate(productUpdate.colors.map(color => ({
                product_id: id,
                color_id: +color
            })));

            await db.ProductSizes.destroy({
                where: {
                    product_id: id
                }
           });

           await db.ProductSizes.bulkCreate(productUpdate.sizes.map(size => ({
                product_id: id,
                size_id: +size
            })));

            await db.ProductImages.update(files.map(image => ({
                url: image.filename
            })), {
                where: {
                    product_id: id
                }
            });
           
        } catch (error) {
            console.error('Error al editar el producto:', error);
        }

    }
};

module.exports = Product;