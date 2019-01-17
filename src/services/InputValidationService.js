
//return true if input is not empty string, undefined, or null
export function isValidInput(input){

    if(input === null || typeof input === 'undefined' || input.trim().length === 0){
        return false;
    }
    return true;
}

export function isValidPhoneNumber(input){
    if(input === null ||input.length !== 10 || input.match(/[a-z]/i)){
        return false;
    }
    return true;
}

export function isValidBondNumber(input){

    if(input === null || input.length > 4 || input.length <= 0 || input.match(/[a-z]/i)){
        return false;
    }
    return true;
}