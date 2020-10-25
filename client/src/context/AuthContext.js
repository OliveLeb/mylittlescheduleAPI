import CreateContext from './CreateContext';
import authReducer, { initialState } from '../reducers/authReducer';
import actions from '../actions/auth';

export const {Context, Provider} = CreateContext(authReducer,actions,initialState);