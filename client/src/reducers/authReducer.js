export const initialState = {
    user: {
        email :'',
        password: ''
    },
    loggedUser: {
        firstname: '',
        lastname: '',
        email: '',
        picture: '',
        is_admin:''
    },
    newUser: {
        firstname: '',
        lastname: '',
        email: '',
        picture: 'null',
        password: '',
        repeat_password: '',
        is_admin:false
    },
    newUserError: {
        firstnameError:'',
        lastnameError:'',
        emailError:'',
        pictureError:'',
        passwordError:'',
        repeat_passwordError:''
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
                user:{email :'',password: ''},
                isLogged: true
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isLogged:false,
                hasError: {...state.hasError, ...action.payload.error},
                errorMessage: action.payload.errorMessage
            };
        case 'ADD_NEW_USER':
            return {
                ...state,
                newUser: {...state.newUser, ...action.payload}
            };
        case 'SUBMIT_REGISTER':
            return {
                ...state,
                newUser:{
                    firstname: '',
                    lastname: '',
                    email: '',
                    picture: 'null',
                    password: '',
                    repeat_password: '',
                    is_admin:false
                }
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
            };
        case 'RESET_ERROR':
            return {
                ...state,
                hasError: {
                    email:false,
                    password:false
                },
                errorMessage :''
            };
        case 'ERROR_FORM':
            return {
                ...state,
                newUserError: {...state.newUserError, ...action.payload}
            };
        case 'RESET_ERROR_FORM':
            return {
                ...state,
                newUserError: {
                    firstnameError:'',
                    lastnameError:'',
                    emailError:'',
                    pictureError:'',
                    passwordError:'',
                    repeat_passwordError:''
                },
                newUser: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    picture: 'null',
                    password: '',
                    repeat_password: '',
                    is_admin:false
                }
            };
        default :
            return state;    

    }
}

export default authReducer;