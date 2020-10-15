'use strict';

const Router = require('express-promise-router');
const moment = require('moment');
const db = require('../db');
const validateTask = require('../schema/tasks');
const verifyToken = require('../middleware/authorization');

const router = new Router();

router.get('/', async (req, res) => {

    const { rows } = await db.query(`SELECT * from tasks`);
    res.send(rows);

})

router.get('/mytasks',verifyToken, async (req, res) => {

    const user = req.user;
    const { rows } = await db.query(`SELECT id,user_id,task, is_done, day, hour, created_at, updated_at FROM tasks WHERE user_id=${user.id}`);
    res.send(rows);
})

router.post('/mytasks',[verifyToken,validateTask] ,async (req, res) => {

    const task = req.task;
    const user = req.user;
    //console.log(task.hour, task.day);
    const date = moment().format('YYYY-MM-D H:mm:ss');

    await db.query(`INSERT INTO tasks(user_id, task, is_done, day, hour, created_at, updated_at)
    VALUES ('${user.id}','${task.task}','${task.is_done}','${task.day}','${task.hour}','${date}','${date}')`);
    
    res.send('Task added successfully !');
})

module.exports = router;