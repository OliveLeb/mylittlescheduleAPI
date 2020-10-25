import http from '../http.common';


const login = (data) => {
    return http.post('/login',data);
};

const DataService = {login}
export default DataService;