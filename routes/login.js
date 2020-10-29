'use strict';

const express = require('express');
const createToken = require('../utils/token');
const validateUserLogin = require('../schema/users').validateUserLogin;
const verifyCredentials = require('../utils/users').verifyCredentials;

const router = express.Router();

// CHECK REQUEST WITH JOI THEN CHECK IF EMAIL EXISTS AND PASSWORD OK
router.post('/',[validateUserLogin,verifyCredentials], async (req,res) => {

    try {
        const user = req.user;

        const token = await createToken(user);

        res.status(200).header('auth-token', token).send({
            message: 'Token created, logged in',
            user:{
                firstname:user.firstname,
                lastname:user.lastname,
                email: user.email,
                picture: user.picture,
                is_admin: user.is_admin
            },
            token: token
        });
    }
    catch(err){
        console.log(err.message)
    };    

});

module.exports = router;

