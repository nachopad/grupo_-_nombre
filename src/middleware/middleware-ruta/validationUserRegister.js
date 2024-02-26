const { check } = require('express-validator');
const userDB = require('../../data/users.json');

const validations = [
    check('email').custom(value => {
        let foundObj = userDB.result.find(user => user.email == value);
        if (foundObj) {
            throw new Error('Este email ya esta registrado');
        }
        return true;
    }),
    check('confirmPassword').custom((value, {req})=>{
        if(req.body.password != value){
            throw new Error('Debe repetir la misma contraseña')
        }
        return true;
    })
]
module.exports = validations;