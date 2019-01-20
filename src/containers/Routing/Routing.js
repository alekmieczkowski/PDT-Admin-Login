import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import PrivateRoute from './PrivateRoute';
import {Switch, Route, withRouter } from 'react-router-dom';

//pages
import Blog from '../Blog/Blog';
//import Calendar from '../Calendar/Calendar';
import Directory from '../Directory/Directory';
import Profile from '../Profile/Profile';
import AdminPortal from '../../containers/AdminPortal/AdminPortal';
import Login from '../Login/Login';

const routing = (props) => {

        return(
            <Layout>         
                <Switch>
                    <PrivateRoute path={'/Admin'}       component={AdminPortal} />
                    <PrivateRoute path={'/Profile'}     component={Profile} />
                    <PrivateRoute path={'/Directory'}   component={Directory} />
                    {/*<PrivateRoute path={'/Calendar'}    component={Calendar} />*/}
                    <PrivateRoute path={'/'}   exact    component={Blog} />
                    <Route path='/login' component={Login}/>
                </Switch>
            </Layout>                
        );

}


export default withRouter(routing);