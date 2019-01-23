import {store} from '../store/configureStore';
import { userLogout, userLogin, updateToken, setAdmin } from '../store/actions/auth';
import { getActive, getUser } from '../Api/users';
import { getPosts } from '../Api/posts';
import {clearReduxState} from '../store/actions/global';
import {adminLogin} from './AdminService';
import {showLoading, hideLoading} from './LoadingService';
import React, {Component} from 'react';
/* global gapi */

let googleObj = null;

let timeoutLoop = null;


//run function to refresh google token if page is reloaded and user was signed in
window.onload = function(){
    
    if(store.getState().auth.auth){
       getGoogleTokenOnReload();
    }
  };


  //creates new gapi object using client ID, and signs user in. 
  export function getGoogleTokenOnReload(){
    
      setTimeout(() => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({client_id: process.env.REACT_APP_CLIENT_ID, scope: 'profile'}).then(
                res=>{
                    let resNew = res.currentUser.get();
                    const authResponse = resNew.getAuthResponse();
                    resNew.tokenObj = authResponse;
                    resNew.tokenId = authResponse.id_token;
                    resNew.accessToken = authResponse.access_token;
                    saveGoogleLogin(resNew);
                }
            )
        })}, 2000);
    
  }

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

    //clear google login
    clearGoogleLogin();

    //log user out
    store.dispatch(userLogout());

    //clear redux state and storage
    store.dispatch(clearReduxState());


}



export async function login(token) {

    //showLoading
    showLoading("Fetching Data");

    //set Token
    await store.dispatch(updateToken(token));

    //get user
    await store.dispatch(getUser(token));

    //if user is admin then set flag in auth
    if(store.getState().api.user.is_admin){

        //set admin
        await store.dispatch(setAdmin());
        
        //pull all admin stuff
        await adminLogin(token)
       
    }

    //get active users
    await store.dispatch(getActive(token));

    //get posts
    await store.dispatch(getPosts(token));

    

    

    //log user in
    store.dispatch(userLogin());

    //hide loading
    hideLoading();


}

export async function saveGoogleLogin(response) {

    //save response as object locally
    googleObj = response;

    setRefreshTimeout(response.tokenObj.expires_at);

}

export async function clearGoogleLogin(){
    googleObj = null;
}


let setRefreshTimeout = (expiresAt) => {
    // Either 5 minutes before the deadline, or 5 minutes from now. This
    // should prevent thrashing while keeping the credentials fresh.
    const oneMin = 60 * 1000;
    var refreshDeadline =  Math.max(
      5*oneMin,
      expiresAt - Date.now() - (5*oneMin));

    timeoutLoop = setTimeout(reloadAuthToken, refreshDeadline);
  }

let reloadAuthToken = () => {
    
    if(store.getState().auth.auth){

            googleObj.reloadAuthResponse().then(
                // success handler.
                (authResponse) => {
                  // The GoogleUser is mutated in-place, this callback updates component state.
                  this.accessToken = authResponse.id_token;
                  store.dispatch(updateToken(authResponse.id_token));
                  setRefreshTimeout(authResponse.expires_at);
                },
                // fail handler.
                (failResponse) => {
                   this.accessToken = "";
                   console.log("Could not refresh token");
                   console.log(failResponse);
                }
              );  
    }
    else{
        clearTimeout(timeoutLoop);
    }
   
  }