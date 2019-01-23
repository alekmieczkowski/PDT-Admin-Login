import moment from 'moment';


export function getDateFromString(dateString){
    return dateString.substring(0, 10).split("-").join("/");
}

export function getDateAndTimeFromString(dateString){
    let final = moment.utc(dateString).format("L LT");
    return final;  
}