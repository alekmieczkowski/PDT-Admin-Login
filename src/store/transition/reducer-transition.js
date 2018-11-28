import * as transitionActions from './actions-transition';



const transition = (state = {}, action) => {
    switch (action.type) {
        case transitionActions.TRANSITION_START:
            return state = {
                ...state,
                transition: true,
            }

        case transitionActions.TRANSITION_STOP:
            return state = {
                ...state,
                transition: false,
            }
        default:
            return state;
    }
};

export default transition;