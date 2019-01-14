import axios from './axios_config';


export async function getCalendarMonth(token, year, month) {
    let data = null;
    await axios(store.getState().auth.token).get('/calendar/' + year + "/" + month).then(response => {
        data = response.data;
    }).catch(err => {
        data  = err;
    });
    return data;
}
