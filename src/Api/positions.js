import axios from './axios_config';
import {store} from '../store/configureStore';
import {showError} from '../services/ErrorService';
import {setPositions} from '../store/actions/admin';

export let getExistingPositions = (token) =>{
    return (dispatch) =>{
        return axios(token).get('/positions').then(
            response => store.dispatch(setPositions(response.data.result.positions)),
            error => showError("Error Fetching Positions")
        );
    }
     
}

export let createPosition = (token, position) =>{
    return (dispatch) =>{
        return axios(token).post('/positions',{
            title: position
        }).then(
            response => //store.dispatch(api.setUsers(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}

export let deletePosition = (token, position_id) =>{
    return (dispatch) =>{
        return axios(token).delete('/positions/'+position_id).then(
            response => //store.dispatch(api.setUsers(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}