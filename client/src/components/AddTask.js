import React, { useReducer } from 'react';
import TaskReducer,{initialState} from '../reducer/TaskReducer';

const AddTask = () => {

    const [state,dispatch] = useReducer(TaskReducer,initialState);
    const { task } = state;

    const handleChange = (e) => {
        dispatch({
            type:'ADD_TASK',
            [e.target.name] : e.target.value
        });
    };

    return (
        <form>
            <label htmlFor='task'>Ajouter une tâche</label>
            <input type='text' name='task' onChange={handleChange} value={task.task || ''} ></input>
            <button type='submit'>Ajouter</button>
            {task.task}
        </form>
    );
};

export default AddTask;
