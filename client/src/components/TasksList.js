import React, { useContext, useState } from 'react';
import { Context as TaskContext} from '../context/TaskContext';
import TaskService from '../services/userTasks';
import AddTask from './AddTask';
import TasksListItem from './TasksListItem/TasksListItem';
import { ImBin } from 'react-icons/im';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const TasksList = () => {

    const [hideTaskDone, setHideTaskDone] = useState(false);

    const {tasks,deleteTaskSuccess, changeIsDone} = useContext(TaskContext);

    const deleteTask = async (id) => {
        try {
            const res = isNaN(id) ? await TaskService.deleteTasksDone() : await TaskService.deleteTask(id);
            const remainingResult = tasks.filter((result) => !res.data.idDeleted.some(data => data.id === result.id));
            deleteTaskSuccess(remainingResult);
        }
        catch(error) {
            console.log(error);
        }
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
        .then(res => {
        })
        .catch(err => {
            console.log(err);
        });
    }

    const hideTasksDone = () => {
        setHideTaskDone(prevState => !prevState);
    }

    return (
        <>
        <section>
                {tasks.length !==0 ? <h4>Vos tâches du jour</h4> : <h4>Ajouter des tâches</h4>}
        </section>


        {tasks.length !==0 &&
        <section>
            <p>
                <span style={{cursor:'pointer', margin:'5px 10px'}} onClick={deleteTask}><ImBin style={{color:'red'}}/></span>
            
            <span onClick={hideTasksDone} style={{cursor:'pointer', margin:'5px 10px'}}>
                {hideTaskDone ? <FaEyeSlash title='Montrer les tâches complétées'/> : <FaEye title='Masquer les tâches complétées'/>}
            </span>
            </p>
        </section> }       

        <section>
            <ul>
            {hideTaskDone
                ?
                tasks.filter(task=>task.is_done === false).map((task,index)=> (
                    <TasksListItem toggleIsDone={toggleIsDone} deleteTask={deleteTask} task={task} key={index}/>
                ))

                : tasks.map((task,index) => (
                    <TasksListItem toggleIsDone={toggleIsDone} deleteTask={deleteTask} task={task} key={index}/>
                ))
            }
            </ul>   
        </section>     
        
        <section>
            <AddTask />
        </section>
        </>
    )
};

export default TasksList;
