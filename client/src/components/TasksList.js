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

    const hideTasksDone = () => {
        setHideTaskDone(prevState => !prevState);
    }

    return (
        <>
        <section>
                {tasks.length !==0 ? <h4>Vos tâches du jour</h4> : <h4>Ajouter des tâches</h4>}
        </section>

        <section>
            <p>
                <ImBin style={{color:'red'}}/>
                Supprimer tâches complétées
            </p>
            <div onClick={hideTasksDone}>
                {hideTaskDone ? <FaEyeSlash title='Montrer les tâches complétées'/> : <FaEye title='Masquer les tâches complétées'/>}
            </div>
        </section>        

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
