import React from 'react';
import Button from '../../../UI/Button/Button';
import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    
    <ul className={classes.NavigationItems}>
        <NavigationItem exact link='/admin' >Home</NavigationItem>
        <NavigationItem exact link='/admin/members' >Members</NavigationItem>
        <NavigationItem exact link='/admin/analytics' >Analytics</NavigationItem>
    </ul>
);

export default navigationItems;