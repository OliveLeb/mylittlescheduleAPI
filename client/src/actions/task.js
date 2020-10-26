const fetchTasks = (dispatch) => {
    return (res) => {
        dispatch({
            type:'FETCH_TASKS_SUCCESS',
            payload: res.data.map((item) => {
                return {
                    id: item.id,
                    task: item.task,
                    is_done: item.is_done,
                    day: item.day,
                    hour: item.hour,
                    created_at: item.created_at,
                    updated_at: item.updated_at,
                };                        
            }),
        });
    };
};

const reset = (dispatch) => {
    return () => {
        dispatch({
            type:'RESET_TASKS'
        });
    };
};

const handleTaskInput = (dispatch) => {
    return (e) => {
        dispatch({
            type:'INPUT_TASK',
            payload: {[e.target.name]: e.target.value}
        });
    };
};

const addTaskSuccess = (dispatch) => {
    return (newTask) => {
        dispatch({
            type:'ADD_TASK_SUCCESS',
            payload: {...newTask}
        });
    };
};

const actions = {fetchTasks,reset,handleTaskInput,addTaskSuccess};
export default actions;