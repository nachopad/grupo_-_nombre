module.exports = (sequelize, dataTypes) => {

    let alias = 'ProductSizes';

    let cols = {
        size_id: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'product_size',
        timestamps: false
    };

    const ProductSize = sequelize.define(alias, cols, config);

    return ProductSize;
};