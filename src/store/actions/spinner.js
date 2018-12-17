export const SPINNER_START = "LOADING_START";
export const SPINNER_STOP = "LOADING_STOP";

export let startSpinner = (spinnerText) =>{

    return{
        type: SPINNER_START,
        spinnerText
    }
}

export let stopSpinner = () =>{

    return{
        type: SPINNER_STOP,
    }
}