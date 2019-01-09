import * as updateActions from '../actions/update';
import {CLEAR_STATE} from '../actions/global';
import {SET_POSTS, SET_USER} from '../actions/api';

let initialState={
    activePost: false,
    activeUser: false,
    title: "",
    data: null,
    visible: false,
}

const update = (state = initialState, action) => {
    switch (action.type) {
        case updateActions.UPDATE_POST:
            return state = {
                ...state,
                activePost: true,
                title: action.title,
                data: action.data,
                visible: true,
            }
        case updateActions.UPDATE_USER:
            return state = {
                ...state,
                activeUser: true,
                data: action.data,
                visible: true,
            }
        case updateActions.UPDATE_CLOSE:
            return state = {
                ...state,
                //activePost: false,
                //activeUser: false,
                visible: false,
            }
        case updateActions.HIDE_POST:
            return state ={
                ...state,
                //visible: false,
                activePost: false,
            }
        case updateActions.HIDE_USER:
            return state ={
                ...state,
                activeUser: false,
                //visible: false,
            }
        case CLEAR_STATE:
            return {
                activeUser: false,
                activePost: false,
                data: null,
                title: "",
            };

        default:
            return state;
    }
};

export default update;