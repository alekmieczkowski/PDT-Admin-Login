import {store} from '../store/configureStore';
import { setPostLike, setCommentLike } from '../Api/likes';
import {setComment, deleteComment, editComment} from '../Api/comments';
import {removePost, createPost, editPost, getPosts} from '../Api/posts';
import * as loadingService from './LoadingService';
import {resetConfirmation, hideConfirmation} from './ConfirmationService';
import {hideUpdatePost} from './UpdateService';
import {SUBMIT_POST, UPDATE_POST, DELETE_POST} from '../store/actions/api';



let token = localStorage.getItem('token');

//create subscriber that checks when to add new posts and update posts
store.subscribe(()=>{

    //check if confirmation message has been accepted
    if(store.getState().confirmation.confirmed === true){

        //switch statement to determine what to run
        switch(store.getState().confirmation.actionType){
            case SUBMIT_POST:
                resetConfirmation();
                addPost(store.getState().confirmation.data);
                break;
            case UPDATE_POST:
                resetConfirmation();
                updatePost(store.getState().confirmation.data);
                break;
            case DELETE_POST:
                resetConfirmation();
                deletePost(store.getState().confirmation.data);
                break;
            default:
                break;
        }
    }

});


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

//delete comment
export async function removeComment(commentId){
    await store.dispatch(deleteComment(token, commentId));
}

//update comment
export async function updateComment(commentId, body){
    await store.dispatch(editComment(token, commentId, body));
}

//remove post
export async function deletePost(post_id){

    await loadingService.showLoading("Deleting Post");

    await hideConfirmation();

    await store.dispatch(removePost(token, post_id));

    await loadingService.hideLoading();
}

export async function addPost(data){

    await hideUpdatePost();
    
    await loadingService.showLoading("Creating Post");

    await store.dispatch(createPost(data.content, data.images));

    await loadingService.hideLoading();
}

export async function updatePost(post){

    await hideUpdatePost();
  
    await loadingService.showLoading("Updating Post");
  
    await store.dispatch(editPost(token, post.post_id, post.content));
    
    await loadingService.hideLoading();
    
}

export async function getLatestPosts(){
    await store.dispatch(getPosts('s'));
}