import {store} from '../store/configureStore';
import { showConfirmationOverlay, acceptConfirmationOverlay, declineConfirmationOverlay, hideConfirmationOverlay} from '../store/actions/confirmation';

//show confirmation overlay
export function showConfirmation(message, type, data){
    store.dispatch(showConfirmationOverlay(message, type, data));
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
