import { useContext, useEffect } from 'react'
import { Context as TaskContext } from '../context/TaskContext'
import TaskService from '../services/userTasks'

const FetchTasks = (isLogged) => {

    const {fetchTasks,tasks} = useContext(TaskContext);
    
    useEffect(() => {

        const getData = async () => {

            try {
                const res = await TaskService.getTasks();
                fetchTasks(res);
            }
            catch(error) {
                console.log('error : ',error)
            };
           /* TaskService.getTasks()
            .then(res=>{
                fetchTasks(res);
            })
            .catch(err=>{
                console.log(err);
            });*/


        };

        if(isLogged && tasks.length === 0 ) getData();


    },[isLogged]);

};

export default FetchTasks
