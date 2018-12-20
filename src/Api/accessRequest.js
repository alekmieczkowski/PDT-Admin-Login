import axios from './axios_config';
import {setUserRequests} from '../store/actions/admin';
import {showError} from '../services/ErrorService';
import {store} from '../store/configureStore';

export const ENUM_USERACCESSREQUEST_STATUS_ACCEPTED = 2;
export const ENUM_USERACCESSREQUEST_STATUS_DENIED = 1;
export const ENUM_USERACCESSREQUEST_STATUS_WAITING = 0;


export let getUserAccessRequests = (token) =>{

    let enumSearchByStatus = ENUM_USERACCESSREQUEST_STATUS_WAITING;

    return (dispatch) =>{
        return axios(token).get('/useraccessrequests?status=0').then(
            response => store.dispatch(setUserRequests(response.data.result.useraccessrequests)),
            error => showError("Error Fetching Access Requests")
        );
    }
     
}

/*
export async function getUserAccessRequestById(requestId) {
    let data = null;
    await axios().get('/useraccessrequests/' + requestId).then(response => {
        data = response.data;
    }).catch(error => {
        data = error;
    });
    return data;
}



export async function getUserAccessRequests(enumSearchByStatus) {
    let data = null;
    await axios().get('/useraccessrequests' + (enumSearchByStatus !== undefined ? '?status=' + enumSearchByStatus : '')).then(response => {
        data = response.data;
    }).catch(error => {
        data = error;
    });
    
    return data;
}



*/
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