import React from 'react';
import classes from './Badge.scss';


const badge = (props) => (
    <div className={classes.Badge}>
        <p className={classes.BadgeText}>{props.children}</p>
    </div>
   
);


export default badge;