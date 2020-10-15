'use strict';

const routerUser = require('./usersRoute');
const register = require('./register');
const login = require('./login');
const tasks = require('./tasks');

module.exports = app => {
    app.use('/user', routerUser),
    app.use('/task',tasks),
    app.use('/register', register),
    app.use('/login', login)
};