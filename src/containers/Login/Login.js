import React, { Component } from 'react';
import LoginView from '../../components/Login/Login';
import classes from './Login.scss';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { clientId } from '../../constants/secrets';
import * as actionTypes from '../../store/auth/actions-auth';
import GoogleButton from '../../components/Login/GoogleButton/GoogleButton';
import { requestUserAccessRequest, ENUM_USERACCESSREQUEST_STATUS_ACCEPTED, ENUM_USERACCESSREQUEST_STATUS_DENIED, ENUM_USERACCESSREQUEST_STATUS_WAITING } from '../../Api/accessRequest';




class Login extends Component {


    success = async (response) => {
        //console.log(JSON.stringify(response));
        //console.log(response.tokenId) // eslint-disable-line

        let requestResponse = null;
        //call server sign in
        await requestUserAccessRequest(response.tokenId, null, null).then(response => {
            if (!(response instanceof Error)) {//if not error
                requestResponse = response.result.useraccessrequest;
            }
          });
        
        if(requestResponse.status !== ENUM_USERACCESSREQUEST_STATUS_ACCEPTED){
            //if user is not active
            alert("Sorry, you are not authorized to access this app");
        }
        else{
            //sign user in
            this.props.onLogin();
            this.props.history.push("/");
        }

    }

    error = (response) => {

        alert(response.error) // eslint-disable-line
    }

    loading = () => {
        console.log('loading') // eslint-disable-line
    }


    render() {

        

        return (
            <div className={classes.Wrapper}>
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
            </div>


        );
    }
}

//map auth state in reducer to local state
const mapStateToProps = state => {
    console.log("Mapping redux to state");
    return {
        auth: state.authenticated
    };
};

//dispatch props to auth reducer
const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch({ type: actionTypes.LOGIN }),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);