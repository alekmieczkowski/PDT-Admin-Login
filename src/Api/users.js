import axios from './axios_config';
import {store} from '../store/configureStore';
import * as api from '../store/actions/api';
import {showError} from '../services/ErrorService';

export let getActive = (token) =>{
    return (dispatch) =>{
        return axios(token).get('/users/1').then(
            response => store.dispatch(api.setUsers(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}

export let getAlumni = (token) =>{
    return (dispatch) =>{
        return axios(token).get('/users/2').then(
            response => store.dispatch(api.setAlumni(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}

export let getRemoved = (token) =>{
    return (dispatch) =>{
        return axios(token).get('/users').then(
            response => store.dispatch(api.setUsers(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}

export let getAllUsers = (token) =>{
    return (dispatch) =>{
        return axios(token).get('/users').then(
            response => store.dispatch(api.setUsers(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}




export let getUser = (token) =>{
    return (dispatch) =>{
        return axios(token).get('/user').then(
            response => store.dispatch(api.setUser(response.data.result.user)),
            error => showError("Error Fetching User")
        );
    }
     
}