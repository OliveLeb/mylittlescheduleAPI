import React from 'react';
import TasksList from './TasksList';
import Englobant from '../HOC/authHOC';

const Home = ({isLogged}) => {


    return (
        <>
            Home
        {
            isLogged ? <TasksList /> : 'bonjour'
        }
        </>
    );
};

export default Englobant(Home);
