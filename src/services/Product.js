const fs = require('node:fs');
const path = require('node:path');
const productsFilePath = path.join(__dirname, '../data/productData.json');

const db = require('../database/models');
const { Op, where } = require('sequelize');

const Product = {
    filename: productsFilePath,
    getData: function () {
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },
    findAll: async function () {
        try {
            return await db.Products.findAll({ include: ['categories', 'genders', 'discounts', 'colors', 'sizes', 'images'] });
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }
    },
    findByPk: async function (id) {
        try {
            return await db.Products.findByPk(id, {
                include: ['categories', 'genders', 'discounts', 'colors', 'sizes', 'images']
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
                title: product.name,
                price: +product.price,
                overview: product.overview,
                care_instructions: product.careInstructions,
                composition: product.composition,
                stock: 2,
                category_id: product.category,
                discount_id: product.offer,
                gender_id: product.gender
            });

            await db.ProductColors.bulkCreate(product.colors.map(color => ({
                product_id: newProduct.dataValues.id,
                color_id: +color
            })));

            await db.ProductSizes.bulkCreate(product.sizes.map(size => ({
                product_id: newProduct.dataValues.id,
                size_id: +size
            })));

            await db.ProductImages.bulkCreate(files.map(image => ({
                product_id: newProduct.dataValues.id,
                url_image: image.filename
            })));

            return newProduct;

        } catch (error) {
            console.error('Error al crear el producto:', error);
        }
    },
    delete: async function (id) {
        try {
            const removeProduct = await db.Products.findByPk(id, {
                include: [{ association: "images" }]
            });
            
            removeProduct.dataValues.images.forEach(p => {
                let photoFilePath = path.join(__dirname, '../../public/images/productDetail/' + p.dataValues.url_image);
                if (fs.existsSync(photoFilePath)) {
                    fs.unlinkSync(photoFilePath);
                }
            });

            await db.ProductImages.destroy({
                where: { product_id: id }
            });

            await db.ProductColors.destroy({
                where: { product_id: id }
            });
            await db.ProductSizes.destroy({
                where: { product_id: id }
            });

            await db.Products.destroy({
                where: { id: id }
            });

            return false;

        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }

    },
    edit: async function (id, productUpdate, files) {
        try {
            await db.Products.update({
                title: productUpdate.name,
                price: +productUpdate.price,
                overview: productUpdate.overview,
                care_instructions: productUpdate.careInstructions,
                composition: productUpdate.composition,
                stock: 2,
                category_id: productUpdate.category,
                discount_id: productUpdate.offer,
                gender_id: productUpdate.gender
            },
                { where: { id: id } });

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
            
            if (productUpdate.images) {
                productUpdate.images.forEach(async (imgName) => {
                    await db.ProductImages.destroy({
                        where: {
                            url_image: imgName
                        }
                    })
                    let photoFilePath = path.join(__dirname, '../../public/images/productDetail/' + imgName);
                    if (fs.existsSync(photoFilePath)) {
                        fs.unlinkSync(photoFilePath);
                    }
                });
            }
            if(files){
                await db.ProductImages.bulkCreate(files.map(image => ({
                    product_id: id,
                    url_image: image.filename
                })));
            }

        } catch (error) {
            console.error('Error al editar el producto:', error);
        }
    },
    seachProduct: async function (word) {
        try {
            return await db.Products.findAll({
                where: {
                    title: { [Op.like]: `%${word}%` }
                },
                order: [
                    ['title', 'ASC']
                ],
                include: ['categories', 'discounts', 'genders', 'colors', 'sizes', 'images']
            });
        } catch (error) {
            return error;
        }
    },
    listProductsOnSale: async (req, res) => {
        try {
            return await db.Products.findAll({
                include: ['categories', 'genders', 'colors', 'sizes', 'images', {
                    model: db.Discounts,
                    as: 'discounts',
                    where: {
                        percent: {
                            [Op.gt]: 0
                        }
                    }
                }],
                order: [
                    ['title', 'ASC']
                ],
                limit: 10,
                offset: 0
            });
        } catch (error) {
            console.error("Error al obtener productos en oferta:", error);
        }
    },
    listProductsByGender: async (gender) => {
        try {
            return await db.Products.findAll({
                include: ['categories', 'discounts', 'colors', 'sizes', 'images', {
                    model: db.Genders,
                    as: 'genders',
                    where: {
                        name: gender
                    }
                }],
                order: [
                    ['title', 'ASC']
                ],
                limit: 10,
                offset: 0
            });
        } catch (error) {
            console.error("Error al obtener productos en oferta:", error);
        }
    },
    listProductsByCategory: async (category) => {
        try {
            return await db.Products.findAll({
                include: ['discounts', 'colors', 'sizes', 'images', {
                    model: db.Categories,
                    as: 'categories',
                    where: {
                        name: category
                    }
                }],
                order: [
                    ['title', 'ASC']
                ],
                limit: 10,
                offset: 0
            });
        } catch (error) {
            console.error("Error al obtener productos en oferta:", error);
        }
    },
    findWithOffset: async (page, limit) => {
        try {
            return await db.Products.findAll({
                include: ['categories', 'genders', 'discounts', 'colors', 'sizes', 'images'],
                limit: limit,
                offset: page * 5
            });
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }
    }
};

module.exports = Product;