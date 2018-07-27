import React, {Component} from 'react';
import LoginComp from '../../components/Login/Login';
import Layout from '../../hoc/Layout/Layout';
import * as actionTypes from '../../store/auth/actions-auth';
import { withRouter, Redirect } from "react-router-dom";
//get state from reducers
import {connect} from 'react-redux';

class Login extends Component {


        
        render(){
            let plzwork = this.props.auth ?  <Redirect to={'/home'}/> : null;

            console.log("In login");

            //temp
            if(this.props.auth === true){
                
                this.props.history.push('/');
            }
            

                const width = "340px";

                
                return(
                        
                        <LoginComp width={width} signIn={this.props.onLogin}/>
                    
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