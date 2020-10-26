import http from '../http.common';

const getTasks = () => {
    return http.get('task/mytasks');
};

const createTask = (data) => {
    return http.post('task/mytasks',data);
};

const updateTask = (id,data) => {
    return http.put(`task/mytasks/${id}`,data)
}

const deleteTask = id => {
    return http.delete(`task/mytasks/${id}`);
};

const TaskService = {getTasks,createTask,deleteTask, updateTask};
export default TaskService;