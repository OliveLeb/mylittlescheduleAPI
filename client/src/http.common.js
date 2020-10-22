import axios from 'axios';

const token = localStorage.getItem('x-access-token');

const http = axios.create({
    baseURL: 'http://localhost:3001',
    //cancelToken: new CancelToken((cancel)=>{    })
    headers: {
        "Content-type": "application/json"
    },
})

http.defaults.headers.common['auth-token'] = token;

export default http;