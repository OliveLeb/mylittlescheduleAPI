const connect = (dispatch) => {
    return (data) =>{
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {...data}
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

const handleError = (dispatch) => {
    return (errType,message) => {
        dispatch({
            type:'LOGIN_FAILURE',
            payload: {
                errorMessage:message,
                error:{[errType]:true}
            }                      
        });
        //console.log(errType)
    };
};

const actions = { connect, handleInput, handleSubmit, disconnect, handleError, resetError}

export default actions;