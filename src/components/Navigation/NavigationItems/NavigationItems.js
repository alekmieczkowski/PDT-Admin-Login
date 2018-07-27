import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    
    <ul className={classes.NavigationItems}>
        <NavigationItem exact link='/'   >Home</NavigationItem>
        <NavigationItem exact link='/members' >Members</NavigationItem>
        <NavigationItem exact link='/analytics' >Analytics</NavigationItem>

    </ul>
);

export default navigationItems;