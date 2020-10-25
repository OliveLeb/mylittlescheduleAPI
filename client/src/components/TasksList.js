import React, { useContext } from 'react';
import { Context as TaskContext} from '../context/TaskContext';

const TasksList = () => {

    const {tasks} = useContext(TaskContext);


    return (
        <section>
            <ul>
                {
                    tasks.map(task => (
                        <li key={task.id}>{task.task}</li>
                    ))
                }
            </ul>
        </section>
    )
};

export default TasksList;
