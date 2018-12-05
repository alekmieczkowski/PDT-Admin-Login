import * as transitionActions from '../actions/transition';
import {CLEAR_STATE} from '../actions/global';



const transition = (state = {}, action) => {
    switch (action.type) {
        case transitionActions.TRANSITION_START:
            return state = {
                ...state,
                pageTransition: true,
            }

        case transitionActions.TRANSITION_STOP:
            return state = {
                ...state,
                pageTransition: false,
            }

        case CLEAR_STATE:
            return {};

        default:
            return state;
    }
};

export default transition;