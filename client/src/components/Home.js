import React, { useContext } from 'react';
import { Context as AuthContext} from '../context/AuthContext';
import AddTask from './AddTask';
import TasksList from './TasksList';

const Home = () => {

    const {isLogged, loggedUser} = useContext(AuthContext)

    return (
        <>
            {isLogged && <h2>Bonjour {loggedUser.firstname} {loggedUser.lastname}</h2>}
            <section>
                <h3>Ajouter vos tâches</h3>
            </section>
            {isLogged && <TasksList />}
            <AddTask />
        </>
    )
}

export default Home;
