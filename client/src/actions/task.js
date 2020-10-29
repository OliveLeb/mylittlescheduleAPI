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
            payload: newTask
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

const deleteTask = (dispatch) => {
    return async (id, TaskService,tasks) => {
         try {
            const res = isNaN(id) ? await TaskService.deleteTasksDone() : await TaskService.deleteTask(id);
            const remainingResult = tasks.filter((result) => !res.data.idDeleted.some(data => data.id === result.id));
            dispatch({
            type:'DELETE_TASK',
            payload: remainingResult
        });
        }
        catch(error) {
            console.log(error);
        }       
    };
};

const toggleCompletedVisible = (dispatch) => {
    return () => {
        dispatch({type:'TOGGLE_VISIBLE'})
    };
};

const actions = {fetchTasks,reset,handleTaskInput,addTaskSuccess,deleteTask, changeIsDone, toggleCompletedVisible};
export default actions;