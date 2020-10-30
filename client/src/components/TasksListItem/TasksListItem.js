import React, { useContext } from 'react';
import { Context } from '../../context/AuthContext';
import styles from './TasksListItem.module.css';

const TasksListItem = ({toggleIsDone, deleteTask,task}) => {

    const { isLogged } = useContext(Context);

    return (
      
            
                    <li className={'d-flex justify-content-between shadow p-3 mb-5 rounded ' + (task.is_done ? styles.completed : styles.notCompleted)}>
                       
                        <input type='checkbox'
                        name={task.id} onChange={()=>toggleIsDone(task)} checked={task.is_done}/>

                        <label htmlFor={task.id} className={task.is_done ? styles.complete : undefined}>{task.task}</label>
                    
                        <button type='button' className='btn btn-danger' onClick={()=>deleteTask(task.id,null,null,isLogged)}>x</button>
                    </li>
    
        
    )
}

export default TasksListItem
