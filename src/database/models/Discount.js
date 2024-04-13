/**
 * 
 * @param {import('sequelize').sequelize } sequelize 
 * @param {import('sequelize/types').DataTypes} dataType 
 */
module.exports = (sequelize, dataType) => {
    const Discount = sequelize.define("Discount", {
        discount_id:{
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        percent:{
            type: dataType.INTEGER
        }
    },{tableName: "discounts",timestamps: false});

    Discount.associate = function(models) {
        Discount.hasMany(models.Product, {as: 'products', foreignKey: 'discount_id'});
    }
    return Discount;
}