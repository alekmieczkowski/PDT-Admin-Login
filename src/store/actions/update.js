export const UPDATE_POST = "UPDATE_POST";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_CLOSE = "UPDATE_CLOSE";
export const HIDE_USER = "HIDE_USER";
export const HIDE_POST = "HIDE_POST";

export let updatePost = (title,data) =>{

    return{
        type: UPDATE_POST,
        title, data
    }
}

export let updateUser = (data)=>{
    return{
        type: UPDATE_USER,
        data
    }
}

export let closeUpdate = () =>{

    return{
        type: UPDATE_CLOSE,
    }
}

export let hideUserUpdate = () =>{
    return{
        type: HIDE_USER,
    }
}

export let hidePostUpdate = () =>{
    return{
        type: HIDE_POST,
    }
}