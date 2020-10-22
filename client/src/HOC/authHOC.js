import React from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { IsAuthenticated } from '../actions/auth';

const Englobant = (Children) => (props) => {

IsAuthenticated();

    return (
        <AuthContext.Consumer >
            {({isLogged,setIsLogged}) => {
                return(
                    <Children {...props} isLogged={isLogged} setIsLogged={setIsLogged}/>
                )
            }}

        </AuthContext.Consumer>
    );

};

export default Englobant;