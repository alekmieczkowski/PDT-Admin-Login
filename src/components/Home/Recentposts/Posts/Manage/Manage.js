import React from 'react';
import classes from './Manage.scss';
import LikeCount from './Likecount/Likecount';
import Commentcount from './Commentcount/Commentcount';
import Button from '../../../../UI/Button/Button';

const manage = (props) => (

    <div className={classes.Container}>
        <Button type="clear" buttonCSS={classes.ButtonCSS} iconColor={classes.ButtonIconColor} IconSize={25} clicked={props.delete}/>
        <LikeCount count={props.LikeCount}/>
        <Commentcount count={props.CommentCount}/>
    </div>
   
);


export default manage;