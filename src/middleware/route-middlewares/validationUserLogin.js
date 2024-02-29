const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

const validations = [
    body('email')
        .notEmpty().withMessage('Debes ingresar un e-mail.').bail()
        .isEmail().withMessage('Debes ingresar un formato de e-mail válido.'),
    body('password')
        .notEmpty().withMessage('Debes ingresar una contraseña.').bail(),
    body().custom((value, { req }) => {

        const { email, password } = req.body;
        const userToLogin = User.findByField('email', email);

        if (!email && !password) {
            return true;
        }

        if (!userToLogin) {
            throw new Error('La cuenta vinculada al e-mail ingresado no existe.');
        }

        if (password && !bcrypt.compareSync(password, userToLogin.password)) {
            throw new Error('La contraseña ingresada es incorrecta.');
        }

        return true;
    }),
];

module.exports = validations;
