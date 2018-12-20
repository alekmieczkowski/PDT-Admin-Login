import React from 'react';
import classes from './Toolbar.scss';
import * as Page from './ToolbarPages';
import Item from './Item/Item';

const toolbar = (props) =>{
    return(
        <div className={classes.container}>
            <div className={classes.header}>Manage</div>
            <Item id={Page.ACTIVE} exact={false} link={'/Admin/Members'} activeId={props.active} setActive={props.setActive}>Actives</Item>
            <Item id={Page.INACTIVE} exact={false} link={'/Admin/Members/Inactive'} activeId={props.active} setActive={props.setActive}>Inactives</Item>
            <Item id={Page.ALUMNI} exact={false} link={'/Admin/Members/Alumni'} activeId={props.active} setActive={props.setActive}>Alumni</Item>
            <Item id={Page.PENDING}exact={false}  link={'/Admin/Members/Pending'} activeId={props.active} setActive={props.setActive}>Pending</Item>
        </div>
    )
}

export default toolbar;