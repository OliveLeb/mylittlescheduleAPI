'use strict';

const express = require('express');
const db = require('../db');
const moment = require('moment');
const bcrypt = require('bcrypt');
const createToken = require('../utils/token');
const validateUserRegister = require('../schema/users').validateUserRegister;
const verifyUniqueEmail = require('../utils/users').verifyUniqueEmail;

const router = express.Router();

router.post('/', [validateUserRegister,verifyUniqueEmail], async (req,res) => {

    const user = req.user;
    const date = moment().format('YYYY-MM-D H:mm:ss');
    
     await bcrypt.genSalt(10)
        .then(salt => {
            bcrypt.hash(user.password, salt)
            .then(hashedPwd => {
                db.query(`INSERT INTO users(firstname, lastname, email, password, picture, created_at, updated_at, is_admin)
                VALUES ($1,$2,'${user.email}','${hashedPwd}','${user.picture}','${date}','${date}','${user.is_admin}')`,[user.firstname,user.lastname]);
            });
        });     

        const token = await createToken(user);

        res.header('auth-token', token).send(token);

});

module.exports = router;