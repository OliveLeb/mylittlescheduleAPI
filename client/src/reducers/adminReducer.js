export const initialState = {
    users: [],
    isLoading: false,
    hasError: false,
};

const adminReducer = (state,action) => {
    switch(action.type) {
        case 'FETCHING':
            return {
                ...initialState,
                isLoading: true
            };
        case 'FETCH':
            return {
                ...initialState,
                users: [...state.users,...action.payload]
            };
        case 'FETCH_ERROR':
            return {
                ...initialState,
                hasError: true
            };
        default :
        return state;
    }
};

export default adminReducer;