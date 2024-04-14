module.exports = (sequelize, dataTypes) => {

    let alias = 'ProductColors';

    let cols = {
        color_id: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'product_color',
        timestamps: false
    };

    const ProductColor = sequelize.define(alias, cols, config);

    return ProductColor;
};