module.exports = (sequelize, dataType) => {

    let alias = "Products";

    let cols = {
        product_id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: dataType.STRING,
            allowNull: false
        },
        price: {
            type: dataType.DECIMAL,
            allowNull: false
        },
        overview: {
            type: dataType.TEXT,
            allowNull: false
        },
        care_instructions: {
            type: dataType.TEXT,
            allowNull: false
        },
        composition: {
            type: dataType.TEXT,
            allowNull: false
        },
        stock: {
            type: dataType.INTEGER,
            allowNull: false
        },
        category_id:{
            type: dataType.INTEGER,
            allowNull: false
        },
        discount_id: {
            type: dataType.INTEGER
        }
    };

    let config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.hasMany(models.ProductImages, {
            as: 'images', 
            foreignKey: 'product_id'
        });
        Product.belongsTo(models.Categories, {
            as:"categories", 
            foreignKey: "category_id"
        });
        Product.belongsTo(models.Discounts, {
            as:"discounts", 
            foreignKey: "discount_id"
        });
    };

    return Product;

};