import React, { Component } from 'react';
import classes from './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';
import * as actionTypes from '../../../store/auth/actions-auth';
import { withRouter } from 'react-router-dom';
import DrawerToggle from '../MobileNav/DrawerToggle/DrawerToggle';
import MobileNav from '../MobileNav/MobileNav';
import { GoogleLogout } from 'react-google-login';

//get state from reducers
import { connect } from 'react-redux';

class Toolbar extends Component {

    state = {
        mobileNavClicked: false
    }

    drawerToggleHandler = () => {
        this.setState({ mobileNavClicked: !this.state.mobileNavClicked });
    }
    
    failure = (response) =>{
        //console.log(JSON.stringify(response));
    }

    _logout = async () =>{
        await localStorage.clear();
        this.props.onLogout();
    }

    render() {

        return (
            <header className={classes.Toolbar}>
                <DrawerToggle toggleHandler={this.drawerToggleHandler} toggle={this.state.mobileNavClicked} />

                <div className={classes.Logo}>
                    <Logo height="36px" width="80px" color="#003054" />
                </div >
                <div className={classes.DesktopOnly}>
                    <nav>
                        <NavigationItems url={this.props.url} />


                    </nav>
                    
                    <GoogleLogout
                        buttonText="Logout"
                        onLogoutSuccess={this._logout}
                        autoload={false}
                        render={renderProps => (
                            <Button buttonCSS={classes.ButtonCSS} type="logout" size="16px" clicked={renderProps.onClick}>Logout</Button>
                        )}
                    />
                </div>
                <div className={classes.MobileOnly}>

                    <GoogleLogout
                        buttonText="Logout"
                        onLogoutSuccess={this._logout}
                        autoload={false}
                        render={renderProps => (
                            <Button buttonCSS={classes.ButtonMobileCSS} type="logout" size="16px" clicked={renderProps.onClick} />
                        )}
                    />
                   
                    <MobileNav toggle={this.state.mobileNavClicked} toggleHandler={this.drawerToggleHandler} />
                </div>

            </header>
        );
    }
}

const mapStateToprops = state => {
    return {
        auth: state.authenticated
    };
};

//dispatch this.props to auth reducer
const mapDispatchToprops = dispatch => {
    return {
        onLogout: () => dispatch({ type: actionTypes.LOGOUT }),
    }
};

export default withRouter(connect(mapStateToprops, mapDispatchToprops)(Toolbar));