import React, { useContext } from 'react'
import { Context as TaskContext} from '../../context/TaskContext'
import styles from './TasksListItem.module.css';

const TasksListItem = ({toggleIsDone, deleteTask}) => {

    const {tasks} = useContext(TaskContext);

    return (
        <ul>
            {
                tasks.map((task,index) => (
                    <li key={index} className={'d-flex justify-content-between alert ' + (task.is_done ? styles.completed : styles.notCompleted)}>
                       
                        <input type='checkbox'
                        name={task.id} onChange={()=>toggleIsDone(task)} checked={task.is_done}/>

                        <label htmlFor={task.id} className={task.is_done ? styles.complete : undefined}>{task.task}</label>
                    
                        <button type='button' className='btn btn-danger' onClick={()=>deleteTask(task.id)}>x</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default TasksListItem
