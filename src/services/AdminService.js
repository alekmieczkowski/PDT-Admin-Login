import {getUserAccessRequests} from '../Api/accessRequest';
import {getExistingPositions, removePosition, createPosition} from '../Api/positions';
import {store} from '../store/configureStore';

// return authorization header with jwt token
let token = localStorage.getItem('token');

export function getAccessRequests(){
    store.dispatch(getUserAccessRequests(token));
}

export function getPositions(){
    store.dispatch(getExistingPositions(token));
}

export function deletePosition(positionId){
    store.dispatch(removePosition(token, positionId));
}

export function addPosition(positionName){
    store.dispatch(createPosition(token, positionName));
}

export function getUserById(id){
    let users =  store.getState().api.users;

    let user = users.map(user =>{
        if(user.user_id === id){
            return user;
        }
    })
    return user[0];
}
