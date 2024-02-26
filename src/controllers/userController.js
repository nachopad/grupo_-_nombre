const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const userDB = require('../data/users.json');
const { validationResult }=require('express-validator');

const userCtrl = {
    login: (req, res) => {
        res.render('login');
    },
    getFormRegister: (req, res) => {
        res.render('register');
    },
    register: (req, res) => {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            let newUser = {
                id: crypto.randomUUID(),
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                birthdate: req.body.birthdate,
                password: bcrypt.hashSync(req.body.password, 12),
                category: "user",
                imagen: req.file?req.file.filename:'',
            }

            userDB.result.push(newUser);
            fs.writeFileSync(usersFilePath, JSON.stringify(userDB, null, 2));
            res.send(newUser);   
        }
        res.render('register',{errors: errors.mapped(), oldData: req.body});
    }

}
module.exports = userCtrl;