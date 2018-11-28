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





const routing = (props) => {

        return(
            <Aux>
                
                    <Layout>
                        {props.auth ? <Toolbar/>: null}
                        
                        <Switch>
                            <PrivateRoute path={'/Admin'}        auth={props.auth} component={AdminPortal} />
                            <PrivateRoute path={'/Profile'}    auth={props.auth} component={Profile} />
                            <PrivateRoute path={'/Directory'}    auth={props.auth} component={Directory} />
                            <PrivateRoute path={'/Calendar'}      auth={props.auth} component={Calendar} />
                            <PrivateRoute path={'/'}   exact     auth={props.auth} component={Blog} />
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