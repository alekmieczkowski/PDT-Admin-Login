import React, {Component} from 'react';
import LoginComp from '../../components/Login/Login';
import classes from './Login.css';
import * as actionTypes from '../../store/auth/actions-auth';
//get state from reducers
import {connect} from 'react-redux';

class Login extends Component {


        
        render(){

            console.log("In login");

            //temp
            if(this.props.auth === true){
                
                this.props.history.push('/');
            }

                
                return(
                        <div className={classes.Wrapper}>
                        <LoginComp signIn={this.props.onLogin}/>
                        </div>
                    
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