import React, {Component} from 'react';
import classes from './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';
import * as actionTypes from '../../../store/auth/actions-auth';
import {withRouter} from 'react-router-dom';
import DrawerToggle from '../MobileNav/DrawerToggle/DrawerToggle';
import MobileNav from '../MobileNav/MobileNav';

//get state from reducers
import {connect} from 'react-redux';

 class Toolbar extends Component{
    
    state = {
        mobileNavClicked: false
    }

    drawerToggleHandler = () =>{
        this.setState({mobileNavClicked: !this.state.mobileNavClicked});
    }

    render(){

        return(
            <header className={classes.Toolbar}>
                <DrawerToggle toggleHandler={this.drawerToggleHandler} toggle={this.state.mobileNavClicked}/>
               
                <div className={classes.Logo}>
                    <Logo height="36px" width="80px" color="#003054"/>
                </div >
                <div  className={classes.DesktopOnly}>
                    <nav>
                        <NavigationItems url={this.props.url} onLogout={()=> this.props.onLogout()}/> 
                        
                        
                    </nav>
                    <Button buttonCSS={classes.ButtonCSS} type="logout" size="16px"clicked={()=> this.props.onLogout()}>Logout</Button>
                    
                </div>
                <div className={classes.MobileOnly}>
                    <Button buttonCSS={classes.ButtonMobileCSS} type="logout" size="16px"clicked={()=> this.props.onLogout()}/>
                    <MobileNav toggle={this.state.mobileNavClicked} toggleHandler={this.drawerToggleHandler}/>
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
            onLogout: () => dispatch({type: actionTypes.LOGOUT}),
        }
    };

export default withRouter(connect(mapStateToprops, mapDispatchToprops)(Toolbar));