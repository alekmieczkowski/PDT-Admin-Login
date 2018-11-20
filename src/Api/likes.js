import axios from './axios_config';

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