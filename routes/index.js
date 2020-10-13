const routerUser = require('./usersRoute');

module.exports = app => {
    app.use('/user', routerUser)
};