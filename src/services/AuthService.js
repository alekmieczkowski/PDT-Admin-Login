import {store} from '../store/configureStore';
import { userLogout, userLogin, updateToken, setAdmin } from '../store/actions/auth';
import { getActive, getUser } from '../Api/users';
import { getPosts } from '../Api/posts';
import {clearReduxState} from '../store/actions/global';
import {adminLogin} from './AdminService';




export function authHeader() {
    // return authorization header with jwt token
    let token = localStorage.getItem('token');


    if (token) {
        return token;
    } else {
        return false;
    }
}

export function logout() {

    //clear local storage
    localStorage.clear();

    //log user out
    store.dispatch(userLogout());

    //clear redux state and storage
    store.dispatch(clearReduxState());
}

export async function login(token) {

    console.log(token);

    //set Token
    await store.dispatch(updateToken(token));

    //get user
    await store.dispatch(getUser(token));

    //get active users
    await store.dispatch(getActive(token));

    //get posts
    await store.dispatch(getPosts(token));

    //if user is admin then set flag in auth
    if(store.getState().api.user.is_admin){

        //set admin
        await store.dispatch(setAdmin());
        
        //pull all admin stuff
        await adminLogin(token)
       
    }

    //log user in
    store.dispatch(userLogin());


}