export const initialState = {
    user: {
        email :'',
        password: ''
    },
    loggedUser: {
        firstname: '',
        lastname: '',
        email: '',
        picture: ''
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
                loggedUser:{...state.loggedUser,...action.payload},
                isLogged: true
            };
        case 'LOG_OUT':
            return {
                ...state,
                user : {
                    email: '',
                    password: ''
                },
                loggedUser: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    picture: ''
                },
                isLogged: false
            }
        default :
            return state;    

    }
}

export default authReducer;