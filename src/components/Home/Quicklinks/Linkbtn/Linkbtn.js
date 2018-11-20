import React from 'react';
import classes from './Linkbtn.scss';
import {withRouter, NavLink} from 'react-router-dom';

const linkbtn = (props) => {

    let badge = null;
    if(props.badgeNumber){
        badge = 
        <span className={classes.Badge}>
            <b className={classes.BadgeText}>{props.badgeNumber}</b>       
        </span>
        ;
    }

    return(
        <NavLink className={classes.Linkbtn} to={props.link} exact={props.exact}>
                <p className={classes.Text}>
                    {badge}
                    {props.children}
                </p>
        </NavLink>
    );
   
};


export default withRouter(linkbtn);