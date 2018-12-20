import React from 'react';
import classes from './Toolbar.scss';
import * as Page from './ToolbarPages';
import Item from './Item/Item';

const toolbar = (props) =>{
    return(
        <div className={classes.container}>
            <div className={classes.header}>Manage</div>
            <Item id={Page.ACTIVE} activeId={props.active} setActive={props.setActive}>Actives</Item>
            <Item id={Page.INACTIVE} activeId={props.active} setActive={props.setActive}>Inactives</Item>
            <Item id={Page.ALUMNI} activeId={props.active} setActive={props.setActive}>Alumni</Item>
        </div>
    )
}

export default toolbar;