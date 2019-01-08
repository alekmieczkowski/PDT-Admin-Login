import axios from './axios_config';
import {store} from '../store/configureStore';
import * as api from '../store/actions/api';
import {showError} from '../services/ErrorService';


/*Get Active Users*/
export let getActive = (token) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).get('/users/1').then(
            response => store.dispatch(api.setUsers(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}

/*Get Alumni*/
export let getAlumni = (token) =>{
    return (dispatch) =>{
        return axios(token).get('/users/2').then(
            response => store.dispatch(api.setAlumni(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}

/*Get Removed Users*/
export let getRemoved = (token) =>{
    return (dispatch) =>{
        return axios(token).get('/users').then(
            response => store.dispatch(api.setUsers(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}

/*Get All Users*/
export let getAllUsers = (token) =>{
    return (dispatch) =>{
        return axios(token).get('/users').then(
            response => store.dispatch(api.setUsers(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}

/*Get Specific User*/
export let getUser = (token) =>{
    return (dispatch) =>{
        return axios(token).get('/user').then(
            response => store.dispatch(api.setUser(response.data.result.user)),
            error => showError("Error Fetching User")
        );
    }
     
}

/*Update User Self
Returns user with updated information
*/
export let updateUserSelf = (userObj) =>{

    return (dispatch)=>{
        return axios(store.getState().auth.token).put('/user', userObj).then(
            response => store.dispatch(api.setUser(response.data.result.user)),
            error => showError("Error Fetching User")
        );
    }
}


/*Update User By Admin
Returns user with updated information
*/
export let updateUserAdmin = (userId, userObj) =>{

    return (dispatch)=>{
        return axios(store.getState().auth.token).put('/user/'+userId, userObj).then(
            response => store.dispatch(api.setUser(response.data.result.user)),
            error => showError("Error Fetching User")
        );
    }
}