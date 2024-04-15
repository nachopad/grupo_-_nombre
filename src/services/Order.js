const db = require('../database/models');

const Order = {
    registerOrder: async function (shipInfo, shoppingCart, userId, total) {
        try{
            const newOrder = await db.Orders.create({
                user_id: userId,
                sending_cost: 0,
                sending_address: shipInfo.sendingAddress,
                locality: shipInfo.locality,
                postal_code: shipInfo.postalCode,
                subtotal: total,
                total: total
            });
    
            await db.ProductDetails.bulkCreate(shoppingCart.map(product =>({
                order_id: newOrder.dataValues.order_id,
                product_id: product.product_id,
                amount:1
            })));
    
            return newOrder;
        }catch(err){
            console.log("Error al registrar la orden: "+ err);
        }
    }
}
module.exports = Order