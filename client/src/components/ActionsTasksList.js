import React, { useContext } from 'react';
import { Context as TaskContext } from '../context/TaskContext';
import { Context as AuthContext } from '../context/AuthContext';
import { ImBin } from 'react-icons/im';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import TaskService from '../services/userTasks';

const ActionsTasksList = () => {

    const { isLogged } = useContext(AuthContext);
    const {tasks,isCompletedVisible,deleteTask, toggleCompletedVisible} = useContext(TaskContext);


    return (
        <>
       {
        tasks.length !==0 &&
            <section>
                <p>
                    <span style={{cursor:'pointer', margin:'5px 10px'}} onClick={()=>deleteTask(null,TaskService,tasks,isLogged)}><ImBin style={{color:'red'}}/></span>
                
                    <span onClick={toggleCompletedVisible} style={{cursor:'pointer', margin:'5px 10px'}}>
                        {isCompletedVisible ? <FaEye title='Masquer les tâches complétées'/> : <FaEyeSlash title='Montrer les tâches complétées'/>}
                    </span>
                </p>
            </section> 
        }
        </>
    )
}

export default ActionsTasksList
