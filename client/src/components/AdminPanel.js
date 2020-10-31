import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Nav from './backOffice/Nav';
import UsersTable from './backOffice/UsersTable';
import AdminService from '../services/adminData';
import { Context as AdminContext} from '../context/AdminContext';
import Dashboard from './backOffice/Dashboard';
import { Context as AuthContext } from '../context/AuthContext';

const AdminPanel = () => {

    const { isLogged } = useContext(AuthContext)
    const { users, fetch, loading, fetchError } = useContext(AdminContext);
    useFetch(AdminService,fetch, loading, fetchError, isLogged, users);

    return (
            <>
                <Nav />
                <Route exact path='/dashboard'>
                   <Dashboard /> 
                </Route>
                <Route path='/dashboard/users'>
                    <UsersTable />
                </Route>
            </>
    );
};

export default AdminPanel;
