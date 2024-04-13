/**
 * 
 * @param {import('sequelize').sequelize } sequelize 
 * @param {import('sequelize/types').DataTypes} dataType 
 */

module.exports = (sequelize, dataType) => {
    const ProductImages = sequelize.define('ProductImages', {
        id:{
            type: dataType.INTEGER,
            primaryKey: true
        },
        url:{
            type: dataType.STRING,
            allowNull: false
        },
        product_id:{
            type: dataType.INTEGER
        }
    }, { tableName: "product_images", timestamps: false });

    ProductImages.associate = function(models) {
        ProductImages.belongsTo(models.Product, {
            as: 'images',
            foreignKey: 'product_id'
        });
    };
    return ProductImages;
};