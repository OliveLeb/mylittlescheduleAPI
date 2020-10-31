import http from '../http.common';

const get = () => {
    return http.get('/users');
};

const AdminService = { get };
export default AdminService;