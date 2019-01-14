import axios from './axios_config';
import {getPosts} from './posts';
import {store} from '../store/configureStore';
import {showError} from '../services/ErrorService';


export let setComment = (token, postId, postContent) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).post('/comment',{
            post_id: postId,
            content: postContent
        }).then(
            response => store.dispatch(getPosts(token)),
            error => showError("Error Adding Comment")
        );
    }
     
}

export let deleteComment = (token, commentId) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).delete('/comment/'+commentId
        ).then(
            response => store.dispatch(getPosts(token)),
            error => showError("Error Adding Comment")
        );
    }
     
}

export let editComment = (token, comment_id, comment_body) =>{
    return (dispatch) =>{
        return axios(store.getState().auth.token).put('/comment/'+comment_id,{
            content: comment_body
        }
        ).then(
            response => dispatch(getPosts(token)),
            error => {showError("Error Updating Comment"); console.log(JSON.stringify(error))}
        );
    }
     
}

