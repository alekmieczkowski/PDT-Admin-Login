import React, { Component } from 'react';
import LoginView from '../../components/Login/Login';
import classes from './Login.scss';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { clientId } from '../../constants/secrets';
import * as authActions from '../../store/auth/actions-auth';
import * as spinnerActions from '../../store/spinner/actions-spinner';
import * as transitionActions from '../../store/transition/actions-transition';
import GoogleButton from '../../components/Login/GoogleButton/GoogleButton';
import { requestUserAccessRequest, ENUM_USERACCESSREQUEST_STATUS_ACCEPTED } from '../../Api/accessRequest';
import { getUsers } from '../../Api/users';
import { getPosts } from '../../Api/posts';
import { CSSTransition } from 'react-transition-group';
import { authHeader } from '../../services/Auth/AuthService';




class Login extends Component {

    state={
        animateIn: false
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

        if (requestResponse.status !== ENUM_USERACCESSREQUEST_STATUS_ACCEPTED) {
            //if user is not active
            alert("Sorry, you are not authorized to access this app");
        }
        else {
            //start animation out
            this.props.onLogin();
            this.setState({animateIn: false});
            //save token to localstorage
            await localStorage.setItem("token", JSON.stringify(response.tokenId));

            //save google sign in instance to storage
            await localStorage.setItem("gapi", window.gapi.auth2.getAuthInstance());


            //pull user data
            await getUsers(response.tokenId).then(response => {
                //console.log(JSON.stringify(response.result));
                localStorage.setItem("users", JSON.stringify(response.result));
            });

            //pull post data
            await getPosts(response.tokenId).then(response => {
                //console.log(JSON.stringify(response.result));
                localStorage.setItem("posts", JSON.stringify(response.result));
            });

            //hide spinner
            this.props.stopSpinner();

            

            //Allow User past
            this.props.history.push("/");
        }

    }

    error = (response) => {

        alert(response.error) // eslint-disable-line
    }

    loading = () => {
        //console.log('loading') // eslint-disable-line
    }

    componentDidMount(){

        //check if user is already logged in
        if(authHeader() !== false){
            console.log("in push");
            this.props.history.push("/");
        }
        else{
            this.setState({animateIn: true});
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
                            clientId={clientId}
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




//map auth state in reducer to local state
const mapStateToProps = state => {
    //console.log("Mapping redux to state");
    return {
        auth: state.authenticated
    };
};

//dispatch props to auth reducer
const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch({ type: authActions.LOGIN, payload: { spinnerText: "Loading Data" } }),
        stopSpinner: () => dispatch({ type: spinnerActions.STOP }),
        startTransition: () => dispatch({type: transitionActions.TRANSITION_START})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);