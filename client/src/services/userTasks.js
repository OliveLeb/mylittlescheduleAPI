import http from '../http.common';

const getTasks = () => {
    return http.get('task/mytasks');
}

const createTask = (data) => {
    return http.post('task/mytasks',data);
}

const deleteTask = id => {
    return http.delete(`task/mytasks/${id}`);
};

const TaskService = {getTasks,createTask,deleteTask};
export default TaskService;