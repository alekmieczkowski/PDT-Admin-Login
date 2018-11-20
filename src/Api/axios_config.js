import axios from 'axios';
import {secretKey} from '../constants/secrets';


export default  function axiosInstance(token){
    console.log("Token:" + token);
    let instance = axios.create({
        baseURL: 'http://10.0.0.4:8000',
        timeout: 6000,
        headers: {
            'api_key': secretKey,
            'Content-Type': 'application/json',
            'google_jwt_token': token,
            
        }
    });

    return instance;
}
