let db = require('../database/models');

const Color = {
    findAll: async function() {
        try {
            return await db.Colors.findAll();
        } catch (error) {
            console.error('Error al obtener colores:', error);
          }
    },
    findByPk: async function(id) {
        try {
            return await db.Colors.findByPk(id);
        } catch (error) {
            console.error('Error al obtener el color:', error);
        }
    },
    findByField: async function(field, text) {
        try {
            return await db.Colors.findOne({
                where: { [field]: text }
            });
        } catch (error) {
            console.error('Error al obtener el color:', error);
        }
    },
    create: async function(color) {
        try {
            return await db.Colors.create(color);
        } catch (error) {
            console.error('Error al crear el color:', error);
        }
    },
    update: async function(id, color) {
       try {
            let updateData = {
                color_name: color.name
            };

            return await db.Colors.update(updateData, { where: { color_id: id } });

       } catch (error) {
            console.log('Error al modificar el color:', error);
       }
    }
};

module.exports = Color;