module.exports = (sequelize, dataType) => {

    let alias = 'ProductImages';

    let cols = {
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
    };

    let config = {
        tableName: "product_images", 
        timestamps: false
    };

    const ProductImages = sequelize.define(alias, cols, config);

    ProductImages.associate = function(models) {
        ProductImages.belongsTo(models.Products, {
            as: 'images',
            foreignKey: 'product_id'
        });
    };
    
    return ProductImages;
};