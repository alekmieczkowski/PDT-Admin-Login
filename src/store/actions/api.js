export const SET_USER = "SET_USER";
export const SET_USERS = "SET_USERS";
export const SET_POSTS = "SET_POSTS";
export const SET_CALENDAR = "SET_CALENDAR";

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


