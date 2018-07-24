import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        
        <div className={classes.Logo}>
            <Logo height="36px" width="80px" color="#003054"/>
        </div >
        <nav className={classes.DesktopOnly}>
            <NavigationItems url={props.url} />
        </nav>
    </header>
);

export default toolbar;