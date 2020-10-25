import React, { useContext, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import { Context as AuthContext} from '../../context/AuthContext';
import { Context as TaskContext } from '../../context/TaskContext';
import FetchTasks from '../../hooks/FetchTasks';

const Header = () => {

    const {isLogged,user, disconnect, connect} = useContext(AuthContext);
    const {reset} = useContext(TaskContext);

    FetchTasks(isLogged);

    const token = localStorage.getItem('x-access-token');
    useEffect(()=>{
        if(token) connect();
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
