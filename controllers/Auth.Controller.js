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
            res.status(200).header('x-access-token', accessToken)
            .cookie('refresh', refreshToken, {expires: new Date(Date.now() + 8*7*24*60*60*1000), secure:false, httpOnly:true, sameSite:true})
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
                    expiresIn : 60*1000
                }
            });
        }
        catch(err){
            return res.status(500).json(err.toString());
        };

    },

    refreshToken: async (req,res) => {

        try {
            const refreshToken = req.cookie;
            const id = req.userId;
            const date = moment().format('YYYY-MM-D H:mm:ss.SSS');
            if(!refreshToken) return res.status(403).json({error:'Accès refusé, token manquant.'});

            const user = await db.query('SELECT id,firstname,lastname,email,picture,is_admin FROM users WHERE id=$1',[id]);
            
            const {rows} = await db.query('SELECT token fROM refresh_token WHERE token=$1 AND expires > $2',[refreshToken,date]);

            if(!rows) return res.status(401).json({ error: 'Token expired!' });

            const accessToken = await createAccessToken(res,user.rows[0]);
            return res.status(200).header('x-access-token', accessToken).send({
                message: 'Token created, logged in',
                user:{
                    firstname:user.firstname,
                    lastname:user.lastname,
                    email: user.email,
                    picture: user.picture,
                    is_admin: user.is_admin
                },
                token: {
                    expiresIn : 60*1000
                }
            });
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
            res.clearCookie('refresh').send('Logged out successfully.');
        }
        catch(err) {
            console.log(err);
            return res.status(500).json({ error: "Internal Server Error!" });
        };
    }

    
}