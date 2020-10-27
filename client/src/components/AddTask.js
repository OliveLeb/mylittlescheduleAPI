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

    const buttonStyle = {
        color:'#fff',
        background:'linear-gradient(90deg,rgba(252, 176, 69, 1) 0%,rgba(253, 29, 29, 1) 100%)',
        padding:'0.4rem 1rem',
        borderRadius:'5px',
        border:'1px solid #b01010',
        fontSize:'1.2rem'
    }

    return (
        <form onSubmit={handleSubmit} className='text-center'>
            <div className='form-group'>
            <label htmlFor='task'></label>
            <input type='text' className='form-control' name='task' placeholder='Add your task' onChange={handleTaskInput} value={newTask.task}/>
            </div>  
            <button type='submit' style={buttonStyle}>Ajouter</button>
        </form>
    )
}

export default AddTask
