const db = require('../database/models');

const Order = {
    registerOrder: async function (shipInfo, shoppingCart, userId, total) {
        try{
            const newOrder = await db.Orders.create({
                sending_cost: 0,
                sending_address: shipInfo.sendingAddress,
                locality: shipInfo.locality,
                postal_code: shipInfo.postalCode,
                user_id: userId,
                subtotal: total,
                total: total
            });
    
            await db.ProductDetails.bulkCreate(shoppingCart.map(product =>({
                order_id: newOrder.dataValues.order_id,
                product_id: product.id,
                amount:1
            })));
    
            return newOrder;

        }catch(err){
            console.log("Error al registrar la orden: "+ err);
        }
    }
};

module.exports = Order;