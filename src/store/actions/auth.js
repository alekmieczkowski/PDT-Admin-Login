export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const SET_ADMIN = 'SET_ADMIN'

export let userLogin = () =>{
    
    return{
        type: LOGIN
    }
}


export let userLogout = () =>{
    return{
        type: LOGOUT
    }
}

export let updateToken = (token) =>{
    console.log("Updating token");

    return{
        type: UPDATE_TOKEN,
        token
    }

}

export let setAdmin = () =>{
    return{
        type: SET_ADMIN
    }
}