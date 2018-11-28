import axios from 'axios';
import {secretKey, serverIP} from '../constants/secrets';


export default  function axiosInstance(token){
    let instance = axios.create({
        baseURL: serverIP,
        timeout: 6000,
        headers: {
            'api_key': secretKey,
            'Content-Type': 'application/json',
            'google_jwt_token': token,
            
        }
    });

    return instance;
}
