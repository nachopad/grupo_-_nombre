let db = require('../database/models');

const Installment = {
    findAll: async function() {
        try {
            return await db.Installments.findAll();
        } catch (error) {
            console.error('Error al obtener cuotas:', error);
          }
    },
    findByPk: async function(id) {
        try {
            return await db.Installments.findByPk(id);
        } catch (error) {
            console.error('Error al obtener la cuota: ', error);
        }
    },
    findByField: async function(field, text) {
        try {
            return await db.Installments.findOne({
                where: { [field]: text }
            });
        } catch (error) {
            console.error('Error al obtener la cuota:', error);
        }
    },
    create: async function(installment) {
        try {
            return await db.Installments.create(installment);
        } catch (error) {
            console.error('Error al crear la cuota:', error);
        }
    },
    update: async function(id, installment) {
       try {
            let updateData = {
                count: installment.count,
                interest: installment.interest
            };

            return await db.Installments.update(updateData, { where: { id: id } });

       } catch (error) {
            console.log('Error al modificar la cuota:', error);
       }
    }
};

module.exports = Installment;