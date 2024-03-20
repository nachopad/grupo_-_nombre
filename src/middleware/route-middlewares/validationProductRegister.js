const { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Debes ingresar un nombre para el producto.'),
    body('price').notEmpty().withMessage('Debes ingresar un precio base para el producto.'),
    body('category').notEmpty().withMessage('Debes seleccionar una categoría para el producto.'),
    body('gender').notEmpty().withMessage('Debes seleccionar un género para el producto.'),
    body('colors').notEmpty().withMessage('Debes ingresar al menos un color para el producto.'),
    body('sizes').notEmpty().withMessage('Debes ingresar al menos un talle para el producto.'),
    body('overview').notEmpty().withMessage('Debes ingresar la descripción del producto.'),
    body('careInstructions').notEmpty().withMessage('Debes ingresar las instrucciones de cuidado del producto.'),
    body('composition').notEmpty().withMessage('Debes ingresar los materiales de composición del producto.'),
    body('img').custom((value, { req }) => {
        const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if(req.body.error) {
            throw new Error(`Las extensiones válidas de imagen son ${allowedFileTypes.join(', ')}`);
        };
        return true;
    })
];

module.exports = validations;