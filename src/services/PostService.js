import {store} from '../store/configureStore';
import { setPostLike, setCommentLike } from '../Api/likes';
import {setComment} from '../Api/comments';
import {removePost, createPost, editPost} from '../Api/posts';
import * as loadingService from './LoadingService';
import {hideConfirmation} from './ConfirmationService';



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

//remove post
export async function deletePost(post_id){

    await loadingService.showLoading("Deleting Post");

    await hideConfirmation();

    await store.dispatch(removePost(token, post_id));

    await loadingService.hideLoading();
}

export async function addPost(data){
    
    await hideConfirmation();
  
    await loadingService.showLoading("Creating Post");

    await store.dispatch(createPost(token, data));

    await loadingService.hideLoading();
    
}

export async function updatePost(post){

    await hideConfirmation();
  
    await loadingService.showLoading("Updating Post");
  
    await store.dispatch(editPost(token, post.post_id, post.content));
  
    await loadingService.hideLoading();
    
}