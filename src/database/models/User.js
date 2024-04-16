module.exports = (sequelize, dataTypes) => {

    let alias = 'Users';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(50) 
        },
        last_name: {
            type: dataTypes.STRING(50) 
        },
        birthdate: {
            type: dataTypes.DATE
        },
        email: {
            type: dataTypes.STRING(50) 
        },
        phone: {
            type: dataTypes.STRING(20)
        },
        image: {
            type: dataTypes.STRING(200) 
        },
        password: {
            type: dataTypes.STRING(50) 
        },
        role_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.Roles, {
            as: 'roles',
            foreignKey: 'role_id'
        });
        
        User.hasMany(models.Orders,{
            as: "orders",
            foreignKey: "user_id"
        });
    };

    return User;
    
};