import React, {Component} from 'react';
//import classes from './Routing.css';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Aux from '../../hoc/Wrapper/Wrapper';

//auth stuff
import * as actionTypes from '../../store/auth/actions-auth';
import {connect} from 'react-redux';


class Routing extends Component {

    render(){

        let page = this.props.auth ? <Home/> : <Login/>;
        return(
            <Aux>
                {page}
            </Aux>
        );

    }
}

//map auth state in reducer to local state
const mapStateToProps = state => {
    return {
        auth: state.authenticated
    };
};

export default connect(mapStateToProps)(Routing);