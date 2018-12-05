import axios from './axios_config';
import {store} from '../store/configureStore';
import * as api from '../store/actions/api';


export let getUsers = (token) =>{
    return (dispatch) =>{
        return axios(token).get('/users').then(
            response => store.dispatch(api.setUsers(response.data.result.users)),
            error => console.log(error)
        );
    }
     
}


export let getUser = (token) =>{
    return (dispatch) =>{
        return axios(token).get('/user').then(
            response => store.dispatch(api.setUser(response.data.result.user)),
            error => console.log(error)
        );
    }
     
}