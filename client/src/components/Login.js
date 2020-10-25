import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Context as AuthContext} from '../context/AuthContext';
import DataService from '../services/auth';


const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const {user,handleInput,connect} = useContext(AuthContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        DataService.login(user)
            .then(res => {
                if(res.data.token){
                    localStorage.setItem('x-access-token', res.data.token);
                    connect();
                    history.replace(from);
                };
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' value={user.email} onChange={handleInput}/>
            <label htmlFor='password'>Mot de passe</label>
            <input type='password' name='password' value={user.password} onChange={handleInput}/>
            <button type='submit'>Se connecter</button>
        </form>

    )
}

export default Login;
