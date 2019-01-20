import axios from './axios_config';
import {setUserRequests} from '../store/actions/admin';
import {showError} from '../services/ErrorService';
import {store} from '../store/configureStore';
import {refreshAllUsersData} from '../services/AdminService';

export const ENUM_USERACCESSREQUEST_STATUS_ACCEPTED = 2;
export const ENUM_USERACCESSREQUEST_STATUS_DENIED = 1;
export const ENUM_USERACCESSREQUEST_STATUS_WAITING = 0;


/*Get all user access requests*/
export let getUserAccessRequests = (token) =>{


    return (dispatch) =>{
        return axios(store.getState().auth.token).get('/useraccessrequests?status=0').then(
            response => store.dispatch(setUserRequests(response.data.result.useraccessrequests)),
            error => showError("Error Fetching Access Requests")
        );
    }
     
}

/*Accept a user by given Id*/
export let acceptUserAccessRequest = (token, requestId)=>{

    return (dispatch) =>{
        return axios(store.getState().auth.token).post('/useraccessrequests/accept',{
            request_id: requestId
        }).then(
            response => refreshAllUsersData(),
            error=> showError("Error Accepting User")
        );
    }
}

/*Deny a user by given Id*/
export let denyUserAccessRequest = (token, requestId)=>{

    return (dispatch) =>{
        return axios(store.getState().auth.token).post('/useraccessrequests/deny',{
            request_id: requestId
        }).then(
            response => refreshAllUsersData(),
            error=> showError("Error Denying User")
        );
    }
}


/*Request user access request*/
export async function requestUserAccessRequest(token, bondNumber, phoneNumber) {

    let data = null;

    if(bondNumber !== null && phoneNumber !== null){
        await axios(token).post('/useraccessrequests/request', {
        
            phone_number: phoneNumber,
            bond_number: bondNumber
        
        })
        .then(response => {
            data = response.data;

        })
        .catch(error => {
            data = error;
            
        });
    }
    else{
        await axios(token).post('/useraccessrequests/request', {
        
        })
        .then(response => {
            data = response.data;
        })
        .catch(error => {
            data = error;
        });
    }
    return data;
}
