'use strict';

//const Router = require('express-promise-router');
const express = require('express');
const createToken = require('../utils/token');
const validateUserLogin = require('../schema/users').validateUserLogin;
const verifyCredentials = require('../utils/users').verifyCredentials;

const router = express.Router();
//const router = new Router();

// CHECK REQUEST WITH JOI THEN CHECK IF EMAIL EXISTS AND PASSWORD OK
router.post('/',[validateUserLogin,verifyCredentials], async (req,res) => {

    const user = req.user;
    
    const token = await createToken(user);

    res.header('auth-token', token).send(token);
    

});

module.exports = router;

