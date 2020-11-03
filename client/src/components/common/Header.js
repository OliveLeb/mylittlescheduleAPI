import React, { useContext, useEffect } from 'react';
import { Context as AuthContext} from '../../context/AuthContext';
import { Context as TaskContext } from '../../context/TaskContext';
import DataService from '../../services/auth';
import NavBar from './NavBar/NavBar';

const Header = () => {

    const {isLogged, disconnect, connect, loggedUser} = useContext(AuthContext);
    const {reset} = useContext(TaskContext);


  /*  const token = localStorage.getItem('x-access-token');
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
    },[token]);*/

    const logOut = (e) => {
        DataService.logout()
        .then(()=>{
            disconnect(e);
            reset();
        }).catch(err=>{
            console.log(err);
        });
        
    }


    return (
        <header>           
                <NavBar isLogged={isLogged} logOut={logOut} loggedUser={loggedUser}/>            
        </header>
    )
}

export default Header
