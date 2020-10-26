import React, { useContext } from 'react'
import { Context as TaskContext } from '../context/TaskContext'
import TaskService from '../services/userTasks';

const AddTask = () => {

    const {newTask,handleTaskInput,addTaskSuccess} = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        TaskService.createTask(newTask)
        .then(res=>{
            addTaskSuccess(newTask);
        })
        .catch(err=>{
            console.log(err);
        });
    };

    return (
        <section>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
            <label htmlFor='task'></label>
            <input type='text' className='form-control' name='task' placeholder='Add your task' onChange={handleTaskInput} value={newTask.task}/>
            </div>  
            <button type='submit'>Ajouter</button>
        </form>
        </section>
    )
}

export default AddTask
