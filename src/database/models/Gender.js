module.exports = (sequelize, dataType) => {

    let alias = 'Genders';

    let cols = {
        id:{
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataType.STRING(20)
        }
    };

    let config = {
        tableName: 'genders',
        timestamps: false
    };

    const Gender = sequelize.define(alias, cols, config);

    Gender.associate = function(models) {
        Gender.hasMany(models.Products, {
            as: 'products', 
            foreignKey: 'gender_id'
        });
    };

    return Gender;
    
};