const express = require('express');
const userRouter = express.Router();
const uploadFile = require('../middleware/route-middlewares/userRegisterMulter');
const registerValidation = require('../middleware/route-middlewares/validationUserRegister');
const loginValidation = require('../middleware/route-middlewares/validationUserLogin');
const userController = require('../controllers/userController');

userRouter.get('/login', userController.login);
userRouter.get('/register', userController.getFormRegister);
userRouter.post('/login', loginValidation , userController.processLogin);
userRouter.post('/register', uploadFile.single('photo'), registerValidation ,userController.register);
userRouter.get('/profile', userController.profile);
userRouter.get('/logout', userController.logout);
userRouter.put('/user-update/:id', uploadFile.single('photo') ,userController.update );
userRouter.patch('/change-password/:id', userController.changePassword);

module.exports = userRouter;