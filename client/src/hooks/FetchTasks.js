import { useContext, useEffect } from 'react'
import { Context as TaskContext } from '../context/TaskContext'
import TaskService from '../services/userTasks'

const FetchTasks = (isLogged) => {

    const {fetchTasks} = useContext(TaskContext);
    
    useEffect(() => {

        const getData = () => {
/*
            try {
                //await reset();
                //console.log('try');
                const res = await TaskService.getTasks();
                //console.log(res);
                fetchTasks(res);
            }
            catch(error) {
                console.log('error',error)
            };*/
            TaskService.getTasks()
            .then(res=>{
                fetchTasks(res);
            })
            .catch(err=>{
                console.log(err);
            });


        };

        if(isLogged) getData();


    },[isLogged]);

};

export default FetchTasks
