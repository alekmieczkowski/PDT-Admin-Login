import {store} from '../store/configureStore';
import { updatePost, updateUser, closeUpdate, hideUserUpdate,hidePostUpdate } from '../store/actions/update';
import {updateUserSelf} from '../Api/users';

let token = store.getState().auth.token;

//show update screen
export function editPost(data){
    let title = "Create Post";
    if(data !== null){
        title = "Update Post";
    }
    store.dispatch(updatePost(title, data));
}

export async function editUser(data){
    await store.dispatch(updateUser(data));
}

//hide update screen
export async function hideUpdateUser(){
      await store.dispatch(closeUpdate());

     //hide user
     setTimeout(
        function() {
         store.dispatch(hideUserUpdate());
        }
        .bind(this),
        800
    );
     
}

//hide update screen
export async function hideUpdatePost(){
     store.dispatch(closeUpdate());

     //hide user
     setTimeout(
        function() {
         store.dispatch(hidePostUpdate());
        }
        .bind(this),
        500
    );
}

//user updates self
export async function updateSelf(data){
    await store.dispatch(updateUserSelf(data));
}