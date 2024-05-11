const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../../services/User');

const validations = [
    body('email')
        .notEmpty().withMessage('Debes ingresar un e-mail.').bail()
        .isEmail().withMessage('Debes ingresar un formato de e-mail válido.'),
    body('password')
        .notEmpty().withMessage('Debes ingresar una contraseña.').bail(),
    body().custom(async (value, { req }) => {
        const { email, password } = req.body;
        const userToLogin = await User.findByField('email', email);

        if (!email && !password) {
            return true;
        }

        if (!userToLogin || (password && !bcrypt.compareSync(password, userToLogin.dataValues.password))) {
            throw new Error('El e-mail y/o la contraseña ingresados son incorrectos. Inténtelo de nuevo.');
        }

        return true;
    }),
];

module.exports = validations;
