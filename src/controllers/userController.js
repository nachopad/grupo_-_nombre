const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const User = require('../services/User');

const userCtrl = {
    login: (req, res) => {
        res.render('login');
    },
    getFormRegister: (req, res) => {
        res.render('register');
    },
    processLogin: async (req, res) => {
        const errors = validationResult(req);
        
        let userToLogin = await User.findByField('email', req.body.email);
        return userToLogin && bcrypt.compareSync(req.body.password, userToLogin.dataValues.password)
        ? (delete userToLogin.dataValues.password, req.session.userLogged = userToLogin, req.body.remember && res.cookie('userEmail', req.body.email, { maxAge: 60000 }), res.redirect('/'))
        : res.render('login', { errors: errors.mapped(), oldData: req.body } );
    },
    register: (req, res) => {
        const errors = validationResult(req);

        if(errors.isEmpty()){
            User.create(req);
            return res.redirect('/users/login');
        };

        return res.render('register',{errors: errors.mapped(), oldData: req.body});
    },
    profile: (req, res) => {
        return res.render('userProfile', { user: req.session.userLogged });
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },
    update: async (req, res) => {
        const errors = validationResult(req);

        if(errors.isEmpty()){
            console.log(req.file);
            await User.update(req.params.id, req.body, req.file);
            let userUpdated = await User.findByPk(req.params.id);
            delete userUpdated.dataValues.password;
            req.session.userLogged = userUpdated;  
        }

        return res.render('userProfile', {errors: errors.mapped(), user: req.session.userLogged});
    },
    changePassword : (req, res)=>{
        const errors = validationResult(req);

        if(errors.isEmpty()){
            User.updatePassword(req.params.id, req.body.newPassword);
        };

        return res.render('userProfile', {errors: errors.mapped(), user: req.session.userLogged});
    }
}

module.exports = userCtrl;