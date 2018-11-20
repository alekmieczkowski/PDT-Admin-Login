import * as spinnerActions from './actions-spinner';
import * as authActions from '../auth/actions-auth';



const spinner = (state = {}, action) => {
    switch (action.type) {
        case spinnerActions.START:
            return state = {
                ...state,
                animateSpinner: true,
                spinnerText: action.payload.spinnerText,
                pauseLoad: action.payload.pauseLoad
            }

        case spinnerActions.STOP:
            return state = {
                ...state,
                animateSpinner: false,
                pauseLoad: false,
            }

        case authActions.LOGIN:
            return state = {
                ...state,
                animateSpinner: true,
                spinnerText: action.payload.spinnerText,
                pauseLoad: action.payload.pauseLoad
            }
        default:
            return state;
    }
};

export default spinner;