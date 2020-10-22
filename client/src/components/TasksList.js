import React, { useEffect, useState } from 'react';
import tasksService from '../services/userTasks';

const TasksList = () => {

    const [tasks,setTasks] = useState([]);

    //const Tasks = () => {

        useEffect(()=>{
           tasksService.getTasks().then(res=>{
               setTasks(...tasks,res.data.map(task=>task));
           })
           .catch(error=>{
               console.log(error);
           });
        },[]);
  //  };

    return (
        <div>
            <ul>
                {tasks.map(task =>( 
                        <li key={task.id}>{task.task}</li>
                    ))}
                {tasks.task}
            </ul>
        </div>
    );


};

export default TasksList;
