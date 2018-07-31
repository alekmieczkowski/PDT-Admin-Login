import React from 'react';
import classes from './Likecount.css';
import Heart from './Heart/Heart';


const likecount = (props) => (

    <div className={classes.Container}>
       <Heart IconColor={"#003056"} size="25px"/>
       <p className={classes.CountText}>{props.count}</p>
    </div>
   
);


export default likecount;