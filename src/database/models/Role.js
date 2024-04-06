module.exports = (sequelize, dataTypes) => {

    let alias = 'Roles';

    let cols = {
        role_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        role_name: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: 'roles',
        timestamps: false
    };

    const Role = sequelize.define(alias, cols, config);

    Role.associate = function(models) {
        Role.hasMany(models.Users, {
            as: 'users',
            foreignKey: 'user_id'
        });
    };

    return Role;
};