import {store} from '../store/configureStore';
import { setPostLike, setCommentLike } from '../Api/likes';
import {setComment} from '../Api/comments';
import {removePost} from '../Api/posts';
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
    console.log("in delete post: " + post_id);

        console.log("Made it into return");
        await loadingService.showLoading("Deleting Post");

        await hideConfirmation();

        await store.dispatch(removePost(token, post_id));

        await loadingService.hideLoading();


        /*
        return dispatch(loadingService.showLoading("Deleting Post"))
          .then(()=> 
            dispatch(hideConfirmation()) 
          ).then(()=> 
            dispatch(removePost(token, post_id))   
          ).then(()=>
            dispatch(loadingService.hideLoading())
          );
          
    }
    /*
    return (dispatch, getState) =>{
        console.log("Made it in the return");
        return dispatch(startSpinner("Deleting Post"))
          .then(()=> 
            dispatch(hideConfirmationOverlay())
          ).then(()=> 
            dispatch(removePost(token, post_id))   
          ).then(()=>
            dispatch(stopSpinner())
          );
          
    }
   

   
    /*
     return store.dispatch(loadingService.showLoading("Deleting Post")).then(

       response => store.dispatch(removePost(token, post_id)).then(
           response => store.dispatch(loadingService.hideLoading()),
           error => showError("Error Deleting Post")
       ),
       error => showError("Error Deleting Post")
    ) 

    /*
     return (dispatch, getState) =>{
        return store.dispatch(loadingService.showLoading("Deleting Post")
          ).then(()=> 
            store.dispatch(hideConfirmation()) 
          ).then(()=> 
            store.dispatch(removePost(token, post_id))   
          ).then(()=>
            store.dispatch(loadingService.hideLoading())
          );
          
    }


    /*
    
    */
}