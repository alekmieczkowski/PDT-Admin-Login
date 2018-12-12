import {store} from '../store/configureStore';
import { setPostLike, setCommentLike } from '../Api/likes';

let token = localStorage.getItem('token');

export function updatePostLike(post_id){
    store.dispatch(setPostLike(token, post_id));
}

export function updateCommentLike(comment_id){
    store.dispatch(setCommentLike(token, comment_id));
}