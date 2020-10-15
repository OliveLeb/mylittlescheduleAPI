'use strict';

const Router = require('express-promise-router');
const moment = require('moment');
const db = require('../db');
const verifyToken = require('../middleware/authorization');

const routerUser = new Router();

routerUser.get('/', verifyToken,async (req,res)=> {
    const {rows} = await db.query('SELECT * FROM users ORDER BY id ASC');
    res.send(rows);
});

routerUser.put('/:id', async (req,res) => {
    const id = req.params.id;
    const body = req.body;
    const date = moment().format('YYYY-MM-D H:mm:ss');

    await db.query(`UPDATE users SET firstname='${body.firstname}', lastname='${body.lastname}',
     email='${body.email}', password='${body.password}',picture='${body.picture}',is_admin='${body.is_admin}',updated_at='${date}' 
     WHERE id=${id}`);

     res.send(body);
})

module.exports = routerUser;