module.exports = (sequelize, dataTypes) => {

    let alias = 'Sizes';

    let cols = {
        size_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        measurement: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: 'sizes',
        timestamps: false
    };

    const Size = sequelize.define(alias, cols, config);

    Size.associate = function(models) {
        Size.belongsToMany(models.Products, {
            as: 'products',
            through: models.ProductSizes,
            foreignKey: 'size_id',
            otherKey: 'product_id',
            timestamps: false
        });
    };

    return Size;

};