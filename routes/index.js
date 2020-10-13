const routerUser = require('./usersRoute');
const register = require('./register');

module.exports = app => {
    app.use('/user', routerUser),
    app.use('/register', register)
};