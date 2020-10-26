import http from '../http.common';


const login = (data) => {
    return http.post('/login',data);
};

const getUserData = () => {
    return http.get('/user/loggedUser');
}

const DataService = {login,getUserData};
export default DataService;