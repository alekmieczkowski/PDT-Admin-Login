import * as actionTypes from '../actions/auth';
import {CLEAR_STATE} from '../actions/global';

let initialState = {
    auth: false,
    token: null
}

const auth = ( state = initialState , action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN:
            return{
                ...state,
                auth: true
            };
        case actionTypes.LOGOUT:
        return{
            ...state,
            auth: false,
            token: null
        };
        case actionTypes.UPDATE_TOKEN:
            localStorage.setItem("token", action.token);
            return{
                ...state,
                token: action.token
            }
        case CLEAR_STATE:
            return initialState;
        default: 
            return state;
    }
};

export default auth;