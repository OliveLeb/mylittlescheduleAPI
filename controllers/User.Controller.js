'use strict';

const moment = require('moment');
const db = require('../db');

module.exports = {

    getAllUser: async (req,res) => {

        try {
            const {rows} = await db.query('SELECT id,firstname,lastname,email,picture,is_admin FROM users ORDER BY id ASC');
            res.send(rows);
        }
        catch(err) {
            console.log(err.message);
        };

    },

    getLoggedUser: async (req,res) => {

        try {
            const id = req.user.id;
            const {rows} = await db.query(`SELECT firstname,lastname,email, picture, is_admin FROM users WHERE id=$1`,[id]);
            res.send(rows);
        }
        catch(err) {
            console.log(err.message);
        };

    },

    updateUser: async (req,res) => {

         try {
            const id = req.params.id;
            const body = req.body;
            const date = moment().format('YYYY-MM-D H:mm:ss');

            await db.query(`UPDATE users SET firstname=$1, lastname=$2,
            email='${body.email}', password='${body.password}',picture='${body.picture}',is_admin='${body.is_admin}',updated_at='${date}' 
            WHERE id=${id}`,[body.firstname,body.lastname]);

            res.send(body);
        }
        catch(err) {
            console.log(err.message);
        };

    }

};