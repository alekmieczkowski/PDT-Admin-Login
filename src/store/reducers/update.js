import * as updateActions from '../actions/update';
import {CLEAR_STATE} from '../actions/global';


let initialState={
    active: false,
    title: "",
    data: null,
}

const update = (state = initialState, action) => {
    switch (action.type) {
        case updateActions.UPDATE_POST:
            return state = {
                ...state,
                active: true,
                title: action.title,
                data: action.data,
            }

        case updateActions.UPDATE_CLOSE:
            return state = {
                ...state,
                active: false,
                //title: "",
                //data: null,
            }
        case CLEAR_STATE:
            return {};

        default:
            return state;
    }
};

export default update;