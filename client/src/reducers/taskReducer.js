export const initialState = {
    newTask : {
        task:'',
        is_done:false,
        day:null,
        hour:null
    },
    tasks: [],
    hasError: false,
    isAdded: false,
    isCompletedVisible: true
}

const taskReducer = (state,action) => {
    switch(action.type) {
        case 'RESET_TASKS':
            return {
                ...state,
                tasks: [],
                isAdded: false
            };
        case 'FETCH_TASKS_SUCCESS':
            return {
                ...state,
                tasks: [...action.payload],
                hasError: false,
                isAdded:false
            };
        case 'HAS_ERROR':
            return {
                ...state,
                hasError: true
            };
        case 'INPUT_TASK':
            return {
                ...state,
                newTask : {
                    ...state.newTask,
                    ...action.payload
                }
            }
        case 'ADD_TASK_SUCCESS':
            return {
                ...state,
                newTask : {
                    task:'',
                    is_done:false,
                    day:null,
                    hour:null
                },
                hasError: false,
                isAdded: true
            };
        case 'TOGGLE_ISDONE':
            return {
                ...state,
                tasks: [...action.payload]
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: [...action.payload]
            };
        case 'TOGGLE_VISIBLE':
            return {
                ...state,
                isCompletedVisible: !state.isCompletedVisible
            }
        default:
            return state
    }
};

export default taskReducer;