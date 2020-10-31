import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Context as AuthContext} from '../context/AuthContext';
import DataService from '../services/auth';


const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const {user,hasError,errorMessage,handleInput,connect,handleErrorLogin, resetError} = useContext(AuthContext);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        resetError();
        DataService.login(user)
            .then(res => {
                if(res.data.token){
                    localStorage.setItem('x-access-token', res.data.token);
                    connect(res.data.user);
                    history.replace(from);
                };
            })
            .catch(err => {
                if(err.request){
                   const error = JSON.parse(err.request.response);
                    switch(error.type){
                        case 'password':
                            handleErrorLogin(error.type,'Mot de passe invalide.');
                            break;
                        case 'email':
                            handleErrorLogin(error.type,'Il n\'existe pas de compte avec cet email.');
                            break;
                        default:
                            console.log(err);
                    }
                }
            });
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' className='form-control' name='email' value={user.email} onChange={handleInput} required/>
                {hasError.email && <p className='invalid'>{errorMessage}</p> }
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Mot de passe</label>
                <input type='password' className='form-control' name='password' value={user.password} onChange={handleInput} required/>
                {hasError.password && <p className='invalid'>{errorMessage}</p> }
            </div>
            <button type='submit'>Se connecter</button>
        </form>

    )
}

export default Login;
