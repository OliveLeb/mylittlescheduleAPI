import http from '../http.common';

const getTasks = () => {
    return http.get('task/mytasks');
}

const createTask = (data) => {
    return http.post('task/mytasks',data);
}

const TaskService = {getTasks,createTask};
export default TaskService;