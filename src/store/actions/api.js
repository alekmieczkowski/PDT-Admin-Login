export const SET_USER = "SET_USER";
export const SET_USERS = "SET_USERS";
export const SET_POSTS = "SET_POSTS";
export const SET_CALENDAR = "SET_CALENDAR";
export const SET_POST_LIKE="SET_POST_LIKE";
export const SET_COMMENT_LIKE="SET_COMMENT_LIKE";
export const SUBMIT_COMMENT="SET_COMMENT"


export let setUsers = (users) =>{
    
    return{
        type: SET_USERS,
        users
    }
}

export let setUser = (user) =>{
    return{
        type: SET_USER,
        user
    }
}

export let setPosts = (posts) =>{
    
    return{
        type: SET_POSTS,
        posts
    }
}

export let setCalendar = (calendar) =>{
    
    return{
        type: SET_CALENDAR,
        calendar
    }
}

export let setPostLike = (likedPost) =>{
    return{
        type: SET_POST_LIKE,
        likedPost

    }
    
}

export let setCommentLike = (likedComment) =>{
    console.log(JSON.stringify(likedComment));
    return{
        type: SET_COMMENT_LIKE,
        likedComment

    }
    
}

