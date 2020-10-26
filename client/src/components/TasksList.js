import React, { useContext } from 'react';
import { Context as TaskContext} from '../context/TaskContext';
import TaskService from '../services/userTasks';

const TasksList = () => {

    const {tasks,deleteTaskSuccess, changeIsDone} = useContext(TaskContext);

    const deleteTask = (id) => {
        TaskService.deleteTask(id)
        .then(res=>{
            const remainingResult = tasks.filter((result) => result.id !== id);
            deleteTaskSuccess(remainingResult);
        })
        .catch(err=>{
            console.log(err);
        });
    };

    const toggleIsDone = (task) => {
        const newTasks = tasks.map(item => {
            if(item === task) {
                return{
                    ...item,
                    is_done: !item.is_done
                };
            }
            return item;
        })
        changeIsDone(newTasks);
        const taskToAdd = newTasks.find(item=>item.id === task.id);
        const data = {
            day:taskToAdd.day,
            time:taskToAdd.time,
            is_done: taskToAdd.is_done,
            task: taskToAdd.task
        }
        TaskService.updateTask(task.id,data)
        .then(res=>{
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <section>
            <ul>
                {
                    tasks.map(task => (
                        <li key={task.id} className='d-flex justify-content-between alert'>
                            <input type='checkbox' className="form-check-input" name={task.id} onChange={()=>toggleIsDone(task)} checked={task.is_done}/>
                            <label htmlFor={task.id} >{task.task}</label>
                           <button type='button' className='btn btn-danger' onClick={()=>deleteTask(task)}>x</button>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
};

export default TasksList;
