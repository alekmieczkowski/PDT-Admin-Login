import * as confirmationActions from '../actions/confirmation';
import {CLEAR_STATE} from '../actions/global';

let initialState={
    toggleConfirmation: false,
    message: "",
    type: "",
    data: "",

}

const confirmation = (state = initialState, action) => {
    switch (action.type) {
        case confirmationActions.DISPLAY_CONFIRMATION:
            return state = {
                ...state,
                toggleConfirmation: true,
                message: action.message,
                type: action.confirmationType,
                data: action.data
            }
        case confirmationActions.HIDE_CONFIRMATION:
            return state ={
                ...state,
                toggleConfirmation: false,
            }
        case confirmationActions.ACCEPT_CONFIRMATION:
            return state ={
                ...state,
                toggleConfirmation: false,
            }
        case confirmationActions.DECLINE_CONFIRMATION:
            return state ={
                ...state,
                confirmationAccept: false,
            }
        case CLEAR_STATE:
            return {};
        default:
            return state;
    }
};

export default confirmation;