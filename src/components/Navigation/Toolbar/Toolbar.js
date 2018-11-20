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
import { CSSTransition } from 'react-transition-group';

//get state from reducers
import { connect } from 'react-redux';

class Toolbar extends Component {

    state = {
        mobileNavClicked: false,
        showToolbar: false
    }

    componentDidMount(){
        this.setState({showToolbar: true});
    }

    drawerToggleHandler = () => {
        this.setState({ mobileNavClicked: !this.state.mobileNavClicked });
    }
    
    failure = (response) =>{
        //console.log(JSON.stringify(response));
    }

    _logout = async () =>{
        await localStorage.clear();
        await this.setState({showToolbar: false});

        //wait for toolbar to animate out
        setTimeout(function() { 
            this.props.onLogout(); 
        }.bind(this), 600);
        
    }

    render() {

        return (
            <CSSTransition
                in={this.state.showToolbar}
                timeout={1600}
                classNames="navigation"
                appear={true}
                unmountOnExit

            >
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
            </CSSTransition>
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