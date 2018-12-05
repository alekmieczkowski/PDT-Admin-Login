export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';

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

    return{
        type: UPDATE_TOKEN,
        token
    }

}