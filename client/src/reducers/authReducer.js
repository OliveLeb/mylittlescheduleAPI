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
    hasError: {
        email:false,
        password:false
    },
    errorMessage :''
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
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isLogged:false,
                hasError: {...state.hasError, ...action.payload.error},
                errorMessage: action.payload.errorMessage
            }
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
        case 'RESET_ERROR':
            return {
                ...state,
                hasError: {
                    email:false,
                    password:false
                },
                errorMessage :''
            }
        default :
            return state;    

    }
}

export default authReducer;