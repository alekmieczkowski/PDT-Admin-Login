export const SPINNER_START = true;
export const SPINNER_STOP = false;

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