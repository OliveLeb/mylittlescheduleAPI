'use strict';

const Router = require('express-promise-router');
const db = require('../db');
const moment = require('moment');
const bcrypt = require('bcrypt');
const createToken = require('../utils/token');
const {validateUser} = require('../schema/users');
const verifUniqueEmail = require('../utils/users');


const router = new Router();

router.post('/', async (req,res) => {

    const body = req.body;
    const date = moment().format('YYYY-MM-D H:mm:ss');

    const verifMail = await verifUniqueEmail(body);

    const verify = await validateUser(body);
        if(verify.error){
            res.status(400).send(verify.error.details[0].message);
            return ;
        }
    
    if(verifMail) {


     await bcrypt.genSalt(10)
        .then(salt => {
            bcrypt.hash(body.password, salt)
            .then(hashedPwd => {
                db.query(`INSERT INTO users(firstname, lastname, email, password, picture, created_at, updated_at, is_admin)
                VALUES ('${body.firstname}','${body.lastname}','${body.email}','${hashedPwd}','${body.picture}','${date}','${date}','${body.is_admin}')`);
            });
        });
        

        const token = await (createToken(body));
        
        res.header('auth-token', token).send(token);

        }
        else {
            res.status(400).send('Email already used.');
        };
    
});

module.exports = router;