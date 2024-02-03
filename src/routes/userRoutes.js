const express = require('express');
const userRouter = express.Router();
const userCtrl = require('../controllers/userController');

userRouter.get('/login', userCtrl.login);
userRouter.get('/register', userCtrl.register);
module.exports = userRouter;