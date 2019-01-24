import {store} from '../store/configureStore';
import { showConfirmationOverlay, acceptConfirmationOverlay, declineConfirmationOverlay, hideConfirmationOverlay, resetConfirmationOverlay} from '../store/actions/confirmation';

//show confirmation overlay
export function showConfirmation(message, actionType, data){
    store.dispatch(showConfirmationOverlay(message, actionType,  data));
}

//hide confirmation overlay
export async function hideConfirmation(){
    return store.dispatch(hideConfirmationOverlay());
}

//accept confirmation
export function acceptConfirmation(){
    store.dispatch(acceptConfirmationOverlay());
}

//decline confirmation
export function declineConfirmation(){
    store.dispatch(declineConfirmationOverlay());
}


//reset Confirmation data
export function resetConfirmation(){
    store.dispatch(resetConfirmationOverlay());
}