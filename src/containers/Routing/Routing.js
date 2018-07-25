import React from 'react';
//import classes from './Routing.css';
import Login from '../Login/Login';
import Home from '../Homepage/Home';
import Aux from '../../hoc/Wrapper/Wrapper';
import {Redirect, Switch, Route } from 'react-router-dom';



const routing = (props) => {

        return(
            <Aux>
                <div>
                    
                   
                    </div>
                
            </Aux>
        );

}

//map auth state in reducer to local state
const mapStateToProps = state => {
    return {
        auth: state.authenticated
    };
};




export default routing;