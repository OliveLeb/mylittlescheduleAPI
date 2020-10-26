'use strict';

const bcrypt = require('bcrypt');
const db = require('../db');


const verifyUniqueEmail = async (req,res,next) => {

    const user = req.user;

    const { rows } = await db.query(`SELECT id FROM users WHERE email='${user.email}'`);

    if(rows.length !== 0) return res.status(400).send('Email already used.');

    return next();
};

const verifyCredentials = async (req,res,next) => {

    const user = req.user;

    const { rows } = await db.query(`SELECT id,firstname,lastname,email,picture,password FROM users WHERE email='${user.email}'`);
    if(rows.length ===  0) return res.status(400).send('No account with this mail found.');

   
    const validPassword = await bcrypt.compare(user.password,rows[0].password);
    if(!validPassword) return res.status(400).send('Invalid password.');

    req.user = rows[0];
    
    return next();
}

module.exports = {verifyCredentials:verifyCredentials,verifyUniqueEmail:verifyUniqueEmail};