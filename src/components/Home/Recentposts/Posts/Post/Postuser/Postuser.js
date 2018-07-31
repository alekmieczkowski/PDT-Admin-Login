import React from 'react';
import classes from './Postuser.css';


const postuser = (props) => (

    <div className={classes.Container}>
        
        <img className={classes.ImgStyle} src={props.Image} alt="profile"/>
        
        <div className={classes.UserInfoDiv}>
            <p className={classes.UserText}>{props.Name}</p>
            <p className={classes.BondText}>{props.Bond}</p>
        </div>
        
    </div>
   
);


export default postuser;