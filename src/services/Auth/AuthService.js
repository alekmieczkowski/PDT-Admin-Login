import { store } from '../../index';
import { userLogout, userLogin, updateToken } from '../../store/actions/auth';
import * as api from '../../store/actions/api';
import { getUsers, getUser } from '../../Api/users';
import { getPosts } from '../../Api/posts';




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
    localStorage.clear();
    store.dispatch(userLogout());
}

export async function login(token) {

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