import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    
    <ul className={classes.NavigationItems}>
        <NavigationItem exact link='/'   >Home</NavigationItem>
        <NavigationItem exact link='/members' >Members</NavigationItem>
        <NavigationItem exact link='/analytics' >Analytics</NavigationItem>

        {/* navigation item for admin testing */}
        <NavigationItem exact link='/testing' >Testing</NavigationItem>
    </ul>
);

export default navigationItems;