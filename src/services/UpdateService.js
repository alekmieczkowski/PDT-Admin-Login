import {store} from '../store/configureStore';
import { updatePost, updateUser, closeUpdate } from '../store/actions/update';
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
export function hideUpdate(){
    store.dispatch(closeUpdate());
}

//user updates self
export async function updateSelf(data){
    console.log("update self key: " + token);
    await store.dispatch(updateUserSelf(data));
}