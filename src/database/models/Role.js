module.exports = (sequelize, dataTypes) => {

    let alias = 'Roles';

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
        tableName: 'roles',
        timestamps: false
    };

    const Role = sequelize.define(alias, cols, config);

    Role.associate = function(models) {
        Role.hasMany(models.Users, {
            as: 'users',
            foreignKey: 'id'
        });
    };

    return Role;
};