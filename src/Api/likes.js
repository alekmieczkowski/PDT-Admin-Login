import axios from './axios_config';
import {store} from '../store/configureStore';
import * as api from '../store/actions/api';
import {showError} from '../services/ErrorService';


export let setPostLike = (token, postId) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).post('/like',{
            post_id: postId
        }).then(
            response => {

                let postLiked = true;
                
                //if post has been unliked
                if(typeof response.data.result.like === 'undefined'){
                    postLiked = false;
                }
                
                //send dispatch
                store.dispatch(api.setPostLike({post_id: postId, liked: postLiked}));
            },
            error => showError("Error Adding Like")
        );
    }
}

export let setCommentLike = (token, commentId) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).post('/like',{
            comment_id: commentId
        }).then(
            response => {

                let commentLiked = true;

                //if post has been unliked
                if(typeof response.data.result.like === 'undefined'){
                    commentLiked = false;
                }
                
                //send dispatch
                store.dispatch(api.setCommentLike({comment_id: commentId, liked: commentLiked}));
            },
            error => showError("Error Adding Like")
        );
    }
}