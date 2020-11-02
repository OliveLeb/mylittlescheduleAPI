'use strict';

const db = require('../db');

module.exports = {

    getLoggedUserTasks: async (req,res) => {

        try {
            const user = req.user;
            const { rows } = await db.query(`SELECT id,user_id,task, is_done, day, hour, created_at, updated_at 
            FROM tasks WHERE user_id=$1 ORDER BY id ASC`,[user.id]);
            res.send(rows);
        }
        catch(err) {
            console.log(err.message);
        };

    },

    createTask: async (req,res) => {

        try {
            const task = req.task;
            const user = req.user;
            const date = moment().format('YYYY-MM-D H:mm:ss');

            await db.query(`INSERT INTO tasks(user_id, task, is_done, day, hour, created_at, updated_at)
            VALUES ('${user.id}',$1,'${task.is_done}',NULLIF(${task.day},null)::date,NULLIF(${task.hour},null)::time,'${date}','${date}')`,[task.task]);
            
            res.send('Task added successfully !');
        }
        catch(err) {
            console.log(err.message);
        };

    },

    updateTask: async (req,res) => {

        try {
            const id_task = req.params.id;
            const task = req.task;
            const user = req.user;
            const date = moment().format('YYYY-MM-D H:mm:ss');

            await db.query(`UPDATE tasks SET is_done='${task.is_done}',updated_at='${date}' WHERE id=${id_task} AND user_id=${user.id}`);
            res.send('Task updated successfully !');
        }
        catch(err) {
            console.log(err);
        };

    },

    deleteOneTask: async (req,res) => {

        try {
            const id_task = req.params.id;
            const user = req.user;

            const {rows} = await db.query(`DELETE FROM tasks WHERE id='${id_task}' AND user_id='${user.id}' RETURNING id`);
            res.send({message:'Task deleted.',idDeleted:rows});
        }
        catch(err) {
            console.log(err.message);
        };

    },

    deleteTasksDone: async (req,res) => {

        try {
            const user = req.user;
            const {rows} = await db.query(`DELETE FROM tasks WHERE is_done = TRUE AND user_id='${user.id}' RETURNING id`);
            res.send({message:'Task deleted.',idDeleted:rows});
        }
        catch(err) {
            console.log(err.message);
        };

    }



};