import {store} from '../store/configureStore';
import { setPostLike, setCommentLike } from '../Api/likes';
import {setComment} from '../Api/comments';

let token = localStorage.getItem('token');


//send post like data to server and update local state data
export function updatePostLike(post_id){
    store.dispatch(setPostLike(token, post_id));
}

//send comment like data to server and update local state data
export function updateCommentLike(comment_id){
    store.dispatch(setCommentLike(token, comment_id));
}


//submit comment and get new comment data
export async function addComment(post_id, content){
    await store.dispatch(setComment(token, post_id, content));
}