import {store} from '../store/configureStore';
import { updatePost, updateUser, closeUpdate } from '../store/actions/update';

//show update screen
export function editPost(data){
    let title = "Create Post";
    if(data !== null){
        title = "Update Post";
    }
    store.dispatch(updatePost(title, data));
}

export function editUser(data){
    store.dispatch(updateUser(data));
}

//hide update screen
export function hideUpdate(){
    store.dispatch(closeUpdate());
}