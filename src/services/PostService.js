import {store} from '../store/configureStore';
import { setPostLike } from '../Api/likes';

let token = localStorage.getItem('token');

export function updatePostLike(post_id){
    store.dispatch(setPostLike(token, post_id));
}