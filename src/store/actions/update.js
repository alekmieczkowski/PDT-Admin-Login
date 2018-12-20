export const UPDATE_POST = "UPDATE_POST";
export const UPDATE_CLOSE = "UPDATE_CLOSE";

export let updatePost = (title,data) =>{

    return{
        type: UPDATE_POST,
        title, data
    }
}

export let closeUpdate = () =>{

    return{
        type: UPDATE_CLOSE,
    }
}