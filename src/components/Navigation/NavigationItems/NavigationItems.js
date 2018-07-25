import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/home' strict exact >Home</NavigationItem>
        <NavigationItem link={'/members'} strict>Members</NavigationItem>
        <NavigationItem link={'/analytics'} strict>Analytics</NavigationItem>

    </ul>
);

export default navigationItems;