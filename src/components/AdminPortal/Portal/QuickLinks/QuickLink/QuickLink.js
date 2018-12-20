import React from 'react';
import Button from '../../../../UI/Button/Button';
import { NavLink } from 'react-router-dom';
import classes from './QuickLink.scss';

const quicklink = (props) =>{

    return(
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={{textDecoration: 'none'}}
            >
            
            <Button clicked={null} buttonCSS={classes.button} textCSS={classes.buttonText} iconSize={200} iconColor={'#003056'} type={props.type}>{props.children}</Button>
            
            </NavLink>


    )
}
export default quicklink;