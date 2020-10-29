import React, { useContext } from 'react'
import { Context as TaskContext } from '../context/TaskContext'
import { Context as AuthContext } from '../context/AuthContext';
import TaskService from '../services/userTasks';

const AddTask = () => {

    const {newTask,handleTaskInput,addTaskSuccess} = useContext(TaskContext);
    const { isLogged } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isLogged){
            TaskService.createTask(newTask)
            .then(res=>{
                addTaskSuccess(newTask);
            })
            .catch(err=>{
                console.log(err);
            });
        }else{
            addTaskSuccess(newTask);
        }
        
    };

    
    return (
        <form onSubmit={handleSubmit} className='text-center'>
            <div className='form-group'>
            <label htmlFor='task'></label>
            <input type='text' className='form-control' name='task' placeholder='Add your task' onChange={handleTaskInput} value={newTask.task}/>
            </div>  
            <button type='submit'>Ajouter</button>
        </form>
    )
}

export default AddTask
