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
        case actionTypes.SET_POST_LIKE:
            
            return{
                ...state,


                //update post in state
                posts: state.posts.map(post => post.post_id === action.likedPost.post_id ?
                    {
                        //if its the right post
                        ...post,
                        //increment likes
                        likes: action.likedPost.liked ? post.likes +1 : post.likes -1,
                        //update is liked by user
                        isLikedByUser: action.likedPost.liked ? true: false,
                    } : 
                    //if its not the right post
                    post)
            }
        case CLEAR_STATE:
            return initialState;
        default: 
            return state;
    }
};

export default api;