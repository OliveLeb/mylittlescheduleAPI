import React from 'react';
import TasksList from './TasksList';
import Englobant from '../HOC/authHOC';
import AddTask from './AddTask';

const Home = ({isLogged,tasks}) => {


    return (
        <>
            Home
        {
            isLogged ? <TasksList tasks={tasks} /> : 'bonjour'
        }
        <AddTask />
        </>
    );
};

export default Englobant(Home);
