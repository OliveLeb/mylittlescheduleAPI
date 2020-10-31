import React, { useEffect,  useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { FaTimes, FaBars } from 'react-icons/fa';
import './NavBar.modules.css';

const NavBar = ({isLogged, logOut, loggedUser}) => {

    const location = useLocation();
    const [isMenuToggled,setIsMenuToggled] = useState(false);

    const onToggle = () => {
        setIsMenuToggled(prevState => !prevState);
    }

    useEffect(() => {
        isMenuToggled && setIsMenuToggled(false);
    },[location.pathname]);


    return (
        <nav className='NavBar'>

                <NavLink to='/' className='navBarLogo'><h1>My little schedule</h1></NavLink>
            
            <div className='menuIcon' onClick={onToggle}>
                { isMenuToggled ? <FaTimes /> : <FaBars /> }
            </div>
            <ul className={'navMenu' + (isMenuToggled ? ' active' : '')} >
                <li><NavLink to='/mytasks'>Mes tâches</NavLink></li>
             
                <li>
                {isLogged && loggedUser.is_admin
                ? <NavLink to='/dashboard'>Dashboard</NavLink>
                : isLogged 
                ? <NavLink to='/myaccount'>Mon Compte</NavLink>
                : <NavLink to='/register'>Sign In</NavLink>                   
                }
                </li> 

                <li>
                {isLogged
                ? <NavLink to='#' onClick={logOut}><FiLogOut /> Log Out</NavLink>
                : <NavLink to='/login'><FiLogIn />Log In</NavLink>
                }
                </li>            
            </ul>
        </nav>
    );
};

export default NavBar;
