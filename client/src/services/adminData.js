import http from '../http.common';

const getUsers = () => {
    return http.get('/users');
};

const AdminService = { getUsers };
export default AdminService;