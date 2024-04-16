const bcrypt = require('bcryptjs');
let db = require('../database/models');

const User = {
    findAll: async function() {
        try {
            return await db.Users.findAll();
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
          }
    },
    findByPk: async function(id) {
        try {
            return await db.Users.findByPk(id);
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
        }
    },
    findByField: async function(field, text) {
        try {
            return await db.Users.findOne({
                where: { [field]: text }
            });
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
        }
    },
    createNewUser: function(body, file) {
        let newUser = {
            first_name: body.firstName,
            last_name: body.lastName,
            birthdate: body.birthdate,
            email: body.email,
            phone: body.phone,
            image: file ? file.filename : '',
            password: bcrypt.hashSync(body.password, 12)
        };

        return newUser;
    },
    create: async function(userData) {
        try {
            let newUser = this.createNewUser(userData.body, userData.file);
            return await db.Users.create(newUser);
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
        }
    },
    update: async function(id, user, file) {
       try {
            let updateData = {
                first_name: user.firstName,
                last_name: user.lastName,
                birthdate: user.birthDate,
                email: user.email,
                phone: user.phone,
                image: file ? file.filename : '',
                password: user.password
            };
            if(file) {
                updateData.image = file.filename
            };

            return await db.Users.update(updateData, { where: { id: id } });

       } catch (error) {
            console.log('Error al modificar el usuario:', error);
       }
    },
    updatePassword: async function(id, password) {
        try {
            return await db.Users.update({
                password: bcrypt.hashSync(password, 12)
            },
            { where: { id: id } });
        } catch (error) {
            console.log('Error al modificar la contraseña: ', error);
        }
    }
};

module.exports = User;