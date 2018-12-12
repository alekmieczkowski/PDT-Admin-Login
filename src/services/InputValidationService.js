
//return true if input is not empty string, undefined, or null
export function isValidInput(input){

    if(input === null || typeof input === 'undefined' || input.trim().length === 0){
        return false;
    }
    return true;
}