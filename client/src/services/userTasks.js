import http from '../http.common';

const getTasks = () => {
    return http.get('task/mytasks');
}


const TaskService = {getTasks}
export default TaskService;