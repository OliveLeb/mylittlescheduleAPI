import React, { useContext, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import { Context as AuthContext} from '../../context/AuthContext';
import { Context as TaskContext } from '../../context/TaskContext';
import FetchTasks from '../../hooks/FetchTasks';
import DataService from '../../services/auth';

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
            <NavLink to='/'><h1>My little schedule</h1></NavLink>
            <nav>
                <ul>
                    {isLogged
                    ? <li><button type='button' onClick={logOut}>Se déconnecter</button></li>
                    : <li><NavLink to='/login'>Se connecter</NavLink></li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header
