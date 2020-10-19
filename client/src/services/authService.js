import http from '../http.common';


const login = (data) => {
    return http.post('/login',data);
};

export default {login};