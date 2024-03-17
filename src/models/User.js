const fs = require('node:fs');
const path = require('node:path');
const crypto = require('crypto');
const usersFilePath = path.join(__dirname, '../data/users.json');
const bcrypt = require('bcryptjs');

const User = {
    fileName: usersFilePath,
    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
    findAll: function() {
        return this.getData();
    },
    findByPk: function(id) {
        let allUsers = this.findAll().result;
        return allUsers.find(oneUser => oneUser.id === id);
    },
    findByField: function(field, text) {
        let allUsers = this.findAll().result;
        return allUsers.find(oneUser => oneUser[field] === text);
    },
    create: function(userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: crypto.randomUUID(),
            ...userData
        };
        allUsers.result.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },
    delete: function(id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.result.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    },
    update: function(id, user){
        let allUsers = this.findAll();
        let userFound;
        allUsers.result.forEach( u => {
            if(u.id == id){
                u.firstName = user.firstName;
                u.lastName= user.lastName;
                u.birthdate = user.birthDate;
                u.phone = user.phone;
                u.password = user.password || u.password;
                u.photo= user.photo || u.photo;
                u.email = user.email;
                userFound = u;
            }
        });
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return userFound;
    },
    updatePassword : function(id, password){
        let allUsers =  this.findAll();
        let userFound = null;
        allUsers.result.forEach( u => {
            if(u.id == id){
                u.password = bcrypt.hashSync(password, 12);
                userFound = u;
            }
        });
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return userFound;
    }

};

module.exports = User;