import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import PrivateRoute from './services/Auth/PrivateRoute';
import Layout from './hoc/Layout/Layout';
import HomePage from './containers/Homepage/Home';
import Members from './components/Members/Members';
import Analytics from './components/Analytics/Analytics';
import Login from './containers/Login/Login';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    console.log("in app");
    console.log("Auth status: " +this.props.auth);
    return (
      <BrowserRouter>
        <Layout auth={this.props.auth}>
          <Switch>
            <PrivateRoute path={'/home'}      exact  auth={this.props.auth} component={HomePage} />
            <PrivateRoute path={'/members'}   exact  auth={this.props.auth} component={Members} />
            <PrivateRoute path={'/analytics'} exact  auth={this.props.auth} component={Analytics} />
            <Route path='/login' component={Login}/>
            {/*<Redirect from={'/'} to={'/home'}/>*/}
            {this.props.auth ?  <Redirect to={'/home'}/> : <Redirect to={'/login'}/>}
        </Switch>
      </Layout>
    </BrowserRouter>
    );
  }
}

//map auth state in reducer to local state
const mapStateToProps = state => {
  return {
      auth: state.authenticated
  };
};


export default connect(mapStateToProps)(App);
