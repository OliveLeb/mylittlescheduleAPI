import axios from 'axios';


const http = axios.create({
    baseURL: 'http://localhost:3001/api',
    //cancelToken: new CancelToken((cancel)=>{    })
    headers: {
        "Content-type": "application/json",
    },
})

http.interceptors.request.use((config)=>{
    const token = localStorage.getItem('x-access-token');
    if(token) config.headers.common['auth-token'] = token;
    return config;
},
    error => Promise.reject(error)
);


export default http;