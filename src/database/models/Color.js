module.exports = (sequelize, dataTypes) => {

    let alias = 'Colors';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50)
        }
    };

    let config = {
        tableName: 'colors',
        timestamps: false
    };

    const Color = sequelize.define(alias, cols, config);

    Color.associate = function(models) {
        Color.belongsToMany(models.Products, {
            as: 'products',
            through: models.ProductColors,
            foreignKey: 'color_id',
            otherKey: 'product_id',
            timestamps: false
        });
    };

    return Color;

};