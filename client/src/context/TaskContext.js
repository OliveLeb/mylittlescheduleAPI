import actions from '../actions/task';
import taskReducer, { initialState } from '../reducers/taskReducer';
import CreateContext from './CreateContext';


export const {Provider, Context} = CreateContext(taskReducer, actions, initialState);