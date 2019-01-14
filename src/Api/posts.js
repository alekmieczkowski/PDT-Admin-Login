import axios from './axios_config';
import {store} from '../store/configureStore';
import * as api from '../store/actions/api';
import {showError} from '../services/ErrorService';

export let getPosts = (token) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).get('/posts').then(
            response => store.dispatch(api.setPosts(response.data.result.posts)),
            error => showError("Error Fetching Posts")
        );
    }
     
}

export let removePost = (token, post_id) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).delete('/post/'+post_id).then(
            response => dispatch(getPosts(token)),
            error => showError("Error Deleting Posts")
        );
    }
     
}

export let createPost = (token, post_body) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).post('/post', {
            title: 'No Title',
            content: post_body
        }).then(
            response => dispatch(getPosts(token)),
            error => {showError("Error Creating Post"); console.log(JSON.stringify(error))}
        );
    }
     
}

export let editPost = (token, post_id, post_body)=>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).put('/post/'+post_id,{
            content: post_body
        }).then(
            response => dispatch(getPosts(token)),
            error => {showError("Error Updating Post"); console.log(JSON.stringify(error))}
        );
    }

}