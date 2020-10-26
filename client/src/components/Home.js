import React, { useContext } from 'react';
import { Context as AuthContext} from '../context/AuthContext';
import AddTask from './AddTask';
import TasksList from './TasksList';

const Home = () => {

    const {isLogged, loggedUser} = useContext(AuthContext)

    return (
        <>
            {isLogged && <h1>Bonjour {loggedUser.firstname} {loggedUser.lastname}</h1>}
            <section>
                <p>Ajouter vos tâches</p>
            </section>
            {isLogged && <TasksList />}
            <AddTask />
        </>
    )
}

export default Home;
