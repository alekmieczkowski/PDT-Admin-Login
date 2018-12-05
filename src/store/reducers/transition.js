import * as transitionActions from '../actions/transition';




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
        default:
            return state;
    }
};

export default transition;