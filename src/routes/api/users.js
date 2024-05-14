const express = require('express');
const userApiRouter = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

userApiRouter.get('/list', usersAPIController.list);
userApiRouter.get('/:id', usersAPIController.detail);

module.exports = userApiRouter;