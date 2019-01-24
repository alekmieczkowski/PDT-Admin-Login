import * as confirmationActions from '../actions/confirmation';
import {CLEAR_STATE} from '../actions/global';

let initialState={
    toggleConfirmation: false,
    message: "",
    data: "",
    actionType: null,
    confirmed: null,

}

const confirmation = (state = initialState, action) => {
    switch (action.type) {
        case confirmationActions.DISPLAY_CONFIRMATION:
            return state = {
                ...state,
                confirmed: null,
                toggleConfirmation: true,
                message: action.message,
                data: action.data,
                actionType: action.actionType
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
                confirmed: true,
            }
        case confirmationActions.DECLINE_CONFIRMATION:
            return state ={
                ...state,
                toggleConfirmation: false,
                confirmed: false,
            }
        case confirmationActions.RESET_CONFIRMATION:
            return state ={
                ...state,
                actionType: null,
                confirmed: null,
            }
        case CLEAR_STATE:
            return initialState;
        default:
            return state;
    }
};

export default confirmation;