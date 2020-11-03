const connect = (dispatch) => {
    return (data,token,expires) =>{
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
                loggedUser:{...data},
                token: {value:token,expiresIn:expires},                
            }
        });
    }
};

const handleInput = (dispatch) => {
    return (e) => {
        dispatch({
            type:'CHANGE_INPUT',
            payload:{[e.target.name]: e.target.value},
        });
    };
    
};

const handleSubmit = (dispatch) => {
    return (e) => {
        e.preventDefault();
        dispatch({
            type: 'LOGIN_SUCCESS'
        });        
    };
};

const disconnect = (dispatch) => {
    return (e) => {
        e.preventDefault();
        localStorage.removeItem('x-access-token');
        dispatch({
            type:'LOG_OUT'
        });
    };
};
const resetError = (dispatch)=> {
    return () => {
        dispatch({type:'RESET_ERROR'});
    };
};

const handleErrorLogin = (dispatch) => {
    return (errType,message) => {
        dispatch({
            type:'LOGIN_FAILURE',
            payload: {
                errorMessage:message,
                error:{[errType]:true}
            }                      
        });
    };
};

const handleRegisterInput = (dispatch) => {
    return (e) => {
        dispatch({
            type:'ADD_NEW_USER',
            payload:{
                newUser : {[e.target.name]:e.target.value},
                newUserError : {[e.target.name]:''}
            }
        });
    };
};

const handleErrorRegister = (dispatch) => {
    return (errors) => {
        dispatch({
            type:'ERROR_FORM',
            payload:{...errors}
        });
    };
};

const resetErrorForm = (dispatch) => {
    return () => {
        dispatch({type:'RESET_ERROR_FORM'});
    };
};


const actions = { connect, handleInput, handleSubmit, disconnect, handleErrorLogin, resetError, handleRegisterInput, handleErrorRegister, resetErrorForm}

export default actions;