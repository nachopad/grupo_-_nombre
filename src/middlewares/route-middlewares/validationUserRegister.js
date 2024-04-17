const path = require('node:path');
const { body } = require('express-validator');
const User = require('../../services/User');

const validations = [
    body('firstName').notEmpty().withMessage('Debes ingresar un nombre.'),
    body('lastName').notEmpty().withMessage('Debes ingresar un apellido.'),
    body('birthdate')
        .notEmpty().withMessage('Debes ingresar una fecha de nacimiento.')
        .isAfter('1900-01-01').withMessage('La fecha de nacimiento debe ser posterior al 01/01/1900.')
        .isBefore(new Date().toISOString().split('T')[0]).withMessage('La fecha de nacimiento no puede ser superior a la fecha actual.'),
    body('phone').notEmpty().withMessage('Debes ingresar un número de teléfono.'),
    body('password')
        .notEmpty().withMessage('Debes ingresar una contraseña.').bail()
        .isLength({ min: 8}).withMessage('La contraseña debe tener un mínimo de 8 caracteres.'),
    body('confirmPassword')
        .notEmpty().withMessage('Debes ingresar la contraseña de confirmación.').bail()
        .custom((value, { req }) => {
            if(req.body.password != value) {
                throw new Error('Debes repetir la misma contraseña.')
            }
            return true;
        }),
    body('email')
        .notEmpty().withMessage('Debes ingresar un e-mail.').bail()
        .isEmail().withMessage('Debes ingresar un formato de e-mail válido.').bail()
        .custom(async (value, { req }) => {
            const { email } = req.body;
            let userRegistered = await User.findByField('email', email);

            if(userRegistered){
                throw new Error('Ya existe una cuenta vinculada al e-mail ingresado.');
            };

            return true;
        }),
    body('photo').custom((value, { req }) => {
        const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if(req.body.error) {
            throw new Error(`Las extensiones válidas de imagen son ${allowedFileTypes.join(', ')}`);
        };
        return true;
    })
];

module.exports = validations;