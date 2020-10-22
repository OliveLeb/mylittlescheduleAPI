import {useEffect, useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';

export const IsAuthenticated = () => {
    const {setIsLogged} = useContext(AuthContext);
    const token = localStorage.getItem('x-access-token');
    useEffect(()=>{
        if(token) setIsLogged(true);
    },[token]);
};

export const loggOut = (setIsLogged) => {
    localStorage.removeItem('x-access-token');
    setIsLogged(false);
};
