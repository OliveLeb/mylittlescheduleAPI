'use strict';

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const db = require('../db');
dotenv.config();

const createAccessToken = async (res,user) => {
    
    try {
        const credentials = {id:user.id,admin:user.is_admin};
        const accessToken = jwt.sign(credentials,process.env.SECRET_TOKEN, { expiresIn: '2h'});
        return accessToken;
    }
    catch(err) {
        console.log(err)
        return ;
    }
   
};

const createRefreshToken = async (res,user,ip) => {

    try {
        const credentials = {id:user.id,admin:user.is_admin};
        const refreshToken = jwt.sign(credentials,process.env.REFRESH_TOKEN, {expiresIn: '8w' });
        const expires = new Date(Date.now() + 8*7*24*60*60*1000);
        await db.query('INSERT INTO refresh_token(user_id,token,expires,createdByIp) VALUES($1,$2,$3,$4)',[user.id,refreshToken,expires,ip])
        return refreshToken;
    }
    catch(err) {
        console.log(err);
        return ;
    }
    
};

module.exports = {createAccessToken, createRefreshToken};