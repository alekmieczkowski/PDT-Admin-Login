import axios from './axios_config';
import {store} from '../store/configureStore';
import * as api from '../store/actions/api';
import {showError} from '../services/ErrorService';


/*Get Active Users*/
export let getActive = (token) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).get('/users?status=1').then(
            response => store.dispatch(api.setUsers(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}

/*Get Alumni*/
export let getAlumni = (token) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).get('/users?status=2').then(
            response => store.dispatch(api.setAlumni(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}

/*Get Removed Users*/
export let getRemoved = (token) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).get('/users?status=3').then(
            response => store.dispatch(api.setRemoved(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}

/*Get All Users*/
export let getAllUsers = (token) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).get('/users').then(
            response => store.dispatch(api.setUsers(response.data.result.users)),
            error => showError("Error Fetching Users")
        );
    }
     
}

/*Get Specific User*/
export let getUser = (token) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).get('/user').then(
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
            error => showError("Error Updating User")
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
            error => showError("Error Updating User")
        );
    }
}

/*Setting a User as admin*/
export let setAdmin = (userId, shouldBeAdmin) =>{

    return (dispatch)=>{
        return axios(store.getState().auth.token).post('/admin',{
            user_id: userId,
            admin_status: shouldBeAdmin
        }).then(
            response => store.dispatch(api.setUser(response.data.result.user)),
            error => showError("Error Updating Admin Status")
        )
    }

}


/*Change Users Status*/
export let setUserStatus = (userId, status) =>{
    console.log("In set user status, id: " + userId, " status: " + status);
    return (dispatch) =>{
        return axios(store.getState().auth.token).put("/user/"+userId+"/status",{
            status_type: status
        }).then(
            response => null,
            error => showError("Error Setting User Status")
        )
    }
}