import { useEffect } from 'react';

import DataService from '../services/auth';

export const useRefreshToken = (token,connect,isLogged) => {
    
    useEffect(() => {

        if(isLogged) {
            setInterval(()=> {
            DataService.refreshToken()
            .then((res)=>{
                const token = res.headers['x-access-token'];
                if(token) connect(res.data.user,token,res.data.token.expiresIn);
            })
            .catch((err) => {
                console.log(err);
            });
        },token.expiresIn);
        }
        else {
            DataService.refreshToken()
            .then((res)=>{
                const token = res.headers['x-access-token'];
                if(token) connect(res.data.user,token,res.data.token.expiresIn);
            })
            .catch((err) => {
                console.log(err);
            });
        }

    },[isLogged]);

};