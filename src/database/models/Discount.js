module.exports = (sequelize, dataType) => {

    let alias = 'Discounts';

    let cols = {
        discount_id:{
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        percent:{
            type: dataType.INTEGER
        }
    };

    let config = {
        tableName: 'discounts',
        timestamps: false
    };

    const Discount = sequelize.define(alias, cols, config);

    Discount.associate = function(models) {
        Discount.hasMany(models.Products, {
            as: 'products', 
            foreignKey: 'discount_id'
        });
    };

    return Discount;
    
};