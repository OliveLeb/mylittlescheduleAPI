import React, { useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import dataService from '../services/authService';
import Englobant from '../HOC/authHOC';

const Login = ({isLogged,setIsLogged}) => {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

const [data,setData] = useState({
    email: '',
    password: ''
});


const onSubmitForm = (e) => {
    e.preventDefault();
    dataService.login(data)
    .then(res=>{
        console.log(res);
        if(res.data.token) {
            localStorage.setItem('x-access-token', res.data.token);
            setIsLogged(true);
        };
        history.replace(from);
    })
    .catch(e=>{
        console.log(e);
    });
};

const changeInput = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value,
    });
};


const loggOut = () => {
    localStorage.removeItem('x-access-token');
    setIsLogged(false);
};


    return (
        <>
            {isLogged ? (<button onClick={loggOut}>Disconnect</button>) : null}
            {isLogged}
            <h1>Se connecter</h1>
            <form onSubmit={onSubmitForm}>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' onChange={changeInput} value={data.email}></input>
                <br/>
                <label htmlFor='password'>Mot de passe</label>
                <input type='password' name='password' onChange={changeInput} value={data.password}></input>
                <button type='submit'>Se connecter</button>
            </form>
            
        </>
    );
};

export default Englobant(Login);
