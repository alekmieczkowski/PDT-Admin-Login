export const DISPLAY_ERROR = "DISPLAY_ERROR";
export const HIDE_ERROR = "HIDE_ERROR";

export let showErrorOverlay = (errorMessage, errorHeader) =>{
    
    return{
        type: DISPLAY_ERROR,
        errorMessage, errorHeader
    }
}

export let hideErrorOverlay = () =>{
    
    return{
        type: HIDE_ERROR,
    }
}