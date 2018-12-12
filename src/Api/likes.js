import axios from './axios_config';
import {store} from '../store/configureStore';
import * as api from '../store/actions/api';

/*
export async function setPostLike(token, postId) {
    let data = null;
    await axios(token).post('/like', {
        post_id: postId,
    }).then(response => {
        data = response
    }).catch(error => {
        data = error;
    });
    return data;
}

export async function setCommentLike(token, commentId){
    let data = null;
    await axios(token).post('/like', {
        comment_id: commentId    
    }).then(response => {
        data = response
    }).catch(error => {
        data = error;
    });
    return data;
}
*/

export let setPostLike = (token, postId) =>{
    return (dispatch) =>{
        return axios(token).post('/like',{
            post_id: postId
        }).then(
            response => {
                console.log(JSON.stringify(response));
                let postLiked = true;
                //if post has been unliked
                if(typeof response.data.result.like === 'undefined'){
                    postLiked = false;
                }
                
                //send dispatch
                store.dispatch(api.setPostLike({post_id: postId, liked: postLiked}));
            },
            error => console.log(error)
        );
    }
}