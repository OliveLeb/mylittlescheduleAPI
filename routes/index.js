'use strict';

const users = require('./users');
const register = require('./register');
const login = require('./login');
const tasks = require('./tasks');

module.exports = app => {
    app.use('/api/users', users),
    app.use('/api/task',tasks),
    app.use('/api/register', register),
    app.use('/api/login', login)
};