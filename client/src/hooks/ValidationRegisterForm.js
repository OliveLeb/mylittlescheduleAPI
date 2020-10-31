
const ValidationRegisterForm = ( newUser, handleErrorRegister ) => {
    
    let isError = false;

    const errors = {
        firstname:'',
        lastname:'',
        email:'',
        picture:'',
        password:'',
        repeat_password:''
    };


        if(!newUser.firstname.match('^[a-zA-Z-\']{2,50}$')) {
            isError = true;
            errors.firstname = 'Le prénom doit comporter 2 à 50 caractères sans chiffre (\' et - autorisé).';
        }
        if(!newUser.lastname.match('^[a-zA-Z-\']{2,50}$')) {
            isError = true;
            errors.lastname = 'Le nom doit comporter 2 à 50 caractères sans chiffre (\' et - autorisé).';
        }
        if(!newUser.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            isError = true;
            errors.email = 'L\'email n\'est pas valide.';
        }
        if(!newUser.password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,16}$')) {
            isError = true;
            errors.password = 'Mot de passe non valide.';
        }
        if(newUser.password !== newUser.repeat_password) {
            isError = true;
            errors.repeat_password = 'Les mots de passe ne correspondent pas.';
        }

        handleErrorRegister(errors);

        return isError;
}

export default ValidationRegisterForm
