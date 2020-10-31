const fetch = (dispatch) => {
    return (res) => {
        dispatch({
            type:'FETCH',
            payload: res.data.map(user => {
                return {
                    id: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    is_admin: user.is_admin
                };
            })
        });
    };
};
const loading = (dispatch) => {
    return () => {
        dispatch({
            type: 'FETCHING'
        })
    }
}

const fetchError = (dispatch) => {
    return () => {
        dispatch({
            type: 'FETCH_ERROR'
        })
    }
}
const actions = { fetch, loading, fetchError };
export default actions;