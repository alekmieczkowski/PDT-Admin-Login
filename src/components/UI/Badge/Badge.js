import React from 'react';
import classes from './Badge.scss';


const badge = (props) => {


    let badgeCSS = classes.standard;
    if(props.invert === true){
        badgeCSS = classes.inverse;
    }
    return(

        <div className={[classes.Badge, badgeCSS].join(' ')}>
        <p className={classes.BadgeText}>{props.children}</p>
    </div>
    )



}


export default badge;