import axios from './axios_config';

export async function getPosts(token) {
    let data = null;
    await axios(token).get('/posts').then(response => {
        data = response.data;
    }).catch(err => {
        data  = err;
    });
    return data;
}

export async function createPost(token, content) {
    let data = null;
    await axios(token).post('/post', {
        title: 'No Title',
        content: content
    }).then(response => {
        data = response.data;
    }).catch(error => {
        data = error;
    });
    return data;
}

export async function deletePost(token, postId){
    await axios(token).delete('/post/'+postId)
    .then(response => {
        data = response.data;
    }).catch(error => {
        data = error;
    });
    return data;
}

export async function updatePost(token, postId, content) {
    let data = null;
    await axios(token).put('/post/' + postId, {
        content: content,
    }).then(response => {
        data = response.data;
    }).catch(error => {
        data = error;
    });
    return data;
}