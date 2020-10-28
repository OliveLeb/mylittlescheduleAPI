import CreateContext from './CreateContext';
import adminReducer, { initialState } from '../reducers/adminReducer';
import actions from '../actions/admin';

export const {Context, Provider} = CreateContext(adminReducer,actions,initialState);