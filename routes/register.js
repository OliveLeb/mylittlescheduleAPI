'use strict';

const Router = require('express-promise-router');
const db = require('../db');
const moment = require('moment');
const bcrypt = require('bcrypt');
const createToken = require('../utils/token');
const validateUserRegister = require('../schema/users').validateUserRegister;
const verifyUniqueEmail = require('../utils/users').verifyUniqueEmail;


const router = new Router();

router.post('/', [validateUserRegister,verifyUniqueEmail], async (req,res) => {

    const user = req.user;
    const date = moment().format('YYYY-MM-D H:mm:ss');
    
     await bcrypt.genSalt(10)
        .then(salt => {
            bcrypt.hash(user.password, salt)
            .then(hashedPwd => {
                db.query(`INSERT INTO users(firstname, lastname, email, password, picture, created_at, updated_at, is_admin)
                VALUES ('${user.firstname}','${user.lastname}','${user.email}','${hashedPwd}','${user.picture}','${date}','${date}','${user.is_admin}')`);
            });
        });     

        const token = await createToken(user);

        res.header('auth-token', token).send(token);

});

module.exports = router;