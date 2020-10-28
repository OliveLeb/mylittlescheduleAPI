import { useContext, useEffect } from 'react';
import { Context as AdminContext } from '../context/AdminContext';
import AdminService from '../services/adminData';

const FetchUsers = () => {

    const { users, fetchUsers } = useContext(AdminContext);
    
    useEffect(() => {

        const getUsers = async () => {

            AdminService.getUsers()
            .then(res=> {
                //console.log(res)
                fetchUsers(res);
            })
            .catch(err => {
                console.log(err);
            })
        };

        getUsers();

    },[]);

};

export default FetchUsers;
