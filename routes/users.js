'use strict';

const express = require('express');
const moment = require('moment');
const db = require('../db');
const verifyScope  = require('../middleware/authorization').verifyScope;
const verifyToken = require('../middleware/authorization').verifyToken;

const router = express.Router();

router.get('/', [verifyToken,verifyScope],async (req,res)=> {

    try {
        const {rows} = await db.query('SELECT id,firstname,lastname,email,picture,is_admin FROM users ORDER BY id ASC');
        res.send(rows);
    }
    catch(err) {
        console.log(err.message);
    };
});

router.get('/loggedUser',verifyToken, async (req,res) => {

    try {
        const id = req.user.id;
        const {rows} = await db.query(`SELECT firstname,lastname,email, picture, is_admin FROM users WHERE id=$1`,[id]);
        res.send(rows);
    }
    catch(err) {
        console.log(err.message);
    };

})

router.put('/:id', async (req,res) => {

    try {
        const id = req.params.id;
        const body = req.body;
        const date = moment().format('YYYY-MM-D H:mm:ss');

        await db.query(`UPDATE users SET firstname='${body.firstname}', lastname='${body.lastname}',
        email='${body.email}', password='${body.password}',picture='${body.picture}',is_admin='${body.is_admin}',updated_at='${date}' 
        WHERE id=${id}`);

        res.send(body);
    }
    catch(err) {
        console.log(err.message);
    };
})

module.exports = router;