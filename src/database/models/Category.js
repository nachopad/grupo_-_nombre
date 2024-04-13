/**
 * 
 * @param {import('sequelize').sequelize } sequelize 
 * @param {import('sequelize/types').DataTypes} dataType 
 */
module.exports = (sequelize, dataType)=>{
    const Category = sequelize.define("Categories",{
        category_id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_name:{
            type: dataType.STRING,
            allowNull: false
        }
    }, {tableName: "categories",
    timestamps: false});

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id"
        });
    }
    return Category;
}