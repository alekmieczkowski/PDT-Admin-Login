import React from 'react';
import classes from './Post.scss';
import Postuser from './Postuser/Postuser';

const post = (props) => (

    <div className={classes.Container}>
        <Postuser Image={props.data.User.profile_img} Name={[props.data.User.fname, props.data.User.lname].join(' ')} Bond={props.data.User.bond}/>
        <p className={classes.PostText}>{props.data.post}</p>
    </div>
   
);


export default post;