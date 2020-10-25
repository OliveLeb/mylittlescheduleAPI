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

const actions = {fetchTasks,reset};
export default actions;