import axios from './axios_config';
//import axios from 'axios';


export async function getUserAccessRequestById(requestId) {
    let data = null;
    await axios().get('/useraccessrequests/' + requestId).then(response => {
        data = response.data;
    }).catch(error => {
        data = error;
    });
    return data;
}

export const ENUM_USERACCESSREQUEST_STATUS_ACCEPTED = 2;
export const ENUM_USERACCESSREQUEST_STATUS_DENIED = 1;
export const ENUM_USERACCESSREQUEST_STATUS_WAITING = 0;

export async function getUserAccessRequests(enumSearchByStatus) {
    let data = null;
    await axios().get('/useraccessrequests' + (enumSearchByStatus !== undefined ? '?status=' + enumSearchByStatus : '')).then(response => {
        data = response.data;
    }).catch(error => {
        data = error;
    });
    
    return data;
}

export async function requestUserAccessRequest(token, bondNumber, phoneNumber) {
    
    console.log("Incoming Token: " + token);
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
    console.log(JSON.stringify(data));
    return data;
}