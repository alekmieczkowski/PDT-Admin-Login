import React from 'react';
import PrivateRoute from '..//PrivateRoute';
import Members from '../../AdminPortal/Members/Members';
import * as Page from '../../../components/AdminPortal/Members/Toolbar/ToolbarPages';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';



const memberRouting = (props) => {

    console.log(props.match);
    return (

        <Switch>          
            <PrivateRoute path={'/Admin/Members/Removed'}  auth={props.auth} component={() => <Members page={Page.REMOVED}/>} />
            <PrivateRoute path={'/Admin/Members/Alumni'}    auth={props.auth} component={() => <Members page={Page.ALUMNI}/>} />
            <PrivateRoute path={'/Admin/Members/Pending'}    auth={props.auth} component={() => <Members page={Page.PENDING}/>} />
            <PrivateRoute path={'/Admin/Members'} auth={props.auth} component={() => <Members page={Page.ACTIVE}/>} />
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

export default withRouter(connect(mapStateToProps)(memberRouting));