import {getUserAccessRequests} from '../Api/accessRequest';
import {getExistingPositions} from '../Api/positions';
import {store} from '../store/configureStore';

// return authorization header with jwt token
let token = localStorage.getItem('token');

export function getAccessRequests(){
    store.dispatch(getUserAccessRequests(token));
}

export function getPositions(){
    store.dispatch(getExistingPositions(token));
}