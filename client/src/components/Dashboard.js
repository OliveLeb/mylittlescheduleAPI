import React from 'react';
import { BrowserRouter as Router,  Route,  Switch } from 'react-router-dom';
import Nav from './backOffice/Nav';
import UsersTable from './backOffice/UsersTable';

const Dashboard = () => {
    return (
            <Router>
                <Nav />
                <Switch>
                <Route path='/users'>
                    <UsersTable />
                </Route>
                </Switch>
            </Router>
    );
};

export default Dashboard;
