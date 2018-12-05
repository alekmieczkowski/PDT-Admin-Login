import * as transitionActions from '../actions/transition';




const transition = (state = {}, action) => {
    switch (action.type) {
        case transitionActions.TRANSITION_START:
            console.log("Transition on");
            return state = {
                ...state,
                pageTransition: true,
            }

        case transitionActions.TRANSITION_STOP:
        console.log("Transition off");
            return state = {
                ...state,
                pageTransition: false,
            }
        default:
            return state;
    }
};

export default transition;