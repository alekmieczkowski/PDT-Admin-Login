import axios from 'axios';


export default  function axiosInstance(token, contentType= 'application/json'){
    let instance = axios.create({
        baseURL: process.env.REACT_APP_SERVER_IP,
        timeout: 6000,
        headers: {
            'api-key': process.env.REACT_APP_KEY,
            'Content-Type': contentType,
            'google-jwt-token': token,
            'response-type': null
            
        }
    });

    return instance;
}
