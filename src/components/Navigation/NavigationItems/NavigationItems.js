import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    
    <ul className={classes.NavigationItems}>
        <NavigationItem exact link='/'   >Home</NavigationItem>
        <NavigationItem exact link='/members' >Members</NavigationItem>
        <NavigationItem exact link='/analytics' >Analytics</NavigationItem>
        <Button buttonCSS={classes.ButtonCSS} type="logout" size="16px" clicked={props.onLogout}>Logout</Button> 
    </ul>
);

export default navigationItems;