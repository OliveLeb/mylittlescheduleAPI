'use strict';

const moment = require('moment');
const db = require('../db');
const validateTask = require('../schema/tasks');
const verify = require('../middleware/authorization');
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/Task.Controller');



router.get('/', async (req, res) => {

    try {
        const { rows } = await db.query(`SELECT * from tasks`);
    res.send(rows);
    }
    catch(err){
        console.log(err.message)
    };

});

router.use(verify.token);

router.get('/mytasks', TaskController.getLoggedUserTasks);

router.post('/mytasks',validateTask, TaskController.createTask);

router.put('/mytasks/:id',validateTask, TaskController.updateTask);

router.delete('/mytasks/completed', TaskController.deleteTasksDone);

router.delete('/mytasks/:id', TaskController.deleteOneTask);


module.exports = router;