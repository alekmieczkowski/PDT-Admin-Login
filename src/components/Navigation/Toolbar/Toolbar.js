import React, { Component } from 'react';
import classes from './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';
import * as authActions from '../../../store/actions/auth';
import * as transitionActions from '../../../store/actions/transition';
import { withRouter } from 'react-router-dom';
import DrawerToggle from '../MobileNav/DrawerToggle/DrawerToggle';
import MobileNav from '../MobileNav/MobileNav';
import { GoogleLogout } from 'react-google-login';
import { CSSTransition } from 'react-transition-group';
import {logout} from '../../../services/Auth/AuthService';

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
        console.log("Logout pressed");
        
        

        //check if google api session exists, if not then clear storage and force sign out.
        if (window.gapi) {
            const auth2 = window.gapi.auth2.getAuthInstance()
            if (auth2 != null) {
                auth2.signOut().then(
                    auth2.disconnect().then(this.props.onLogoutSuccess)
                )
            }
        }
        
        //fade out toolbar
        this.setState({showToolbar: false});
        //fade out page
        this.props.fadeOut();
        
        //wait for toolbar to animate out
        setTimeout(function() { 
            //this.props.onLogout(); 

            //AuthService.logout()
            logout();
            this.props.history.push("/login");
        }.bind(this), 600);
        this.forceUpdate();
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
                    <Button buttonCSS={classes.ButtonCSS} textCSS={classes.buttonText} type="logout" size="16px" clicked={this._logout}>Logout</Button> 

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



//dispatch this.props to auth reducer
const mapDispatchToprops = dispatch => {
    return {
        fadeOut: () => dispatch({ type: transitionActions.TRANSITION_STOP }),
    }
};

export default withRouter(connect(null, mapDispatchToprops)(Toolbar));