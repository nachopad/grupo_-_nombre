let db = require('../database/models');

const Gender = {
    findAll: async function() {
        try {
            return await db.Genders.findAll();
        } catch (error) {
            console.error('Error al obtener géneros:', error);
          }
    },
    findByPk: async function(id) {
        try {
            return await db.Genders.findByPk(id);
        } catch (error) {
            console.error('Error al obtener el género:', error);
        }
    },
    findByField: async function(field, text) {
        try {
            return await db.Genders.findOne({
                where: { [field]: text }
            });
        } catch (error) {
            console.error('Error al obtener el género:', error);
        }
    },
    create: async function(gender) {
        try {
            return await db.Genders.create(gender);
        } catch (error) {
            console.error('Error al crear el género:', error);
        }
    },
    update: async function(id, gender) {
       try {
            let updateData = {
                name: gender.name
            };

            return await db.Genders.update(updateData, { where: { id: id } });

       } catch (error) {
            console.log('Error al modificar el género:', error);
       }
    }
};

module.exports = Gender;