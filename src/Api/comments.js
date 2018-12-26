import axios from './axios_config';
import {getPosts} from './posts';
import {store} from '../store/configureStore';
import {showError} from '../services/ErrorService';


/*

export async function deleteComment(token, commentId){
    let data = null;
    await axios(token).delete('/comment/'+ commentId, {

    }).then(response => {
        data = response
    }).catch(error => {
        data = error;
    });
    return data;
}

export async function updateComment(token, commentId, content){
    let data = null;
    await axios(token).put('/comment/'+ commentId, {
        content: content
    }).then(response => {
        data = response
    }).catch(error => {
        data = error;
    });
    return data;
}
*/


export let setComment = (token, postId, postContent) =>{
    return (dispatch) =>{
        return axios(token).post('/comment',{
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
        return axios(token).delete('/comment/'+commentId
        ).then(
            response => store.dispatch(getPosts(token)),
            error => showError("Error Adding Comment")
        );
    }
     
}
