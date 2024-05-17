const express = require('express');
const productApiRouter = express.Router();
const productApiController = require('../../controllers/api/productAPIController');

productApiRouter.get('/list', productApiController.list);
productApiRouter.get('/:id', productApiController.detail);

module.exports = productApiRouter;