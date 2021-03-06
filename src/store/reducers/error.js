import * as errorActions from '../actions/error';
import {CLEAR_STATE} from '../actions/global';

let initialState={
    toggleError: false,
    message: ""
}

const error = (state = initialState, action) => {
    switch (action.type) {
        case errorActions.DISPLAY_ERROR:
            return state = {
                ...state,
                toggleError: true,
                message: action.errorMessage,
            }

        case errorActions.HIDE_ERROR:
            return state = {
                ...state,
                toggleError: false,
            }
        case CLEAR_STATE:
            return {};
        default:
            return state;
    }
};

export default error;