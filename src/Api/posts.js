import axios from './axios_config';
import {store} from '../store/configureStore';
import * as api from '../store/actions/api';
import {showError} from '../services/ErrorService';

export let getPosts = (token) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).get('/posts').then(
            response => store.dispatch(api.setPosts(response.data.result.posts)),
            error => {showError("Error Fetching Posts"); console.log(error)}
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


export let createPost = (post_body, imgArr = []) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).post('/post', {
            title: 'No Title',
            content: post_body
        }).then(
            response => {
                
                //upload images if there are any
                if(imgArr.length > 0){
                    
                    imgArr.forEach(image=>{
                        dispatch(uploadPostImage(response.data.result.post.post_id, image.type, image.blob));
                        
                    })
                }
                
                dispatch(getPosts(store.getState().auth.token));
                        
            },
            error => {showError("Error Creating Post"); console.log(JSON.stringify(error))}
        );
    }
     
}


export let editPost = (post_id, post_body, post_images = [])=>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).put('/post/'+post_id,{
            content: post_body
        }).then(
            response => { //upload images if there are any
                if(post_images.length > 0){
                    
                    post_images.forEach(image=>{
                        dispatch(uploadPostImage(response.data.result.post.post_id, image.type, image.blob));
                        
                    })
                }
                
                dispatch(getPosts(store.getState().auth.token));},
            error => {showError("Error Updating Post"); console.log(JSON.stringify(error))}
        );
    }

}

export let uploadPostImage = (post_id, contentType, image)=>{
    return (dispatch) =>{
        return axios(store.getState().auth.token, contentType).post('/post/'+post_id+'/image',
            image
        ).then(
            response => true,
            error => {showError("Error Uploading Image"); console.log(JSON.stringify(error))}
        );
    }

}

export let deleteImage = (imageURL)=>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).delete(process.env.REACT_APP_SERVER_IP+imageURL).then(
            response => dispatch(getPosts(store.getState().auth.token)),
            error => {showError("Error Deleting Image"); console.log(JSON.stringify(error))}
        );
    }
}

export let updateImage = (imageURL, contentType, newImageBlob) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token, contentType).put(imageURL, newImageBlob).then(
            response => true,
            error => {showError("Error Updating Image"); console.log(error)}
        );
    }
}