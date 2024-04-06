module.exports = (sequelize, dataTypes) => {

    let alias = 'Users';

    let cols = {
        user_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        full_name: {
            type: dataTypes.STRING 
        },
        last_name: {
            type: dataTypes.STRING 
        },
        birthdate: {
            type: dataTypes.DATE
        },
        email: {
            type: dataTypes.STRING 
        },
        phone: {
            type: dataTypes.STRING 
        },
        url_image: {
            type: dataTypes.STRING 
        },
        user_password: {
            type: dataTypes.STRING 
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
    };

    return User;
};