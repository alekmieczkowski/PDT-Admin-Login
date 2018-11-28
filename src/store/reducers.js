import { combineReducers } from 'redux';
import auth from './auth/reducer-auth';
import spinner from './spinner/reducer-spinner';
import transition from './transition/reducer-transition';

export default combineReducers({
    auth,
    spinner,
    transition
})