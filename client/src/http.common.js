import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000',
    //cancelToken: new CancelToken((cancel)=>{    })
    headers: {
        "Content-type": "application/json"
    },
})

//http.defaults.headers.common['auth-token'] = AUTH_TOKEN;

export default http;