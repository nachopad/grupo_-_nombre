const express = require('express');
const orderApiRouter = express.Router();
const ordersApiController = require('../../controllers/api/ordersAPIController');

orderApiRouter.get('/list', ordersApiController.list);
orderApiRouter.get('/last-five-order', ordersApiController.getLastFiveOrders);

module.exports = orderApiRouter;

