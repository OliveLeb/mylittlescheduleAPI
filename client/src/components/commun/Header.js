import React, { useContext } from 'react';
import {Context as AuthContext} from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import {loggOut} from '../../actions/auth';

const Header = () => {

    const {isLogged,setIsLogged} = useContext(AuthContext);

    const disconnect =()=>{
        loggOut(setIsLogged);
    };

    return (
        <header>
            <NavLink to='/'><h1>My Little Schedule</h1></NavLink>
            <nav>
                <ul>
                    {!isLogged ? 
                    <li><NavLink to='/login'> Se connecter </NavLink> </li>
                    :  
                    <li onClick={disconnect}><NavLink to='/'>Se déconnecter</NavLink></li>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;
