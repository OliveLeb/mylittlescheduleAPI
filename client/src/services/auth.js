import http from '../http.common';


const login = (data) => {
    return http.post('/login',data);
};

const getUserData = () => {
    return http.get('/users/loggedUser');
}

const register = (data) => {
    return http.post('/register',data);
};

const DataService = {login,getUserData, register};
export default DataService;