const User = require('../../models/User');

const middlewareAuth = {
    userLogged: async (req, res, next) => {
        res.locals.isLogged = false;
        if (req.cookies.userEmail) {
            let userFromCookie = await User.findByField('email', req.cookies.userEmail);
            req.session.userLogged = userFromCookie;
        }
        if (req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }
        next();
    },
    isLogged: (req, res, next)=>{
        if(req.session.userLogged){
            console.log("User logged");
            return res.redirect('/users/profile');
        }
        next();
    },
    possibleLogout: (req, res, next)=>{
        if(!req.session.userLogged){
            console.log("Unable to log out because the user is not logged in");
            return res.redirect('/users/login');
        }
        next();
    },
    authAdmin: (req, res, next)=>{
        if(req.session.userLogged.role!="admin"){
            console.log("You have not administrator role");
            return res.send("You have not administrator role");
        }
        next();
    },
    authCustomer: (req, res, next) =>{
        if(req.session.userLogged.rol!="customer"){
            console.log("You have not customer role");
            return res.send("You have not customer role");
        }
        next();
    }

}


module.exports = middlewareAuth;