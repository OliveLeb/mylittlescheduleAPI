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
            type:'ADD_TASK_SUCCESS'
        });
    };
};

const changeIsDone = (dispatch) => {
    return (newTasks) => {
        dispatch({
            type:'TOGGLE_ISDONE',
            payload: [...newTasks]
        })
    }
};

const deleteTaskSuccess = (dispatch) => {
    return (newTasks) => {
        dispatch({
            type:'DELETE_TASK',
            payload: newTasks
        });
    };
};

const actions = {fetchTasks,reset,handleTaskInput,addTaskSuccess,deleteTaskSuccess, changeIsDone};
export default actions;