import * as actionTypes from './actions-auth';



const auth = ( state = false , action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN:
            return true;
        case actionTypes.LOGOUT:
            return false;
        default: 
            return state;
    }
};

export default auth;