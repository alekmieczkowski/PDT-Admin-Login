import { combineReducers } from 'redux';
import auth from './auth/reducer-auth';
import spinner from './spinner/reducer-spinner';

export default combineReducers({
    auth,
    spinner
})