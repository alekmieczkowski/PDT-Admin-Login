import {getUserAccessRequests, acceptUserAccessRequest, denyUserAccessRequest} from '../Api/accessRequest';
import {getExistingPositions, removePosition, createPosition} from '../Api/positions';
import {getActive, getAlumni} from '../Api/users';
import {store} from '../store/configureStore';

// return authorization header with jwt token
let token = localStorage.getItem('token');

export async function getAccessRequests(){
    await store.dispatch(getUserAccessRequests(token));
}

export function getPositions(){
    console.log("getting positions");
    store.dispatch(getExistingPositions(token));
}

export function deletePosition(positionId){
    store.dispatch(removePosition(token, positionId));
}

export function addPosition(positionName){
    store.dispatch(createPosition(token, positionName));
}

export function getUserById(id){
    let users =  store.getState().api.users.active;

    let user = users.map(user =>{
        if(user.user_id === id){
            return user;
        }
    })

    return user.filter(n=>n)[0];
}

export function acceptUser(userId){
    store.dispatch(acceptUserAccessRequest(token, userId));
}

export async function denyUser(userId){
    await store.dispatch(denyUserAccessRequest(token, userId));
}

export async function getActiveUsers(){
    await store.dispatch(getActive(token));
}

export async function getAlumniUsers(){
    await store.dispatch(getAlumni(token));
}


export async function refreshAllUsersData(){
    console.log("in refresh all");
    //get all users
    await store.dispatch(getActive(token));

    //get all alumni
    await store.dispatch(getAlumni(token));

    //get all removed

    //get all requests
    console.log("Get access requests");
    await getAccessRequests();
    
}

//first time login
export async function adminLogin(token){
    await store.dispatch(getUserAccessRequests(token));
    await store.dispatch(getExistingPositions(token));
}