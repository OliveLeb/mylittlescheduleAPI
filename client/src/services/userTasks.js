import http from '../http.common';

const get = () => {
    return http.get('/task/mytasks');
};

const createTask = (data) => {
    return http.post('/task/mytasks',data);
};

const updateTask = (id,data) => {
    return http.put(`/task/mytasks/${id}`,data)
}

const deleteTask = id => {
    return http.delete(`/task/mytasks/${id}`);
};

const deleteTasksDone = () => {
    return http.delete('/task/mytasks/completed');
}

const TaskService = {get,createTask,deleteTask, updateTask, deleteTasksDone};
export default TaskService;