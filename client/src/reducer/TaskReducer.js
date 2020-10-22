export const initialState = {
    task: {
        user_id:'',
        task:'',
        is_done:false,
        day:null,
        hour:null
    },
    tasks: [],
    hasError: false
}

const TaskReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_TASK' :
            return {
                ...state,
                task: {
                    ...state.task,
                    ...action
                }
            };
        case 'FETCH_TASKS_SUCCESS' :
            return {
                ...state,
                tasks: [...state.tasks,...action.payload],
                hasError: false
            };
        case 'HAS_ERROR' : 
            return {
                ...state,
                hasError:true
            };
        default :
            return {
                state
            };
    };
};

export default TaskReducer;