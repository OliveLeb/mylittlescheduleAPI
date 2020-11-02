'use strict';

const moment = require('moment');
const bcrypt = require('bcrypt');
const db = require('../db');
const createToken = require('../utils/token');

module.exports = {
    
    register: async (req,res) => {

        try {
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

            const token = await createToken(res,user);
            res.header('auth-token', token).send(token);   

        }
        catch(err) {
            console.log(err.message);
        }

    },

    login: async (req,res) => {

        try {
            const user = req.user;

            await createToken(res,user);
            res.status(200).send({
                message: 'Token created, logged in',
                user:{
                    firstname:user.firstname,
                    lastname:user.lastname,
                    email: user.email,
                    picture: user.picture,
                    is_admin: user.is_admin
                },
            });
            /*res.status(200).header('auth-token', token).cookie('auth',token,{expires: new Date(60000 + Date.now()),secure:false,httpOnly:true}).send({
                message: 'Token created, logged in',
                user:{
                    firstname:user.firstname,
                    lastname:user.lastname,
                    email: user.email,
                    picture: user.picture,
                    is_admin: user.is_admin
                },
                token: token
            });*/
        }
        catch(err){
            return res.status(500).json(err.toString());
        };

    }
    
}