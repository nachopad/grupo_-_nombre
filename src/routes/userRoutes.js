const express = require('express');
const userRouter = express.Router();
const uploadFile = require('../middleware/route-middlewares/multer');
const registerValidation = require('../middleware/route-middlewares/validationUserRegister');
const loginValidation = require('../middleware/route-middlewares/validationUserLogin');
const userController = require('../controllers/userController');

userRouter.get('/login', userController.login);
userRouter.get('/register', userController.getFormRegister);
userRouter.post('/login', loginValidation , userController.processLogin);
userRouter.post('/register', uploadFile.single('photo'), registerValidation ,userController.register);
userRouter.get('/profile', userController.profile);
userRouter.get('/logout', userController.logout);

module.exports = userRouter;