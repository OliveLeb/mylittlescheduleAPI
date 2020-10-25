export const initialState = {
    newTask : {
        user_id:'',
        task:'',
        is_done:false,
        day:null,
        hour:null
    },
    tasks: [],
    hasError: false
}

const taskReducer = (state,action) => {
    switch(action.type) {
        case 'RESET_TASKS':
            return {
                ...state,
                tasks: []
            };
        case 'FETCH_TASKS_SUCCESS':
            return {
                ...state,
                tasks: [...state.tasks,...action.payload],
                hasError: false
            };
        case 'HAS_ERROR':
            return {
                ...state,
                hasError: true
            };
        default:
            return state
    }
};

export default taskReducer;