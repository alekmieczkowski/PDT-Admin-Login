import * as spinnerActions from '../actions/spinner';
import * as authActions from '../actions/auth';



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

        default:
            return state;
    }
};

export default spinner;