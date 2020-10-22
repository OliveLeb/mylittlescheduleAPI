import http from '../http.common';

const getTasks = () => {
    return http.get('task/mytasks');
}

export default {getTasks};