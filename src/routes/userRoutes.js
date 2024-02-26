const express = require('express');
const userRouter = express.Router();
const userCtrl = require('../controllers/userController');
const uploadFile = require('../middleware/middleware-ruta/multer');
const validationsUser = require('../middleware/middleware-ruta/validationUserRegister');

userRouter.get('/login', userCtrl.login);
userRouter.get('/register', userCtrl.getFormRegister);
userRouter.post('/register', uploadFile.single('photo'), validationsUser ,userCtrl.register);

module.exports = userRouter;