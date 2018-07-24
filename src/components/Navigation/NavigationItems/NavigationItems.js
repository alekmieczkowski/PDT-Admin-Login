import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link={props.url+""} exact>Home</NavigationItem>
        <NavigationItem link={props.url+"/members"} exact>Members</NavigationItem>
        <NavigationItem link={props.url+"/settings"} exact>Settings</NavigationItem>
    </ul>
);

export default navigationItems;