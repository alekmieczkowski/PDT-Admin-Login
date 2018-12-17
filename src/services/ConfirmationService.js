import {store} from '../store/configureStore';
import { showConfirmationOverlay, acceptConfirmationOverlay, declineConfirmationOverlay, hideConfirmationOverlay} from '../store/actions/confirmation';

//show confirmation overlay
export function showConfirmation(message){
    return store.dispatch(showConfirmationOverlay(message));
}

//hide confirmation overlay
export function hideConfirmation(){
    store.dispatch(hideConfirmationOverlay());
}

//accept confirmation
export function acceptConfirmation(){
    store.dispatch(acceptConfirmationOverlay());
}

//decline confirmation
export function declineConfirmation(){
    store.dispatch(declineConfirmationOverlay());
}
