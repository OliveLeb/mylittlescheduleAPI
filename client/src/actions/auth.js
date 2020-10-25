const connect = (dispatch) => {
    return () =>{
        dispatch({
            type: 'LOGIN_SUCCESS'
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

const actions = { connect, handleInput, handleSubmit, disconnect }

export default actions;