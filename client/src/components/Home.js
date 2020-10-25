import React, { useContext } from 'react';
import { Context as AuthContext} from '../context/AuthContext';
import TasksList from './TasksList';

const Home = () => {

    const {isLogged} = useContext(AuthContext)

    return (
        <>
            <section>
                HOME
            </section>
            {isLogged && <TasksList />}
        </>
    )
}

export default Home;
