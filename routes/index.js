'use strict';

const routerUser = require('./usersRoute');
const register = require('./register');
const login = require('./login');

module.exports = app => {
    app.use('/user', routerUser),
    app.use('/register', register),
    app.use('/login', login)
};