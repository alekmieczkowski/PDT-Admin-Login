export let REQUESTS = "JOIN_REQUESTS";

export let setUserRequests = (data) =>{
    return{
        type: REQUESTS,
        data
    }
}