import React, { useContext } from 'react';
import { BrowserRouter as Router,  Route,  Switch } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Nav from './backOffice/Nav';
import UsersTable from './backOffice/UsersTable';
import AdminService from '../services/adminData';
import { Context as AdminContext} from '../context/AdminContext';
import DashboardHome from './backOffice/DashboardHome';
import { Context as AuthContext } from '../context/AuthContext';

const Dashboard = () => {

    const { isLogged } = useContext(AuthContext)
    const { fetch, loading, fetchError } = useContext(AdminContext);
    useFetch(AdminService,fetch, loading, fetchError, isLogged);

    return (
            <Router>
                <Nav />
                <Switch>
                <Route exact path='/dashboard'>
                   <DashboardHome /> 
                </Route>
                <Route path='/dashboard/users'>
                    <UsersTable />
                </Route>
                </Switch>
            </Router>
    );
};

export default Dashboard;
