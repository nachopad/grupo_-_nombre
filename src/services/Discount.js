let db = require('../database/models');

const Discount = {
    findAll: async function() {
        try {
            return await db.Discounts.findAll();
        } catch (error) {
            console.error('Error al obtener descuentos:', error);
          }
    },
    findByPk: async function(id) {
        try {
            return await db.Discounts.findByPk(id);
        } catch (error) {
            console.error('Error al obtener el descuento:', error);
        }
    },
    findByField: async function(field, text) {
        try {
            return await db.Discounts.findOne({
                where: { [field]: text }
            });
        } catch (error) {
            console.error('Error al obtener el descuento:', error);
        }
    },
    create: async function(discount) {
        try {
            return await db.Discounts.create(discount);
        } catch (error) {
            console.error('Error al crear el descuento:', error);
        }
    },
    update: async function(id, discount) {
       try {
            let updateData = {
                percent: discount.percent
            };

            return await db.Discounts.update(updateData, { where: { discount_id: id } });

       } catch (error) {
            console.log('Error al modificar el descuento:', error);
       }
    }
};

module.exports = Discount;