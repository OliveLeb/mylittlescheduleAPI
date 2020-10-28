import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context as AuthContext} from '../../context/AuthContext';
import ValidationRegisterForm from '../../hooks/ValidationRegisterForm';
import DataService from '../../services/auth';
import './Register.modules.css';

const Register = () => {

    const history = useHistory();

    const {newUser,newUserError,handleRegisterInput, resetErrorForm, handleErrors} = useContext(AuthContext);

    const submitRegistration = (e) => {
        e.preventDefault();
        const err = ValidationRegisterForm(newUser,handleErrors);
        if(!err){
            DataService.register(newUser)
            .then(res => {
                resetErrorForm();
                history.replace('/login');
            })
            .catch(err => {
                if(err.response.data.type === 'email') {
                    const error = {
                        emailError:err.response.data.message,
                    };
                    handleErrors(error);
                }
            });
        };
    };

    return (
        <form onSubmit={submitRegistration}>
            <div className='row mt-4'>
            <div className='col form-group'>
                <label htmlFor='firstname'>Prénom</label>
                <input type='text' name='firstname' className='form-control'required onChange={handleRegisterInput} value={newUser.firstname || ''}/>
                <p className='invalid'>{newUserError.firstnameError}</p>
            </div>
            <div className='col form-group'>
                <label htmlFor='lastname'>Nom de famille</label>
                <input type='text' name='lastname' className='form-control'required onChange={handleRegisterInput} value={newUser.lastname || ''}/>
                <p className='invalid'>{newUserError.lastnameError}</p>
            </div>
            </div>
            <div className='form-group my-4'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' className='form-control'required onChange={handleRegisterInput} value={newUser.email || ''}/>
                <p className='invalid'>{newUserError.emailError}</p>
            </div>
            <div className='form-group my-4'>
                <label htmlFor='password'>Mot de passe</label>
                <input type='password' name='password' className='form-control'required onChange={handleRegisterInput} value={newUser.password || ''}/>
                <p className='invalid'>{newUserError.passwordError}</p>
            </div>
            <div className='form-group my-4'>
                <label htmlFor='repeat_password'>Répéter le mot de passe</label>
                <input type='password' name='repeat_password' className='form-control'required onChange={handleRegisterInput} value={newUser.repeat_password || ''}/>
                <p className='invalid'>{newUserError.repeat_passwordError}</p>
            </div>
            <div className='text-center mt-5'>
                <button type='submit' >Envoyer</button>
            </div>
        </form>
    )
}

export default Register
