import {useEffect, useReducer} from 'react';
import TaskReducer, { initialState } from '../reducer/TaskReducer';
import tasksService from '../services/userTasks';

const FetchTasks = () => {
    
    const [state,dispatch] = useReducer(TaskReducer,initialState);
    const {tasks} = state;
    

        useEffect(()=>{
            const getMyTasks = () => {
                tasksService.getTasks()
                .then(res=>{
                    dispatch({
                        type: 'FETCH_TASKS_SUCCESS',
                        payload: res.data.map((item) => {
                            console.log(item);
                            return {
                                id: item.id,
                                task: item.task,
                                is_done: item.is_done,
                                day: item.day,
                                hour: item.hour,
                                created_at: item.created_at,
                                updated_at: item.updated_at,
                            };                        
                        }),
                    });
            })
            .catch(error=>{
                console.log(error);
                dispatch({
                    type:'HAS_ERROR'
                });
            });

            };
            
            getMyTasks();
    
        },[]);

    return {tasks};

};

export default FetchTasks;
