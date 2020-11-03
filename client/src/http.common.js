import axios from 'axios';

const http = axios.create({
    baseURL: '/api',
    //cancelToken: new CancelToken((cancel)=>{    })
    headers: {
        "Content-type": "application/json",
    },
});

export default http;