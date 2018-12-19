import {store} from '../store/configureStore';
import { updatePost, closeUpdate } from '../store/actions/update';

//show update screen
export function showUpdate(data){
    let title = "Create Post";
    if(data !== null){
        title = "Update Post";
    }
    store.dispatch(updatePost(title, data));
}

//hide update screen
export function hideUpdate(){
    store.dispatch(closeUpdate());
}