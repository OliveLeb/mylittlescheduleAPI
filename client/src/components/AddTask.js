import React, { useContext } from 'react'
import { Context as TaskContext } from '../context/TaskContext'

const AddTask = () => {

    const {newTask,handleTaskInput} = useContext(TaskContext);

    return (
        <form>
            <label htmlFor='task'></label>
            <input type='text' name='task' placeholder='Add your task' onChange={handleTaskInput} value={newTask.task}/>
            <button type='submit'>Ajouter</button>
        </form>
    )
}

export default AddTask
