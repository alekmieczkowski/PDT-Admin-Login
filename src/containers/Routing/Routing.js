import React from 'react';
//import classes from './Routing.css';
import Layout from '../../hoc/Layout/Layout';
import Aux from '../../hoc/Wrapper/Wrapper';
import PrivateRoute from '../../services/Auth/PrivateRoute';
import HomePage from '../../containers/Homepage/Homepage';
import Members from '../../components/Members/Members';
import Analytics from '../../components/Analytics/Analytics';
import Login from '../Login/Login';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import {connect} from 'react-redux';
import {Redirect, Switch, Route, withRouter } from 'react-router-dom';



const routing = (props) => {

        return(
            <Aux>
                
                    <Layout>
                        {props.auth ? <Toolbar/>: null}
                        <Switch>
                            <PrivateRoute path={'/analytics'}   auth={props.auth} component={Analytics} />
                            <PrivateRoute path={'/members'}     auth={props.auth} component={Members} />
                            <PrivateRoute path={'/'}   exact    auth={props.auth} component={HomePage} />
                            
                            <Route path='/login' component={Login}/>
                            {props.auth ?  <Redirect to={'/'}/> : <Redirect to={'/login'}/>}
                        </Switch>
        
        
                    </Layout>
                 
            </Aux>
        );

}

//map auth state in reducer to local state
const mapStateToProps = state => {
    return {
        auth: state.authenticated
    };
};




export default withRouter(connect(mapStateToProps)(routing));