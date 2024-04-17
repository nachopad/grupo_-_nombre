const db = require('../database/models');
const installmentService = require('./Installment');

const Order = {
    registerOrder: async function (shipInfo, shoppingCart, userId, total) {
        try{
            console.log("Estoy por registrar, estoy en Order");
            const newOrder = await db.Orders.create({
                sending_cost: 0,
                sending_address: shipInfo.sendingAddress,
                locality: shipInfo.locality,
                postal_code: shipInfo.postalCode,
                total: total,
                user_id: userId,
                installment_id: shipInfo.installement,
            });
    
            await db.ProductDetails.bulkCreate(shoppingCart.map(product =>({
                order_id: newOrder.dataValues.id,
                product_id: product.id,
                count:1
            })));
            return newOrder;
        }catch(err){
            console.log("Error al registrar la orden: "+ err);
        }
    }
};

module.exports = Order;