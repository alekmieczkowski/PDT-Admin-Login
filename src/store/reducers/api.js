import * as actionTypes from '../actions/api';
import {CLEAR_STATE} from '../actions/global';

let initialState = {
    user: null,
    users: null,
    posts: null,
    calendar: null,
}

const api = ( state = initialState , action ) => {
    switch ( action.type ) {
        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user
            };
        case actionTypes.SET_USERS:
        return{
            ...state,
            users: action.users
        };
        case actionTypes.SET_POSTS:
            return{
                ...state,
                posts: action.posts
            }
        case actionTypes.SET_CALENDAR:
            return{
                ...state,
                calendar: action.calendar
            }
        case CLEAR_STATE:
            return initialState;
        default: 
            return state;
    }
};

export default api;