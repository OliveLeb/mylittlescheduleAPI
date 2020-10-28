import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const Account = () => {

    const { loggedUser } = useContext(AuthContext);

    return (
        <div>
            <h2>Mon Compte</h2>
            <h3>Bonjour {loggedUser.firstname}</h3>
        </div>
    );
};

export default Account;
