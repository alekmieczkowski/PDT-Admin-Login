import React from 'react';
import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    
    <ul className={classes.NavigationItems}>
        <NavigationItem  exact link={'/Admin'} >Portal</NavigationItem>
        <NavigationItem  link={'/Admin/Members'} >Members</NavigationItem>
        <NavigationItem  link={'/Admin/Positions'} >Positions</NavigationItem>
    </ul>
);

export default navigationItems;