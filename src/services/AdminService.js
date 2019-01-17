import {getUserAccessRequests, acceptUserAccessRequest, denyUserAccessRequest} from '../Api/accessRequest';
import {getExistingPositions, removePosition, createPosition} from '../Api/positions';
import {getActive, getAlumni, getRemoved, updateUserAdmin, setAdmin, setUserStatus, updateSelfAdmin} from '../Api/users';
import {store} from '../store/configureStore';
import {showLoading, hideLoading} from './LoadingService';
import {hideUpdateUser} from './UpdateService';

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

export async function acceptUser(userId){
    showLoading("Accepting User");
    await store.dispatch(acceptUserAccessRequest(token, userId));
    hideLoading();
}

export async function denyUser(userId){
    showLoading("Denying User");
    await store.dispatch(denyUserAccessRequest(token, userId));
    hideLoading();
}

export async function getActiveUsers(){
    await store.dispatch(getActive(token));
}

export async function getAlumniUsers(){
    await store.dispatch(getAlumni(token));
}


export async function refreshAllUsersData(){

    //get all users
    await store.dispatch(getActive(token));

    //get all alumni
    await store.dispatch(getAlumni(token));

    //get all removed
    await store.dispatch(getRemoved(token));

    //get all requests
    await getAccessRequests();
    
}

//first time login
export async function adminLogin(token){
    await store.dispatch(getUserAccessRequests(token));
    await store.dispatch(getExistingPositions(token));
}


//update user
export async function updateUser(userId, userObj){
    await showLoading("Updating User");
    
    await store.dispatch(updateUserAdmin(userId, userObj)); 
    await hideUpdateUser();
    //get latest active user positions
    await getActiveUsers();
    await hideLoading();
}

//update user
export async function updateAdminSelf(userId, userObj){
    await showLoading("Updating User");
    
    await store.dispatch(updateSelfAdmin(userId, userObj)); 
    await hideUpdateUser();
    //get latest active user positions
    await getActiveUsers();
    await hideLoading();
}

//toggles user admin
export async function toggleUserAdmin(userId, isAdmin){
    await showLoading("Updating Admin Status");

    let admin = true;
    if(isAdmin === 1){
        admin = false;
    }
    
    await store.dispatch(setAdmin(userId, admin));
    await hideLoading();
   
}


//change users status
export async function updateUserStatus(userId, status){

    await showLoading("Moving User");
    await store.dispatch(setUserStatus(userId, status));
    await refreshAllUsersData();
    hideLoading();
}