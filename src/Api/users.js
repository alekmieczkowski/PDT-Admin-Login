import axios from './axios_config';

export async function getUsers(token) {
    let data = null;
    await axios(token).get('/users').then(response => {
        data = response.data;
    }).catch(error => {
        data = error;
    });
    return data;
}

export async function getCurrentUser(token) {
    let data = null;
    await axios(token).get('/user').then(response => {
        data = response.data;
    }).catch(error => {
        data = error;
    });
    return data;
}