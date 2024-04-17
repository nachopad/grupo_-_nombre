const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

const uploadFile = require('../middlewares/route-middlewares/userRegisterMulter');
const registerValidation = require('../middlewares/route-middlewares/validationUserRegister');
const loginValidation = require('../middlewares/route-middlewares/validationUserLogin');
const userEditValidation = require('../middlewares/route-middlewares/validationUserEdit');
const userEditPasswordValidation = require('../middlewares/route-middlewares/validationUserEditPassword');
const middlewareAuth = require('../middlewares/app-middlewares/userLoggedMiddleware');

userRouter.get('/login', middlewareAuth.isLogged, userController.login);
userRouter.post('/login', loginValidation, userController.processLogin);
userRouter.get('/register', middlewareAuth.isLogged, userController.getFormRegister);
userRouter.post('/register', uploadFile.single('photo'), registerValidation, userController.register);
userRouter.get('/profile', middlewareAuth.possibleLogout, userController.profile);
userRouter.get('/logout', middlewareAuth.possibleLogout, userController.logout);
userRouter.put('/user-update/:id', uploadFile.single('photo'), userEditValidation, userController.update);
userRouter.patch('/change-password/:id', userEditPasswordValidation, userController.changePassword);

module.exports = userRouter;