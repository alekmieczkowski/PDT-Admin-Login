import React from 'react';
import PrivateRoute from '../../../services/Auth/PrivateRoute';
import AdminHome from '../../../containers/AdminPortal/AdminHome/AdminHome';

import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';



const adminRouting = (props) => {

    return (

        <Switch>
            <PrivateRoute path={'/admin/analytics'} auth={props.auth} component={AdminHome} />
            <PrivateRoute path={'/admin/members'} auth={props.auth} component={AdminHome} />
            <PrivateRoute path={'/admin/home'}   auth={props.auth} component={AdminHome} />
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