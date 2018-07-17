import React, {Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import LoginForm from './LoginForm/LoginForm';

class Login extends Component {

    render() {
        
        return(
            <Layout>
                    <LoginForm/>
            </Layout>
        );
    }

}

export default Login;