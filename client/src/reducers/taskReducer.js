export const initialState = {
    newTask : {
        task:'',
        is_done:false,
        day:null,
        hour:null
    },
    tasks: [],
    isLoading:false,
    hasError: false,
    isAdded: false,
    isCompletedVisible: true
}

const taskReducer = (state,action) => {
    switch(action.type) {
        case 'RESET_TASKS':
            return {
                ...initialState
            };
        case 'FETCHING':
            return {
                ...initialState,
                isLoading:true
            }
        case 'FETCH_TASKS':
            return {
                ...initialState,
                tasks: [...action.payload]
            };
        case 'FETCH_ERROR':
            return {
                ...initialState,
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
                tasks: [...state.tasks, action.payload],
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