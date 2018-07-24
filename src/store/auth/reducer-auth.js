import * as actionTypes from './actions-auth';

const initialState = {
    authenticated: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN:
            return {
                authenticated: true
            }
        case actionTypes.LOGOUT:
            return {
                authenticated: false
            }
        default: 
            return state;
    }
};

export default reducer;