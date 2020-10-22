import React from 'react';

const TasksList = ({tasks}) => {

    return (
        <div>
            lol
            <ul>
                {tasks.map(task =>( 
                        <li key={task.id}>{task.task}</li>
                    ))}
            </ul>
        </div>
    );


};

export default TasksList;
