import React from 'react';
import PrivateRoute from '../../../services/Auth/PrivateRoute';
import HomePage from '../../../containers/AdminPortal/Homepage/Homepage';
import Members from '../../AdminPortal/Members/Members';

import { connect } from 'react-redux';
import { Switch, withRouter, Route } from 'react-router-dom';



const adminRouting = (props) => {

    console.log(props.match);
    return (

        <Switch>
            <PrivateRoute path={'/Admin/Analytics'} auth={props.auth} component={Members} />
            <PrivateRoute path={'/Admin/Members'}  auth={props.auth} component={Members} />
            <PrivateRoute path={'/Admin'}    auth={props.auth} component={HomePage} />
        </Switch>

    );

}

//map auth state in reducer to local state
const mapStateToProps = state => {
    //console.log("In router auth:" + JSON.stringify(state.auth));
    return {
        auth: state.auth,

    };
};

export default withRouter(connect(mapStateToProps)(adminRouting));