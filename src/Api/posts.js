import axios from './axios_config';
import {store} from '../store/configureStore';
import * as api from '../store/actions/api';
import {showError} from '../services/ErrorService';

/*
export async function getPosts(token) {
    let data = null;
    await axios(token).get('/posts').then(response => {
        data = response.data;
    }).catch(err => {
        data  = err;
    });
    return data;
}

export async function createPost(token, content) {
    let data = null;
    await axios(token).post('/post', {
        title: 'No Title',
        content: content
    }).then(response => {
        data = response.data;
    }).catch(error => {
        data = error;
    });
    return data;
}

export async function deletePost(token, postId){
    let data = null;
    await axios(token).delete('/post/'+postId)
    .then(response => {
        data = response.data;
    }).catch(error => {
        data = error;
    });
    return data;
}

export async function updatePost(token, postId, content) {
    let data = null;
    await axios(token).put('/post/' + postId, {
        content: content,
    }).then(response => {
        data = response.data;
    }).catch(error => {
        data = error;
    });
    return data;
}


----------------------------------------*/

export let getPosts = (token) =>{
    return (dispatch) =>{
        return axios(token).get('/posts').then(
            response => store.dispatch(api.setPosts(response.data.result.posts)),
            error => showError("Error Fetching Posts")
        );
    }
     
}

export let removePost = (token, post_id) =>{
    return (dispatch) =>{
        return axios(token).delete('/post/'+post_id).then(
            response => store.dispatch(api.setPosts(response.data.result.posts)),
            error => showError("Error Deleting Posts")
        );
    }
     
}