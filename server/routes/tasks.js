'use strict';

//const Router = require('express-promise-router');
const moment = require('moment');
const db = require('../db');
const validateTask = require('../schema/tasks');
const verifyToken = require('../middleware/authorization');
const express = require('express');
const router = express.Router();

//const router = new Router();


router.use(verifyToken);

router.get('/', async (req, res) => {

    const { rows } = await db.query(`SELECT * from tasks`);
    res.send(rows);

})

router.get('/mytasks', async (req, res) => {

    const user = req.user;
    const { rows } = await db.query(`SELECT id,user_id,task, is_done, day, hour, created_at, updated_at FROM tasks WHERE user_id=${user.id}`);
    res.send(rows);
})

router.post('/mytasks',validateTask ,async (req, res) => {

    const task = req.task;
    const user = req.user;
    const date = moment().format('YYYY-MM-D H:mm:ss');

    await db.query(`INSERT INTO tasks(user_id, task, is_done, day, hour, created_at, updated_at)
    VALUES ('${user.id}','${task.task}','${task.is_done}',NULLIF(${task.day},null)::date,NULLIF(${task.hour},null)::time,'${date}','${date}')`);
    
    res.send('Task added successfully !');
})

router.delete('/mytasks/:id', async (req,res) => {

    const id_task = req.params.id;
    const user = req.user;

    await db.query(`DELETE FROM tasks WHERE id='${id_task}' AND user_id='${user.id}'`);

    res.send('Task deleted.');
})

module.exports = router;