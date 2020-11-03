'use strict';

const moment = require('moment');
const bcrypt = require('bcrypt');
const db = require('../db');
const {createAccessToken, createRefreshToken} = require('../utils/token');
const getUserIp = require('../utils/userIp');

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

            const token = await createAccessToken(res,user);
            res.header('auth-token', token).send(token);   

        }
        catch(err) {
            console.log(err.message);
        }

    },

    login: async (req,res) => {

        try {
            const user = req.user;
            const ip = await getUserIp();
            const refreshToken = await createRefreshToken(res,user,ip);
            const accessToken = await createAccessToken(res,user);
            console.log(accessToken)
            res.status(200).header('token', accessToken)
            .cookie('refresh', refreshToken, {expires: new Date(Date.now() + 8*7*24*60*60*1000), secure:false, httpOnly:true})
            .send({
                message: 'Token created, logged in',
                user:{
                    firstname:user.firstname,
                    lastname:user.lastname,
                    email: user.email,
                    picture: user.picture,
                    is_admin: user.is_admin
                },
                token: {
                    expiresIn : 60*60*1000
                }
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

    },

    refreshToken: async (req,res) => {

        try {
            const refreshToken = req.cookies.refresh;
            if(!refreshToken) return res.status(403).json({error:'Accès refusé, token manquant.'});

            const user = req.body.user;

            const {rows} = await db.query('SELECT token fROM refresh_token WHERE token=$1 AND expires > $2',[refreshToken,Date.now()]);

            if(!rows) return res.status(401).json({ error: 'Token expired!' });

            const accessToken = await createAccessToken(res,user);
            return res.status(200).header('token', accessToken).send({
                message: 'Token created, logged in',
                user:{
                    firstname:user.firstname,
                    lastname:user.lastname,
                    email: user.email,
                    picture: user.picture,
                    is_admin: user.is_admin
                },
            });
            //res.send(rows);
        }
        catch(error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error!" });
        }
    },

    logout: async (req,res) => {

        try {
            const refreshToken = req.cookies.refresh;
            await db.query('DELETE FROM refresh_token WHERE token =$1',[refreshToken]);
        }
        catch(err) {
            console.log(err);
            return res.status(500).json({ error: "Internal Server Error!" });
        };
    }

    
}