import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const Account = () => {

    const { loggedUser } = useContext(AuthContext);

    return (
        <section>
            <h2>Mon Compte</h2>
            <h3>Bonjour {loggedUser.firstname}</h3>
            <ul>
                <li>{loggedUser.firstname} {loggedUser.lastname}</li>
                <li>{loggedUser.email}</li>
            </ul>
        </section>
    );
};

export default Account;
