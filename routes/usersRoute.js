'use strict';

const Router = require('express-promise-router');
const db = require('../db');

const routerUser = new Router();

routerUser.get('/', async (req,res)=>{
    const {rows} = await db.query('SELECT * FROM users');
    res.send(rows);
});

module.exports = routerUser;