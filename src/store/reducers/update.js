import * as updateActions from '../actions/update';
import {CLEAR_STATE} from '../actions/global';
import {SET_POSTS, SET_USER} from '../actions/api';

let initialState={
    activePost: false,
    activeUser: false,
    title: "",
    data: null,
}

const update = (state = initialState, action) => {
    switch (action.type) {
        case updateActions.UPDATE_POST:
            return state = {
                ...state,
                activePost: true,
                title: action.title,
                data: action.data,
            }
        case updateActions.UPDATE_USER:
            return state = {
                ...state,
                activeUser: true,
                data: action.data,
            }
        case updateActions.UPDATE_CLOSE:
            return state = {
                ...state,
                activePost: false,
                activeUser: false,
            }
        case SET_POSTS:
            return state ={
                ...state,
                activePost: false,
            }
        case SET_USER:
            return state ={
                ...state,
                activeUser: false,
            }
        case CLEAR_STATE:
            return {};

        default:
            return state;
    }
};

export default update;