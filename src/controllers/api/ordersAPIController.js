const orderService = require('../../services/Order');

const orderApiController = {
    list: async (req, res) => {
        try {
            const ordersDB = await orderService.getOrders();

            const quantitySoldProducts = await ordersDB.reduce((state, order) => {
                return state + order.products.reduce((state2, product) => state2 + product.ProductDetails.count, 0);
            }, 0);

            res.status(200).json({
                quantity: ordersDB.length,
                orders: ordersDB,
                quantitySoldProducts
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error",
                error
            });
        }
    },
    getLastFiveOrders: async(req, res)=>{
        try {
            const ordersDB = await orderService.getLastFiveOrders();
            // This return the last five sold products of each order
            // const lastFiveSoldProducts  = await ordersDB.map(order =>{
            //     return order.products.map(product =>{
            //         return product.dataValues
            //     })
            // });

            res.status(200).json({
                quantity: ordersDB.length,
                orders: ordersDB
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error",
                error
            });
        }
    }
}

module.exports = orderApiController;