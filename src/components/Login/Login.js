import React, {Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import Form from '../../hoc/Form/Form';
import Logo from '../Logo/Logo';
import GoogleButton from './GoogleButton/GoogleButton';
import classes from './Login.css';

class Login extends Component {


    onSignInHandler = () =>{
        alert("You Pressed Sign In!");
    }

    render() {
        
        const width = "340px";


        return(
            <Layout>
                <Form minWidth={width}>
                    <Logo height="140px" color="#003054"/>
                    <hr className={classes.Divider}/>
                    <GoogleButton minWidth={width} clicked={this.onSignInHandler}/>
                </Form>
            </Layout>
        );
    }

}

export default Login;