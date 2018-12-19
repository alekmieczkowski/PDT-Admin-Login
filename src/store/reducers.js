import { combineReducers } from 'redux';
import auth from './reducers/auth';
import spinner from './reducers/spinner';
import transition from './reducers/transition';
import api from './reducers/api';
import error from './reducers/error';
import confirmation from './reducers/confirmation';
import update from './reducers/update';

export default combineReducers({
    auth,
    spinner,
    transition,
    api,
    error,
    confirmation,
    update
})