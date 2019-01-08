import {store} from '../store/configureStore';
import {startSpinner, stopSpinner} from '../store/actions/spinner';

//show error overlay
export async function showLoading(message){
    console.log("In show loading");
        return store.dispatch(startSpinner(message));

}

//hide error overlay
export async function hideLoading(){
        return store.dispatch(stopSpinner());

}