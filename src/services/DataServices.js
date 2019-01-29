


//filters out array data based on search value.
export function filterObjArrayByValue(array, value){

    //copy data to new variable
    let arrOld = JSON.parse(JSON.stringify(array));
    //filter data to only include values that are searched
    let arrNew = arrOld.filter(data =>JSON.stringify(data).includes(value));

    return arrNew;
}

export function standardizeBond(bondNumber){
    console.log(bondNumber);
    let num = bondNumber + "";
    let pad = "0000"
    let ans = pad.substring(0, pad.length - num.length) + num;
    console.log(ans);
    return ans; 
}