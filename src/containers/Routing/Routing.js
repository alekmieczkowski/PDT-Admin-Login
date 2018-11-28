import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import Aux from '../../hoc/Wrapper/Wrapper';
import PrivateRoute from '../../services/Auth/PrivateRoute';
import {connect} from 'react-redux';
import {Switch, Route, withRouter } from 'react-router-dom';

//Pages
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Blog from '../Blog/Blog';
import Calendar from '../Calendar/Calendar';
import Directory from '../Directory/Directory';
import Profile from '../Profile/Profile';
import AdminPortal from '../../containers/AdminPortal/AdminPortal';
import Login from '../Login/Login';
import {authHeader} from '../../services/Auth/AuthService';





const routing = (props) => {

        return(
            <Aux>
                
                    <Layout>
                        {authHeader() !== false ? <Toolbar/>: null}
                        
                        <Switch>
                            <PrivateRoute path={'/Admin'}         component={AdminPortal} />
                            <PrivateRoute path={'/Profile'}     component={Profile} />
                            <PrivateRoute path={'/Directory'}    component={Directory} />
                            <PrivateRoute path={'/Calendar'}   component={Calendar} />
                            <PrivateRoute path={'/'}   exact    component={Blog} />
                            <Route path='/login' component={Login}/>
                        </Switch>
                        
        
        
                    </Layout>
                 
            </Aux>
        );

}

//map auth state in reducer to local state
const mapStateToProps = state => {
    //console.log("In router auth:" + JSON.stringify(state.auth));
    return {
        auth: state.auth,
        
    };
};

export default withRouter(connect(mapStateToProps)(routing));