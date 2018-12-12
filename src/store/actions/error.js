export const DISPLAY_ERROR = "DISPLAY_ERROR";
export const HIDE_ERROR = "HIDE_ERROR";

export let showErrorOverlay = (errorMessage) =>{
    
    return{
        type: DISPLAY_ERROR,
        errorMessage
    }
}

export let hideErrorOverlay = () =>{
    
    return{
        type: HIDE_ERROR,
    }
}