import axios from 'axios';


export default  function axiosInstance(token){
    let instance = axios.create({
        baseURL: process.env.REACT_APP_SERVER_IP,
        timeout: 6000,
        headers: {
            'api-key': process.env.REACT_APP_KEY,
            'Content-Type': 'application/json',
            'google-jwt-token': token,
            
        }
    });

    return instance;
}
