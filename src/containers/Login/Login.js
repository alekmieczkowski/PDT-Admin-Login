import React, { Component } from 'react';
import LoginView from '../../components/Login/Login';
import classes from './Login.scss';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import * as transitionActions from '../../store/actions/transition';
import GoogleButton from '../../components/Login/GoogleButton/GoogleButton';
import { requestUserAccessRequest, ENUM_USERACCESSREQUEST_STATUS_ACCEPTED, ENUM_USERACCESSREQUEST_STATUS_DENIED, ENUM_USERACCESSREQUEST_STATUS_WAITING } from '../../Api/accessRequest';
import { CSSTransition } from 'react-transition-group';

//signup stuff
import Signup from '../../components/Login/Signup/Signup';

//Auth service
import * as AuthService from '../../services/AuthService';

//error service
import { showError } from '../../services/ErrorService';

//loading service
import {showLoading, hideLoading} from '../../services/LoadingService';


class Login extends Component {

    state = {
        animateIn: false,
        showSignUp: false,
        registerToken: '',
    }

    componentDidMount() {

        //check if user is already logged in
        if (AuthService.authHeader() !== false) {
            this.props.history.push("/");
        }
        else {
            this.setState({ animateIn: true });
        }
        

    }


    componentWillUnmount() {
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
        if (requestResponse === null) {
            //no response
            showError("Error Connecting to Server");

        }
        else if (Object.keys(requestResponse).length === 0 && requestResponse.constructor === Object) {
            //user first time sign up
            this.setState({ animateIn: false, registerToken: response.tokenId });

            setTimeout(
                function () {
                    this.setState({ showSignUp: true });
                }
                    .bind(this),
                1000
            );

        }
        else if (requestResponse.status === ENUM_USERACCESSREQUEST_STATUS_DENIED) {
            //if user is denied
            alert("Sorry, you are not authorized to access this app");
        }
        else if (requestResponse.status === ENUM_USERACCESSREQUEST_STATUS_WAITING) {
            //user is awaiting authentication
            showError("Awaiting user authorization. Please contact your admin");
        }
        else {
            //user is authenticated

           

            //start animation out
            this.setState({ animateIn: false });

            //AuthService.login
            await AuthService.login(response.tokenId);

             //save google object for refresh
             await AuthService.saveGoogleLogin(response);

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

    /*Handle Sign Up*/
    _closeSignup = async () => {
        this.setState({ showSignUp: false });

        await setTimeout(
            function () {
                this.setState({ animateIn: true });
            }
                .bind(this),
            1000
        );

    }

    _submitSignup = async (phone, bond)=>{

        showLoading("Signing User Up");
        //submit user sign in request
        let requestResponse = null;


        //call server sign in
        await requestUserAccessRequest(this.state.registerToken, bond, phone).then(response => {


            if (!(response instanceof Error)) {//if not error
                requestResponse = response.result.useraccessrequest;
            }
        });

        //if server request was null
        if (requestResponse === null) {
            //no response
            showError("Error Connecting to Server");

            hideLoading();
        }
        else{
            //transition back to login
            await this._closeSignup();

            hideLoading();
            //no error and we good
            showError("Sign Up successful! Please contact an Admin to be approved");
        }
        
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
                            //responseType="id_token"
                            render={renderProps => (
                                <GoogleButton onClick={renderProps.onClick} />
                            )}
                        />
                    </LoginView>

                </CSSTransition>

                {/*Sign up Screen*/}
                <CSSTransition
                    in={this.state.showSignUp}
                    timeout={800}
                    classNames="login"
                    appear={true}
                    unmountOnExit

                >
                    <Signup dismiss={this._closeSignup} submit={this._submitSignup} />

                </CSSTransition>
            </div>


        );
    }

}




//dispatch props to auth reducer
const mapDispatchToProps = dispatch => {
    return {
        startTransition: () => dispatch({ type: transitionActions.TRANSITION_START })
    }
};
export default connect(null, mapDispatchToProps)(Login);