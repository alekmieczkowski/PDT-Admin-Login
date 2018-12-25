import React from 'react';
import PrivateRoute from '..//PrivateRoute';
import HomePage from '../../../containers/AdminPortal/Homepage/Homepage';
import Positions from '../../AdminPortal/Positions/Positions'

import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';


import MemberRouting from './MemberRouting';


const adminRouting = (props) => {

    console.log(props.match);
    return (

        <Switch>
            <PrivateRoute path={'/Admin/Positions'} auth={props.auth} component={Positions} />
            <PrivateRoute path={'/Admin/Members'}  auth={props.auth} component={MemberRouting} />
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