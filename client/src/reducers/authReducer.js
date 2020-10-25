export const initialState = {
    user: {
        email :'',
        password: ''
    },
    isLogged: false,
    hasError: false
}

const authReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                user: {...state.user, ...action.payload}
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLogged: true
            };
        case 'LOG_OUT':
            return {
                ...state,
                user : {
                    email: '',
                    password: ''
                },
                isLogged: false
            }
        default :
            return state;    

    }
}

export default authReducer;