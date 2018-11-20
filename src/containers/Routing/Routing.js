import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import Aux from '../../hoc/Wrapper/Wrapper';
import PrivateRoute from '../../services/Auth/PrivateRoute';
import HomePage from '../../containers/Homepage/Homepage';
import Members from '../Members/Members';
import Analytics from '../../components/Analytics/Analytics';
import Login from '../Login/Login';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import {connect} from 'react-redux';
import {Switch, Route, withRouter } from 'react-router-dom';



const routing = (props) => {

        return(
            <Aux>
                
                    <Layout>
                        {props.auth ? <Toolbar/>: null}  
                        <Switch>
                            <PrivateRoute path={'/analytics'}    auth={props.auth} component={Analytics} />
                            <PrivateRoute path={'/members'}      auth={props.auth} component={Members} />
                            <PrivateRoute path={'/'}   exact     auth={props.auth} component={HomePage} />
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