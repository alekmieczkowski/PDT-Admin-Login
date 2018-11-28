import React from 'react';
import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    
    <ul className={classes.NavigationItems}>
        <NavigationItem  exact link={'/admin'} >Portal</NavigationItem>
        <NavigationItem  link={'/admin/members'} >Members</NavigationItem>
        <NavigationItem  link={'/admin/analytics'} >Analytics</NavigationItem>
    </ul>
);

export default navigationItems;