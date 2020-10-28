const fetchUsers = (dispatch) => {
    return (res) => {
        dispatch({
            type:'FETCH_USERS',
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

const actions = { fetchUsers };
export default actions;