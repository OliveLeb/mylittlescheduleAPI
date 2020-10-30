import { useContext, useEffect } from 'react'
import { Context as TaskContext } from '../context/TaskContext'
import TaskService from '../services/userTasks'

const FetchTasks = (isLogged) => {

    const {fetchTasks,tasks,isAdded} = useContext(TaskContext);
    
    useEffect(() => {

        const getData =  () => {

            TaskService.getTasks()
            .then(res=>{
                fetchTasks(res);
            })
            .catch(err=>{
                console.log(err);
            });

        };

        if(isLogged && (tasks.length === 0 || isAdded) ) getData();

    },[isLogged,isAdded,fetchTasks,tasks.length]);

};

export default FetchTasks
