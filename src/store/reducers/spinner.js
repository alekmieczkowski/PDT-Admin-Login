import * as spinnerActions from '../actions/spinner';
import {CLEAR_STATE} from '../actions/global';


const spinner = (state = {}, action) => {
    switch (action.type) {
        case spinnerActions.SPINNER_START:
            return state = {
                ...state,
                animateSpinner: true,
                spinnerText: action.spinnerText,
            }

        case spinnerActions.SPINNER_STOP:
            return state = {
                ...state,
                animateSpinner: false,
            }
        case CLEAR_STATE:
            return {};

        default:
            return state;
    }
};

export default spinner;