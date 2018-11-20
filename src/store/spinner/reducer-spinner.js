import * as actionTypes from './actions-spinner';

const initialState = {
    animateSpinner: false,
    spinnerText: ""
};

const spinner = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.START:
            return {
                animateSpinner: true,
                spinnerText: action.message
            }
        case actionTypes.STOP:
            return {
                animateSpinner: false
            }
        default: 
            return state;
    }
};

export default spinner;