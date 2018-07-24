import React, {Component} from 'react';
//import classes from './Routing.css';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Aux from '../../hoc/Wrapper/Wrapper';

//get state from reducers
import {connect} from 'react-redux';


const routing = (props) => {

        let page = props.auth ? <Home/> : <Login/>;
        return(
            <Aux>
                {page}
            </Aux>
        );

}

//map auth state in reducer to local state
const mapStateToProps = state => {
    return {
        auth: state.authenticated
    };
};

export default connect(mapStateToProps)(routing);