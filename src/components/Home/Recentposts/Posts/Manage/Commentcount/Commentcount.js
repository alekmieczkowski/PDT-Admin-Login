import React from 'react';
import classes from './Commentcount.css';
import Button from '../../../../../UI/Button/Button';


const likecount = (props) => (

    <div className={classes.Container}>
       <Button type="comment" buttonCSS={classes.ButtonCSS} iconColor={classes.ButtonIconColor} IconSize={25} onClick={props.onRemove}/>
       <p className={classes.CountText}>{props.count}</p>
    </div>
   
);


export default likecount;