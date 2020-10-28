export const initialState = {
    users: []
};

const adminReducer = (state,action) => {
    switch(action.type) {

        case 'FETCH_USERS':
            return {
                ...state,
                users: [...state.users,...action.payload]
            };
        default :
        return state;
    }
};

export default adminReducer;