let db = require('../database/models');

const Size = {
    findAll: async function() {
        try {
            return await db.Sizes.findAll();
        } catch (error) {
            console.error('Error al obtener talles:', error);
          }
    },
    findByPk: async function(id) {
        try {
            return await db.Sizes.findByPk(id);
        } catch (error) {
            console.error('Error al obtener el talle:', error);
        }
    },
    findByField: async function(field, text) {
        try {
            return await db.Sizes.findOne({
                where: { [field]: text }
            });
        } catch (error) {
            console.error('Error al obtener el talle:', error);
        }
    },
    create: async function(size) {
        try {
            return await db.Sizes.create(size);
        } catch (error) {
            console.error('Error al crear el talle:', error);
        }
    },
    update: async function(id, size) {
       try {
            let updateData = {
                measurement: size.name
            };

            return await db.Sizes.update(updateData, { where: { id: id } });

       } catch (error) {
            console.log('Error al modificar el color:', error);
       }
    }
};

module.exports = Size;