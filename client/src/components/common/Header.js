import React, { useContext, useEffect } from 'react';
import { Context as AuthContext} from '../../context/AuthContext';
import { Context as TaskContext } from '../../context/TaskContext';
import FetchTasks from '../../hooks/FetchTasks';
import DataService from '../../services/auth';
import NavBar from './NavBar/NavBar';

const Header = () => {

    const {isLogged, disconnect, connect} = useContext(AuthContext);
    const {reset} = useContext(TaskContext);

    FetchTasks(isLogged);

    const token = localStorage.getItem('x-access-token');
    useEffect(()=>{
        if(token) {
            DataService.getUserData()
            .then(res=>{
                connect(res.data[0])
            })
            .catch(err=>{
                console.log(err);
            });
        };
    },[token]);

    const logOut = (e) => {
        disconnect(e);
        reset();
    }


    return (
        <header>           
                <NavBar isLogged={isLogged} logOut={logOut}/>            
        </header>
    )
}

export default Header
