'use strict';

const bcrypt = require('bcrypt');
const Router = require('express-promise-router');
const db = require('../db');
const createToken = require('../utils/token');
const validateUserLogin = require('../schema/users').validateUserLogin;

const router = new Router();


router.post('/', async (req,res) => {


    const body = req.body;
 

    // verify with Joi
    const verify = await validateUserLogin(body);
    if(verify.error){
            res.status(400).send(verify.error.details[0].message);
            return ;
        }

   
    const { rows } = await db.query(`SELECT id,password FROM users WHERE email='${body.email}'`);
    if(rows.length ===  0) return res.status(400).send('No account with this mail found.');

   
    const validPassword = await bcrypt.compare(body.password,rows[0].password);
    if(!validPassword) return res.status(400).send('Invalid password.');
    
    const token = createToken(body);

    res.header('auth-token', token).send(token);
    

});

module.exports = router;

