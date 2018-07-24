import React from 'react';
//import classes from './Routing.css';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Aux from '../../hoc/Wrapper/Wrapper';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../services/Auth/PrivateRoute';
import {connect} from 'react-redux';


const routing = (props) => {

    {props.auth ? <Home/> : <Login/>}

        return(
            <Aux>
                <Router basename="/">
                    <Switch>
                        <PrivateRoute path={'/home'} auth={props.auth} component={Home} />
                        <Route path={'/login'} component={Login}/>
                        <Redirect to={'/home'}/>
                    </Switch>
                </Router>
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