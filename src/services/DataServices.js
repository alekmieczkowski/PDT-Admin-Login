


//filters out array data based on search value. DOES MUTATE ORIGINAL ARRAY 
export function filterObjArrayByValue(array, value){

    //copy data to new variable
    let arrOld = [...array];
    //filter data to only include values that are searched
    let arrNew = arrOld.filter(data =>JSON.stringify(data).includes(value));
     console.log("og array after: " + array);
    return arrNew;
}