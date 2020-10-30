import React, { useContext } from 'react';
import { Context as TaskContext} from '../context/TaskContext';
import { Context as AuthContext } from '../context/AuthContext';
import TaskService from '../services/userTasks';
import TasksListItem from './TasksListItem/TasksListItem';

const TasksList = () => {

    const {tasks,isCompletedVisible,deleteTask, changeIsDone} = useContext(TaskContext);
    const { isLogged } = useContext(AuthContext);


    const toggleIsDone = (task,isLogged) => {
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
        if(isLogged) {
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
        };
    }

    return (
        <>        

        <section>
            <ul>
            {isCompletedVisible
                ? tasks.map((task,index) => (
                    <TasksListItem toggleIsDone={toggleIsDone} deleteTask={()=>deleteTask(task.id,TaskService,tasks,isLogged)} task={task} key={index} index={index}/>
                ))

                : tasks.filter(task=>task.is_done === false).map((task,index)=> (
                    <TasksListItem toggleIsDone={toggleIsDone} deleteTask={()=>deleteTask(task.id,TaskService,tasks,isLogged)} task={task} key={index} index={index}/>
                ))
            }
            </ul>   
        </section>     

        </>
    )
};

export default TasksList;
