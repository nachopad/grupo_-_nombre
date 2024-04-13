let db = require('../database/models');

const Category = {
    findAll: async function() {
        try {
            return await db.Categories.findAll();
        } catch (error) {
            console.error('Error al obtener categorias:', error);
          }
    },
    findByPk: async function(id) {
        try {
            return await db.Categories.findByPk(id);
        } catch (error) {
            console.error('Error al obtener la categoría:', error);
        }
    },
    findByField: async function(field, text) {
        try {
            return await db.Categories.findOne({
                where: { [field]: text }
            });
        } catch (error) {
            console.error('Error al obtener la categoría:', error);
        }
    },
    create: async function(category) {
        try {
            return await db.Categories.create(category);
        } catch (error) {
            console.error('Error al crear la categoría:', error);
        }
    },
    update: async function(id, category) {
       try {
            let updateData = {
                category_name: category.name
            };

            return await db.Categories.update(updateData, { where: { category_id: id } });

       } catch (error) {
            console.log('Error al modificar la categoría:', error);
       }
    }
};

module.exports = Category;