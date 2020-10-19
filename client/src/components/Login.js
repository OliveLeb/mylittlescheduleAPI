import React, { useEffect, useState } from 'react';
import { isAuthenticated } from '../actions/auth';
import dataService from '../services/authService';

const Login = () => {

const [data,setData] = useState({
    email: '',
    password: ''
});
const [loggedIn, setLoggedIn] = useState(false);

const onSubmitForm = (e) => {
    e.preventDefault();
    dataService.login(data)
    .then(res=>{
        console.log(res);
        localStorage.setItem('x-access-token', res.data.token);
    })
    .catch(e=>{
        console.log(e);
    });
}

const changeInput = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value,
    })
}

useEffect(() => {
    if(isAuthenticated) setLoggedIn(true);
},[])



    return (
        <>
            {loggedIn ? 'logged in' : null}
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

export default Login;
