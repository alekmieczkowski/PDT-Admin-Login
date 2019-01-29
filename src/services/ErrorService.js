import {store} from '../store/configureStore';
import { showErrorOverlay, hideErrorOverlay } from '../store/actions/error';

//show error overlay
export function showError(message, header="Error"){
    store.dispatch(showErrorOverlay(message, header));
}

//hide error overlay
export function hideError(){
    store.dispatch(hideErrorOverlay());
}