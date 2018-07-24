import React, {Component} from 'react';
import Login_Comp from '../../components/Login/Login';
import * as actionTypes from '../../store/auth/actions-auth';

//get state from reducers
import {connect} from 'react-redux';

class Login extends Component {

        render(){

                const width = "340px";

                return(
                        <Login_Comp width={width} signIn={this.props.onLogin}/>
                );
        }
}

//map auth state in reducer to local state
const mapStateToProps = state => {
        return {
            auth: state.authenticated
        };
    };
    
    //dispatch props to auth reducer
    const mapDispatchToProps = dispatch => {
        return {
            onLogin: () => dispatch({type: actionTypes.LOGIN}),
        }
    };

export default connect(mapStateToProps,mapDispatchToProps)(Login);