import {getUserAccessRequests} from '../Api/accessRequest';
import {store} from '../store/configureStore';

// return authorization header with jwt token
let token = localStorage.getItem('token');

export function getAccessRequests(){
    store.dispatch(getUserAccessRequests(token));
}