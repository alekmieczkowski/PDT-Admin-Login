import {store} from '../store/configureStore';
import { showErrorOverlay, hideErrorOverlay } from '../store/actions/error';

//show error overlay
export function showError(message){
    store.dispatch(showErrorOverlay(message));
}

//hide error overlay
export function hideError(){
    store.dispatch(hideErrorOverlay());
}