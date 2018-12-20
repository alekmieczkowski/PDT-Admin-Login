import axios from './axios_config';
import {store} from '../store/configureStore';
import * as api from '../store/actions/api';
import {showError} from '../services/ErrorService';

export let getUsers = (token) =>{
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