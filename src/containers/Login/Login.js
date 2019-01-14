import React, { Component } from 'react';
import LoginView from '../../components/Login/Login';
import classes from './Login.scss';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import * as transitionActions from '../../store/actions/transition';
import GoogleButton from '../../components/Login/GoogleButton/GoogleButton';
import { requestUserAccessRequest, ENUM_USERACCESSREQUEST_STATUS_ACCEPTED } from '../../Api/accessRequest';
import { CSSTransition } from 'react-transition-group';

//Auth service
import * as AuthService from '../../services/AuthService';

//error service
import {showError} from '../../services/ErrorService';


class Login extends Component {

    state={
        animateIn: false
    }

    componentDidMount(){

        //check if user is already logged in
        if(AuthService.authHeader() !== false){
            this.props.history.push("/");
        }
        else{
            this.setState({animateIn: true});
        }
        
    }
    

    componentWillUnmount(){
        //start transtion animation for homepage
        this.props.startTransition();
    }


    success = async (response) => {
        
        let requestResponse = null;
        //call server sign in
        await requestUserAccessRequest(response.tokenId, null, null).then(response => {
            
            
            if (!(response instanceof Error)) {//if not error
                requestResponse = response.result.useraccessrequest;
            }
        });

        //if server request was null
        if(requestResponse === null){
            showError("Error Connecting to Server");
        }
        else if (requestResponse.status !== ENUM_USERACCESSREQUEST_STATUS_ACCEPTED) {
            //if user is not active
            alert("Sorry, you are not authorized to access this app");
        }
        else {
            
            //start animation out
            this.setState({animateIn: false});
            
            //AuthService.login
            await AuthService.login(response.tokenId);

            //Allow User past
            this.props.history.push("/");
        }

    }

    error = (response) => {
        showError("Error Signing into Google"); // eslint-disable-line
    }

    loading = () => {
        //console.log('loading') // eslint-disable-line
    }

    render() {

        return (
            <div className={classes.Wrapper}>
                <CSSTransition
                    in={this.state.animateIn}
                    timeout={800}
                    classNames="login"
                    appear={true}
                    unmountOnExit

                >
                    <LoginView>
                        <GoogleLogin
                            clientId={process.env.REACT_APP_CLIENT_ID}
                            buttonText="Sign in With google"
                            onSuccess={this.success}
                            onFailure={this.error}
                            onRequest={this.loading}
                            autoload={false}
                            responseType="id_token"
                            render={renderProps => (
                                <GoogleButton onClick={renderProps.onClick} />
                            )}
                        />
                    </LoginView>
                </CSSTransition>
            </div>


        );
    }

}




//dispatch props to auth reducer
const mapDispatchToProps = dispatch => {
    return {
        startTransition: () => dispatch({type: transitionActions.TRANSITION_START})
    }
};
export default connect(null, mapDispatchToProps)(Login);