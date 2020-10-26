import React, { useContext } from 'react'
import { Context as TaskContext } from '../context/TaskContext'
import TaskService from '../services/userTasks';

const AddTask = () => {

    const {newTask,handleTaskInput,addTaskSuccess} = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        TaskService.createTask(newTask)
        .then(res=>{
            console.log(res);
            addTaskSuccess(newTask);
        })
        .catch(err=>{
            console.log(err);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='task'></label>
            <input type='text' name='task' placeholder='Add your task' onChange={handleTaskInput} value={newTask.task}/>
            <button type='submit'>Ajouter</button>
        </form>
    )
}

export default AddTask
