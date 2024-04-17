module.exports = (sequelize, dataType) => {

    let alias = 'Categories';

    let cols = {
        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataType.STRING(50),
            allowNull: false
        }
    };

    let config = {
        tableName: 'categories',
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {
        Category.hasMany(models.Products, {
            as: "products",
            foreignKey: "category_id"
        });
    };
    
    return Category;

};