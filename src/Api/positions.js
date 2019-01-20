import axios from './axios_config';
import {store} from '../store/configureStore';
import {showError} from '../services/ErrorService';
import {setPositions} from '../store/actions/admin';

export let getExistingPositions = (token) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).get('/positions').then(
            response => store.dispatch(setPositions(response.data.result.positions)),
            error => {showError("Error Fetching Positions"); console.log(error)}
        );
    }
     
}

export let createPosition = (token, position) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).post('/positions',{
            title: position
        }).then(
            response => getExistingPositions(token),
            error => showError("Error Creating Position")
        );
    }
     
}

export let removePosition = (token, position_id) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).delete('/positions/'+position_id).then(
            response => null,
            error => showError("Error Removing Position")
        );
    }
     
}