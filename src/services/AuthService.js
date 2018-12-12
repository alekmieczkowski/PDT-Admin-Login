import {store} from '../store/configureStore';
import { userLogout, userLogin, updateToken } from '../store/actions/auth';
import { getUsers, getUser } from '../Api/users';
import { getPosts } from '../Api/posts';
import {clearReduxState} from '../store/actions/global';




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

    //get users
    await store.dispatch(getUsers(token));

    //get posts
    await store.dispatch(getPosts(token));

    //log user in
    store.dispatch(userLogin());


}