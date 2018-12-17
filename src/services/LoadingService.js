import {store} from '../store/configureStore';
import {startSpinner, stopSpinner} from '../store/actions/spinner';

//show error overlay
export function showLoading(message){
    store.dispatch(startSpinner(message));
}

//hide error overlay
export function hideLoading(){
    store.dispatch(stopSpinner());
}