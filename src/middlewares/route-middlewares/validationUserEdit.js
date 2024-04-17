const path = require('node:path');
const { body } = require('express-validator');
const User = require('../../services/User');

const validations = [
    body('firstName').notEmpty().withMessage('Debes ingresar un nombre.'),
    body('lastName').notEmpty().withMessage('Debes ingresar un apellido.'),
    body('birthDate')
        .notEmpty().withMessage('Debes ingresar una fecha de nacimiento.')
        .isAfter('1900-01-01').withMessage('La fecha de nacimiento debe ser posterior al 01/01/1900.')
        .isBefore(new Date().toISOString().split('T')[0]).withMessage('La fecha de nacimiento no puede ser superior a la fecha actual.'),
    body('phone').notEmpty().withMessage('Debes ingresar un número de teléfono.'),
    body('email')
        .notEmpty().withMessage('Debes ingresar un e-mail.').bail()
        .isEmail().withMessage('Debes ingresar un formato de e-mail válido.'),
    body('photo').custom((value, { req }) => {
        const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if(req.body.error) {
            throw new Error(`Las extensiones válidas de imagen son ${allowedFileTypes.join(', ')}`);
        };
        return true;
    })
];

module.exports = validations;