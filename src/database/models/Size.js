module.exports = (sequelize, dataTypes) => {

    let alias = 'Sizes';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        measurement: {
            type: dataTypes.STRING(20)
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