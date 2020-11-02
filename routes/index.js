'use strict';

const userRoute = require('./users');
const taskRoute = require('./tasks');
const authRoute = require('./auth');

module.exports = app => {
    app.use('/api/users', userRoute),
    app.use('/api/task',taskRoute),
    app.use('/api', authRoute)
};