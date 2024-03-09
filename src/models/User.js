const fs = require('node:fs');
const path = require('node:path');
const crypto = require('crypto');
const usersFilePath = path.join(__dirname, '../data/users.json');

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
    }

};

module.exports = User;