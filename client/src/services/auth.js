import http from '../http.common';


const login = (data) => {
    return http.post('/login',data);
};

const register = (data) => {
    return http.post('/register',data);
};

const refreshToken = () => {
    return http.post('/refresh-token');
};

const logout = () => {
    return http.delete('/logout');
}

const getUserData = () => {
    return http.get('/users/loggedUser');
};

const DataService = {login,getUserData, register, refreshToken,logout};
export default DataService;