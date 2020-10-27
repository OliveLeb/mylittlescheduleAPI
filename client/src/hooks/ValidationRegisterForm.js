//import { useContext } from 'react';
//import { Context as AuthContext } from '../context/AuthContext';

const ValidationRegisterForm = ( newUser, handleErrors ) => {
    
    //const { newUser, handleErrors } = useContext(AuthContext);
    //console.log(newUser);
    //console.log('first',newUser.firstname);
    let isError = false;

    const errors = {
        firstnameError:'',
        lastnameError:'',
        emailError:'',
        pictureError:'',
        passwordError:'',
        repeat_passwordError:''
    };


        if(!newUser.firstname.match('^[a-zA-Z-\']{2,50}$')) {
            isError = true;
            errors.firstnameError = 'Le prénom doit comporter 2 à 50 caractères sans chiffre (\' et - autorisé).';
        }
        if(!newUser.lastname.match('^[a-zA-Z-\']{2,50}$')) {
            isError = true;
            errors.lastnameError = 'Le nom doit comporter 2 à 50 caractères sans chiffre (\' et - autorisé).';
        }
        if(!newUser.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            isError = true;
            errors.emailError = 'L\'email n\'est pas valide.';
        }
        if(!newUser.password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,16}$')) {
            isError = true;
            errors.passwordError = 'Le mot de passe doit comporter entre 6 et 16 caractères. (Au moins une lettre minuscule, une lettre majuscule et un chiffre)';
        }
        if(newUser.password !== newUser.repeat_password) {
            isError = true;
            errors.repeat_passwordError = 'Les mots de passe ne correspondent pas.';
        }

        handleErrors(errors);

        return isError;
}

export default ValidationRegisterForm
