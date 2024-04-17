module.exports = (sequelize, dataType) => {

    let alias = 'Installments';

    let cols = {
        id:{
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        count: {
            type: dataType.INTEGER
        },
        interest: {
            type: dataType.INTEGER
        }
    };

    let config = {
        tableName: 'installments',
        timestamps: false
    };

    const Installment = sequelize.define(alias, cols, config);

    Installment.associate = function(models) {
        Installment.hasMany(models.Orders, {
            as: 'orders', 
            foreignKey: 'installment_id'
        });
    };

    return Installment;
    
};