import React, { useContext } from 'react';
import { Context as TaskContext} from '../context/TaskContext';
import TaskService from '../services/userTasks';

const TasksList = () => {

    const {tasks,deleteTaskSuccess} = useContext(TaskContext);

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

    return (
        <section>
            <ul>
                {
                    tasks.map(task => (
                        <li key={task.id}>
                            <input type='checkbox' name={task.id} />
                            <label htmlFor={task.id} >{task.task}</label>
                            <button type='button' onClick={()=>deleteTask(task.id)}>x</button>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
};

export default TasksList;
