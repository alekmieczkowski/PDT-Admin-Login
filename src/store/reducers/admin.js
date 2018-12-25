import * as adminTypes from '../actions/admin';
import {CLEAR_STATE} from '../actions/global';

let initialState = {
    requests: [],
    positions: []
}

const admin = ( state = initialState , action ) => {
    switch ( action.type ) {
        case adminTypes.REQUESTS:
            return{
                ...state,
                requests: action.data
            };
        case adminTypes.GET_POSITIONS:
            return{
                ...state,
                positions: action.data
            }
        case CLEAR_STATE:
            return{};
        default:
            return state;
    }
}

export default admin;