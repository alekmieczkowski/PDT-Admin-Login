import React from 'react';
import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    
    <ul className={classes.NavigationItems}>
        <NavigationItem exact link='/'   >Posts</NavigationItem>
        {/*<NavigationItem exact link='/Calendar' >Calendar</NavigationItem>*/}
        <NavigationItem  link='/Directory' >Directory</NavigationItem>
        <NavigationItem exact link='/Profile' >Profile</NavigationItem>
        {props.admin ? <NavigationItem  link='/Admin' >Admin Portal</NavigationItem> : null}
    </ul>
);

export default navigationItems;