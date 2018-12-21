export let REQUESTS = "JOIN_REQUESTS";
export let GET_POSITIONS = "GET_POSITIONS";

export let setUserRequests = (data) =>{
    return{
        type: REQUESTS,
        data
    }
}

export let setPositions = (data) =>{
    console.log("Set Positions")
    return{
        type: GET_POSITIONS,
        data
    }
    
}
