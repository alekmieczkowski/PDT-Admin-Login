import axios from './axios_config';
import {store} from '../store/configureStore';
import {showError} from '../services/ErrorService';
import {setPositions} from '../store/actions/admin';

export let getExistingPositions = (token) =>{
    console.log("Get positions");
    return (dispatch) =>{
        return axios(token).get('/positions').then(
            response => store.dispatch(setPositions(response.data.result.positions)),
            error => showError("Error Fetching Positions")
        );
    }
     
}

export let createPosition = (token, position) =>{
    console.log("createPosition: " + position);
    return (dispatch) =>{
        return axios(token).post('/positions',{
            title: position
        }).then(
            response => getExistingPositions(token),
            error => showError("Error Creating Position")
        );
    }
     
}

export let removePosition = (token, position_id) =>{
    console.log("id: " + position_id);
    return (dispatch) =>{
        return axios(token).delete('/positions/'+position_id).then(
            response => null,
            error => showError("Error Removing Position")
        );
    }
     
}