export const DISPLAY_CONFIRMATION = "DISPLAY_CONFIRMATION";
export const HIDE_CONFIRMATION = "HIDE_CONFIRMATION";
export const ACCEPT_CONFIRMATION = "ACCEPT_CONFIRMATION";
export const DECLINE_CONFIRMATION = "DECLINE_CONFIRMATION";

export let showConfirmationOverlay = (message, confirmationType, data) =>{
    
    return{
        type: DISPLAY_CONFIRMATION,
        message, confirmationType, data
    }
}

export let hideConfirmationOverlay = () =>{
    
    return{
        type: HIDE_CONFIRMATION,
    }
}


export let acceptConfirmationOverlay = () =>{
    
    return{
        type: ACCEPT_CONFIRMATION,
    }
}

export let declineConfirmationOverlay = () =>{
    
    return{
        type: DECLINE_CONFIRMATION,
    }
}