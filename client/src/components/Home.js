import React, { useContext } from 'react';
import { Context as AuthContext} from '../context/AuthContext';

const Home = () => {

    const {isLogged, loggedUser} = useContext(AuthContext)

    return (
        <>
            {isLogged && <h2>Bonjour {loggedUser.firstname}</h2>}
            <section>
                Planifiez votre journée tranquillement !
            </section>
        </>
    )
}

export default Home;
