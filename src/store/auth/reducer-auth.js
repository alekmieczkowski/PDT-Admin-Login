import * as actionTypes from './actions-auth';
import { isNullOrUndefined } from 'util';

let token = JSON.parse(localStorage.getItem('token'));
const initialState = isNullOrUndefined(token) ? false : true;

console.log("auth state: "+ initialState);
const auth = ( state = initialState , action ) => {
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