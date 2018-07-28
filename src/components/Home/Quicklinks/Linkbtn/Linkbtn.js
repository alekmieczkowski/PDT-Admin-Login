import React from 'react';
import classes from './Linkbtn.css';
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
        <div className={classes.Linkbtn}>
            <NavLink to={props.link} exact={props.exact}>
                <p className={classes.Text}>
                    {badge}
                    {props.children}
                </p>
            </NavLink>
        </div>
    );
   
};


export default withRouter(linkbtn);