export let REQUESTS = "JOIN_REQUESTS";
export let GET_POSITIONS = "GET_POSITIONS";
export let STATUS_ACTIVE = 1;
export let STATUS_REMOVE = 3;
export let STATUS_ALUMNI = 2;


export let setUserRequests = (data) =>{
    return{
        type: REQUESTS,
        data
    }
}

export let setPositions = (data) =>{
    return{
        type: GET_POSITIONS,
        data
    }
    
}
