import React, { useContext, useEffect } from 'react';
import { Context as AuthContext} from '../../context/AuthContext';
import { Context as TaskContext } from '../../context/TaskContext';
import { useFetch } from '../../hooks/useFetch';
import DataService from '../../services/auth';
import TaskService from '../../services/userTasks';
import NavBar from './NavBar/NavBar';

const Header = () => {

    const {isLogged, disconnect, connect, loggedUser} = useContext(AuthContext);
    const {tasks,reset,fetch,loading,fetchError} = useContext(TaskContext);

    useFetch(TaskService,fetch,loading,fetchError,isLogged,tasks);

    const token = localStorage.getItem('x-access-token');
    useEffect(()=>{
        if(token) {
            DataService.getUserData()
            .then(res=>{
                connect(res.data[0])
            })
            .catch(err=>{
                console.log(err.response);
            });
        };
    },[token]);

    const logOut = (e) => {
        disconnect(e);
        reset();
    }


    return (
        <header>           
                <NavBar isLogged={isLogged} logOut={logOut} loggedUser={loggedUser}/>            
        </header>
    )
}

export default Header
