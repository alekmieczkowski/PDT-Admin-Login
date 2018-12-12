import * as actionTypes from '../actions/api';
import { CLEAR_STATE } from '../actions/global';
import Comments from '../../components/Blog/Comments/Comments';

let initialState = {
    user: null,
    users: null,
    posts: null,
    calendar: null,
}

const api = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            };
        case actionTypes.SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case actionTypes.SET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case actionTypes.SET_CALENDAR:
            return {
                ...state,
                calendar: action.calendar
            }
        case actionTypes.SET_POST_LIKE:
            return {
                ...state,
                //update post in state
                posts: state.posts.map(post => post.post_id === action.likedPost.post_id ?
                    {
                        //if its the right post
                        ...post,
                        //increment likes
                        likes: action.likedPost.liked ? post.likes + 1 : post.likes - 1,
                        //update is liked by user
                        isLikedByUser: action.likedPost.liked ? true : false,
                    } :
                    //if its not the right post
                    post)

            }
        case actionTypes.SET_COMMENT_LIKE:
            return {
                ...state,

                //iterate through posts
                posts: state.posts.map( post => post.comments.length > 0 ?
                    {
                        ...post,
                        //iterate through comments
                        comments: post.comments.map(comment => comment.comment_id === action.likedComment.comment_id ? {
                            //if correct comment
                            ...comment,
                            //increment likes
                            likes: action.likedComment.liked ? comment.likes + 1 : comment.likes - 1,
                            //update is liked by user
                            isLikedByUser: action.likedComment.liked ? true : false,
                        } : 
                        //if wrong comment return original comment
                        comment),
                    }: post),
            };

        case CLEAR_STATE:
            return initialState;
        default:
            return state;
    }
};

export default api;