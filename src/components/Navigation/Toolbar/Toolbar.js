import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';
import * as actionTypes from '../../../store/auth/actions-auth';
import {withRouter} from 'react-router-dom';

//get state from reducers
import {connect} from 'react-redux';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        
        <div className={classes.Logo}>
            <Logo height="36px" width="80px" color="#003054"/>
        </div >
        <nav className={classes.DesktopOnly}>
            <NavigationItems url={props.url} />
            
        </nav>
        <Button type="logout" size="16px"clicked={()=> props.onLogout()}>Logout</Button>
    </header>
);

const mapStateToProps = state => {
    return {
        auth: state.authenticated
    };
};

    //dispatch props to auth reducer
    const mapDispatchToProps = dispatch => {
        return {
            onLogout: () => dispatch({type: actionTypes.LOGOUT}),
        }
    };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(toolbar));