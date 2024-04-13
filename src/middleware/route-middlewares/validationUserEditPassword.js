const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../../services/User');

const validations = [
    body('currentPassword')
        .notEmpty().withMessage('Debes ingresar tu contraseña actual.')
        .custom( async (value, { req }) => {
            let userFinded = await User.findByField('email', req.session.userLogged.email);
            if(!userFinded || !bcrypt.compareSync(value, userFinded.user_password)) {
                throw new Error('Debes ingresar tu contraseña actual.')
            }
            return true;
        }),
    body('newPassword')
        .notEmpty().withMessage('Debes ingresar la nueva contraseña.').bail()
        .isLength({ min: 8}).withMessage('La contraseña debe tener un mínimo de 8 caracteres.'),
    body('confirmNewPassword')
        .notEmpty().withMessage('Debes repetir la contraseña para confirmar.').bail()
        .custom((value, { req }) => {
            if(value != req.body.newPassword) {
                throw new Error('Las contraseñas deben coincidir.')
            }
            return true;
        })
];

module.exports = validations;