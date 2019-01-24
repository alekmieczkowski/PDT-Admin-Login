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

export let createPost = (post_body, imgArr) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).post('/post', {
            title: 'No Title',
            content: post_body
        }).then(
            response => {
                //upload images if there are any
                console.log(imgArr);
                console.log(JSON.stringify(response));
                if(imgArr.length > 0){
                    
                    imgArr.forEach(image=>{
                        console.log(image);
                        dispatch(uploadPostImage(response.data.result.post.post_id, image.type, image.blob));
                        
                    })
                }
                dispatch(getPosts(store.getState().auth.token));
                        
            },
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

export let getPostImage = (imageURL)=>{
    console.log("Calling get Post Image");
        return axios(store.getState().auth.token, 'application/json' ,"blob").get(imageURL).then(
            response =>  {
                console.log(response);
                let reader = new FileReader();
                reader.readAsDataURL(response.data); 
                reader.onload = () => {
                    return reader.result;
                }
                
                

              // console.log(response); return response; Buffer.from(response.data, 'binary').toString('base64');
                
            },
            error => {showError("Error Fetching Image"); console.log(JSON.stringify(error))}
        );
}